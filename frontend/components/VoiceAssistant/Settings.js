import React, { useState, useEffect } from 'react';
import useVoiceRecording from '../hooks/useVoiceRecording';

const Settings = ({ settings, onSave, onClose, onCreateVoiceProfile, isProcessing }) => {
  const [formData, setFormData] = useState({ ...settings });
  const [recordingForProfile, setRecordingForProfile] = useState(false);
  const [profileUserName, setProfileUserName] = useState(settings.userName || '');
  
  const { 
    isRecording,
    startRecording,
    stopRecording,
    recordingTime,
    audioBlob
  } = useVoiceRecording({
    maxDuration: 5  // 5 seconds for profile creation
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  
  const startProfileRecording = () => {
    if (!profileUserName.trim()) {
      alert('Please enter your name first');
      return;
    }
    
    setRecordingForProfile(true);
    startRecording().catch(error => {
      console.error('Failed to start profile recording:', error);
      alert('Could not access microphone. Please check your permissions.');
      setRecordingForProfile(false);
    });
    
    // Auto-stop after 5 seconds
    setTimeout(() => {
      if (isRecording) {
        stopRecording();
      }
    }, 5000);
  };
  
  // When profile recording is complete
  useEffect(() => {
    if (recordingForProfile && !isRecording && audioBlob) {
      onCreateVoiceProfile(audioBlob, profileUserName);
      setRecordingForProfile(false);
    }
  }, [recordingForProfile, isRecording, audioBlob, onCreateVoiceProfile, profileUserName]);
  
  const formatRecordingTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);
  
  // Handle click outside modal to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className="settings-modal" onClick={handleBackdropClick}>
      <div className="settings-content">
        <div className="settings-header">
          <h3>Voice Assistant Settings</h3>
          <button 
            onClick={onClose}
            className="close-button"
            aria-label="Close settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="settings-section">
            <h4>Voice Settings</h4>
            
            <div className="form-group">
              <label htmlFor="voiceId">Assistant Voice</label>
              <select 
                id="voiceId"
                name="voiceId"
                value={formData.voiceId}
                onChange={handleChange}
              >
                <option value="nova">Nova (Female, Warm)</option>
                <option value="shimmer">Shimmer (Female, Energetic)</option>
                <option value="alloy">Alloy (Neutral, Balanced)</option>
                <option value="echo">Echo (Male, Clear)</option>
                <option value="fable">Fable (Male, British)</option>
                <option value="onyx">Onyx (Male, Authoritative)</option>
              </select>
            </div>
            
            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox"
                  name="enableVoiceRecognition"
                  checked={formData.enableVoiceRecognition}
                  onChange={handleChange}
                />
                Enable voice recognition
              </label>
            </div>
            
            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox"
                  name="saveConversations"
                  checked={formData.saveConversations}
                  onChange={handleChange}
                />
                Save conversations locally
              </label>
            </div>
          </div>
          
          <div className="settings-section">
            <h4>Voice Profile</h4>
            
            {settings.hasVoiceProfile ? (
              <div className="profile-status">
                <div className="profile-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Voice profile active</span>
                </div>
                <p className="profile-name">Profile: {settings.userName}</p>
              </div>
            ) : (
              <div className="profile-creation">
                <p>Create a voice profile to enable personalized voice recognition (optional).</p>
                
                <div className="profile-form">
                  <div className="form-group">
                    <label htmlFor="profileUserName">Your Name</label>
                    <input
                      type="text"
                      id="profileUserName"
                      value={profileUserName}
                      onChange={(e) => setProfileUserName(e.target.value)}
                      placeholder="Enter your name"
                      disabled={isProcessing}
                    />
                  </div>
                  
                  {recordingForProfile && isRecording ? (
                    <div className="profile-recording">
                      <div className="recording-indicator">
                        <span className="recording-pulse"></span>
                        <span>Recording: {formatRecordingTime(recordingTime)}</span>
                      </div>
                      <p>Please speak clearly for 5 seconds...</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="profile-record-button"
                      onClick={startProfileRecording}
                      disabled={isProcessing || !profileUserName.trim()}
                    >
                      {isProcessing ? (
                        <span>Processing...</span>
                      ) : (
                        <span>🎤 Record Voice Sample (5 seconds)</span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="settings-footer">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="save-button"
              disabled={isProcessing}
            >
              {isProcessing ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};