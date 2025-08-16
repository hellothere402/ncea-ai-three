import React, { useState, useEffect, useRef } from 'react';
import api from '../services/api';

const VoiceAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your voice assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasVoiceProfile, setHasVoiceProfile] = useState(false);
  
  const messagesEndRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Check for voice profile on mount
  useEffect(() => {
    checkVoiceProfile();
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const checkVoiceProfile = async () => {
    try {
      const result = await api.checkProfile();
      setHasVoiceProfile(result.hasProfile);
      
      if (!result.hasProfile) {
        setMessages(prev => [...prev, {
          role: 'system',
          content: 'No voice profile detected. Please create one by recording a sample of your voice.',
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Error checking voice profile:', error);
    }
  };

  const handleTextInput = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isProcessing) return;

    const userMessage = {
      role: 'user',
      content: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsProcessing(true);

    try {
      const response = await api.processText(inputText);
      
      const aiResponse = {
        role: 'assistant',
        content: response.text,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      // Play audio if available
      if (response.audio) {
        api.playAudioFromBase64(response.audio);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Error: Could not connect to the AI service. Please ensure the backend is running.',
        timestamp: new Date()
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Create MediaRecorder with WAV format support
      const options = { mimeType: 'audio/webm' };
      mediaRecorderRef.current = new MediaRecorder(stream, options);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await processAudioRecording(audioBlob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Listening... Click the microphone again to stop.',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error starting recording:', error);
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Error: Could not access microphone. Please check permissions.',
        timestamp: new Date()
      }]);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudioRecording = async (audioBlob) => {
    setIsProcessing(true);
    
    try {
      // If no voice profile, create one first
      if (!hasVoiceProfile) {
        const profileResult = await api.createProfile(audioBlob, 'User');
        if (profileResult.success) {
          setHasVoiceProfile(true);
          setMessages(prev => [...prev, {
            role: 'system',
            content: 'Voice profile created successfully! You can now use voice commands.',
            timestamp: new Date()
          }]);
        }
        return;
      }

      // Process voice command
      const response = await api.processVoice(audioBlob);
      
      if (response.userSpeech) {
        setMessages(prev => [...prev, {
          role: 'user',
          content: response.userSpeech,
          timestamp: new Date()
        }]);
      }

      if (response.response && response.response.text) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response.response.text,
          timestamp: new Date()
        }]);
        
        // Play audio response if available
        if (response.audio) {
          api.playAudioFromBase64(response.audio);
        }
      }
    } catch (error) {
      console.error('Error processing audio:', error);
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Error: Could not process audio. Please try again.',
        timestamp: new Date()
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVoiceInput = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Voice Assistant</h2>
              <p className="text-blue-100 text-sm">
                {isProcessing ? 'Processing...' : isRecording ? 'Recording...' : 'Ready to help'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {!hasVoiceProfile && (
              <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
                No Voice Profile
              </span>
            )}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="Settings"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-600 text-white' 
                : message.role === 'assistant'
                ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium opacity-75">
                  {message.role === 'user' ? 'You' : message.role === 'assistant' ? 'Assistant' : 'System'}
                </span>
                <span className="text-xs opacity-60">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <form onSubmit={handleTextInput} className="flex space-x-4">
          <button
            type="button"
            onClick={handleVoiceInput}
            disabled={isProcessing}
            className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200 disabled:bg-gray-300'
            }`}
            title={isRecording ? "Stop recording" : "Start voice input"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            disabled={isProcessing || isRecording}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          
          <button 
            type="submit"
            disabled={!inputText.trim() || isProcessing || isRecording}
            className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isProcessing ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </form>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voice Profile Status
                  </label>
                  <p className="text-sm text-gray-600">
                    {hasVoiceProfile ? '✅ Voice profile active' : '⚠️ No voice profile - record audio to create one'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Backend Status
                  </label>
                  <p className="text-sm text-gray-600">
                    API URL: {process.env.NEXT_PUBLIC_API_URL || 'https://assistant-api-yuwx.onrender.com'}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="voice-recognition" className="mr-2" defaultChecked />
                  <label htmlFor="voice-recognition" className="text-sm text-gray-700">
                    Enable voice recognition
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;