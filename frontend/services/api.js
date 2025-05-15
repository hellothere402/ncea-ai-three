/**
 * Process audio data and get a response from Python backend
 * @param {Blob} audioBlob - Audio data blob
 * @returns {Promise<Object>} Response containing transcribed text and assistant response
 */
export const processAudioData = async (audioBlob) => {
  try {
    // Create form data for sending the audio file
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');
    
    // Send to backend API
    const response = await fetch('http://localhost:5000/api/voice/process', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error processing audio:', error);
    throw new Error('Failed to process audio data');
  }
};

/**
 * Process text input and get a response
 * @param {string} text - User's text input
 * @returns {Promise<Object>} Response from the assistant
 */
export const generateTextResponse = async (text) => {
  try {
    // Send text to backend API
    const response = await fetch('http://localhost:5000/api/text/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error processing text:', error);
    throw new Error('Failed to process text input');
  }
};

/**
 * Create a voice profile
 * @param {Blob} audioBlob - Audio data blob for profile creation
 * @param {string} name - User name for the profile
 * @returns {Promise<Object>} Response indicating profile creation status
 */
export const createVoiceProfile = async (audioBlob, name) => {
  try {
    // Create form data
    const formData = new FormData();
    formData.append('audio', audioBlob, 'profile.wav');
    formData.append('name', name);
    
    // Send to backend API
    const response = await fetch('http://localhost:5000/api/voice/profile/create', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating voice profile:', error);
    throw new Error('Failed to create voice profile');
  }
};

/**
 * Check for existing voice profile
 * @returns {Promise<Object>} Response indicating if profile exists
 */
export const checkVoiceProfile = async () => {
  try {
    // Call backend API
    const response = await fetch('http://localhost:5000/api/voice/profile', {
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error checking voice profile:', error);
    throw new Error('Failed to check voice profile');
  }
};