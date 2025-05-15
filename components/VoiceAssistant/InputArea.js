import React, { useState } from 'react';
import VoiceRecorder from './VoiceRecorder';

const InputArea = ({ onVoiceInput, onTextInput, isProcessing, enableVoice }) => {
  const [inputText, setInputText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() && !isProcessing) {
      onTextInput(inputText);
      setInputText('');
    }
  };
  
  return (
    <div className="input-area">
      <form onSubmit={handleSubmit} className="input-form">
        {enableVoice && (
          <VoiceRecorder 
            onAudioRecorded={onVoiceInput}
            disabled={isProcessing}
          />
        )}
        
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          disabled={isProcessing}
          className="text-input"
        />
        
        <button 
          type="submit"
          disabled={!inputText.trim() || isProcessing}
          className="send-button"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
      
      {isProcessing && (
        <div className="processing-indicator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span>Processing...</span>
        </div>
      )}
    </div>
  );
};

export default InputArea;