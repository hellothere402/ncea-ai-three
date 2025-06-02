import React, { useState, useEffect } from 'react';
import useVoiceRecording from '../hooks/useVoiceRecording';

const VoiceRecorder = ({ onAudioRecorded, disabled }) => {
  const { 
    isRecording,
    startRecording,
    stopRecording,
    recordingTime,
    audioBlob
  } = useVoiceRecording();
  
  // Flag to track whether audio has been sent to parent
  const [audioSent, setAudioSent] = useState(false);
  
  // When recording is stopped and we have an audioBlob, send it to parent ONCE
  useEffect(() => {
    if (!isRecording && audioBlob && !audioSent) {
      onAudioRecorded(audioBlob);
      setAudioSent(true); // Mark as sent to prevent multiple calls
    }
    
    // Reset the flag when recording starts again
    if (isRecording) {
      setAudioSent(false);
    }
  }, [isRecording, audioBlob, onAudioRecorded, audioSent]);
  
  const handleToggleRecording = () => {
    if (disabled) return;
    
    if (isRecording) {
      stopRecording();
    } else {
      startRecording().catch(error => {
        console.error('Failed to start recording:', error);
        alert('Could not access microphone. Please check your permissions.');
      });
    }
  };
  
  const formatRecordingTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div className="voice-recorder">
      <button
        type="button"
        onClick={handleToggleRecording}
        disabled={disabled}
        className={`record-button ${isRecording ? 'recording' : ''}`}
        aria-label={isRecording ? 'Stop recording' : 'Start recording'}
        title={isRecording ? 'Click to stop recording' : 'Click to start recording'}
      >
        {isRecording ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="6" width="12" height="12"></rect>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        )}
      </button>
      
      {isRecording && (
        <div className="recording-indicator">
          <div className="pulse-animation"></div>
          <span className="recording-time">{formatRecordingTime(recordingTime)}</span>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;