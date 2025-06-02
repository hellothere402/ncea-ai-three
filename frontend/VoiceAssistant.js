import React, { useState, useEffect, useRef } from 'react';
import ChatArea from './ChatArea';
import InputArea from './InputArea';
import Settings from './Settings';
import { processAudioData, generateTextResponse } from '../../services/api';
import { saveSettings, loadSettings } from '../../services/storageService';

const VoiceAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    voiceId: 'nova',
    enableVoiceRecognition: true,
    saveConversations: true,
    hasVoiceProfile: false,
    userName: 'User',
  });
  
  // For client-side only
  const audioPlayerRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  // Processing flag ref to prevent duplicate processing
  const isProcessingRef = useRef(false);

  // Initialize Audio object only on the client side
  useEffect(() => {
    // Audio is only available in the browser, not during server-side rendering
    if (typeof window !== 'undefined') {
      audioPlayerRef.current = new Audio();
    }
  }, []);

  // Load settings on first render
  useEffect(() => {
    const savedSettings = loadSettings();
    if (savedSettings) {
      setSettings(prevSettings => ({
        ...prevSettings,
        ...savedSettings
      }));
    }
    
    // Add welcome message
    setMessages([
      {
        role: 'assistant',
        content: 'Hello! I\'m your voice assistant. How can I help you today?',
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle voice input
  const handleVoiceInput = async (audioBlob) => {
    // Prevent duplicate processing
    if (isProcessingRef.current) {
      console.log('Already processing, ignoring duplicate request');
      return;
    }
    
    try {
      setIsProcessing(true);
      isProcessingRef.current = true;
      
      // Create temporary "listening" message
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'system',
          content: 'Processing your voice...',
          timestamp: new Date(),
          temporary: true
        }
      ]);
      
      // Send audio to backend for processing
      const response = await processAudioData(audioBlob);
      
      // Remove temporary message
      setMessages(prevMessages => 
        prevMessages.filter(msg => !msg.temporary)
      );
      
      // Add user message with transcribed text
      if (response.userSpeech) {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            role: 'user',
            content: response.userSpeech,
            timestamp: new Date()
          }
        ]);
      }
      
      // Add assistant response
      if (response.response && response.response.text) {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            role: 'assistant',
            content: response.response.text,
            timestamp: new Date()
          }
        ]);
        
        // Play audio response if available and browser supports it
        if (response.audio && audioPlayerRef.current) {
          try {
            const audioUrl = `data:audio/mp3;base64,${response.audio}`;
            audioPlayerRef.current.src = audioUrl;
            await audioPlayerRef.current.play();
          } catch (audioError) {
            console.warn('Could not play audio response:', audioError);
          }
        }
      }
    } catch (error) {
      console.error('Error processing voice input:', error);
      
      // Remove any temporary messages first
      setMessages(prevMessages => 
        prevMessages.filter(msg => !msg.temporary)
      );
      
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'system',
          content: 'Sorry, I couldn\'t process your audio. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsProcessing(false);
      isProcessingRef.current = false;
    }
  };

  // Handle text input with similar duplicate prevention
  const handleTextInput = async (text) => {
    // Prevent duplicate processing
    if (isProcessingRef.current) {
      return;
    }
    
    try {
      setIsProcessing(true);
      isProcessingRef.current = true;
      
      // Add user message
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'user',
          content: text,
          timestamp: new Date()
        }
      ]);
      
      // Send text to backend for processing
      const response = await generateTextResponse(text);
      
      // Add assistant response
      if (response.text) {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            role: 'assistant',
            content: response.text,
            timestamp: new Date()
          }
        ]);
        
        // Play audio response if available
        if (response.audio && audioPlayerRef.current) {
          try {
            const audioUrl = `data:audio/mp3;base64,${response.audio}`;
            audioPlayerRef.current.src = audioUrl;
            await audioPlayerRef.current.play();
          } catch (audioError) {
            console.warn('Could not play audio response:', audioError);
          }
        }
      }
    } catch (error) {
      console.error('Error processing text input:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'system',
          content: 'Sorry, I couldn\'t process your message. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsProcessing(false);
      isProcessingRef.current = false;
    }
  };

  const handleSettingsUpdate = (newSettings) => {
    setSettings(prevSettings => {
      const updatedSettings = { ...prevSettings, ...newSettings };
      saveSettings(updatedSettings);
      return updatedSettings;
    });
    setShowSettings(false);
  };

  const handleCreateVoiceProfile = async (audioBlob, userName) => {
    if (isProcessingRef.current) {
      return;
    }
    
    try {
      setIsProcessing(true);
      isProcessingRef.current = true;
      
      // Simulate profile creation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSettings(prevSettings => {
        const updatedSettings = { 
          ...prevSettings, 
          hasVoiceProfile: true,
          userName: userName || 'User'
        };
        saveSettings(updatedSettings);
        return updatedSettings;
      });
      
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'system',
          content: `Voice profile created successfully for ${userName || 'User'}!`,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error creating voice profile:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'system',
          content: 'Sorry, I couldn\'t create your voice profile. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsProcessing(false);
      isProcessingRef.current = false;
    }
  };

  return (
    <div className="voice-assistant">
      <div className="voice-assistant-header">
        <h2>Voice Assistant</h2>
        <button 
          className="settings-button"
          onClick={() => setShowSettings(true)}
          aria-label="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>
      
      <ChatArea 
        messages={messages} 
        messagesEndRef={messagesEndRef}
      />
      
      <InputArea 
        onVoiceInput={handleVoiceInput}
        onTextInput={handleTextInput}
        isProcessing={isProcessing}
        enableVoice={settings.enableVoiceRecognition}
      />
      
      {showSettings && (
        <Settings 
          settings={settings}
          onSave={handleSettingsUpdate}
          onClose={() => setShowSettings(false)}
          onCreateVoiceProfile={handleCreateVoiceProfile}
          isProcessing={isProcessing}
        />
      )}
    </div>
  );
};

export default VoiceAssistant;