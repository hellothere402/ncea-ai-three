const BASE_URL = process.env.NODE_ENV === 'production' 
  ? (process.env.NEXT_PUBLIC_API_URL || '') 
  : '';

/**
 * Make a request to the voice assistant API
 * @param {string} path - API path
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Response data
 */
async function apiRequest(path, options = {}) {
  try {
    const url = `${BASE_URL}${path}`;
    
    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };
    
    const response = await fetch(url, {
      ...options,
      headers
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Process audio data
 * @param {Blob} audioBlob - Audio data
 * @returns {Promise<any>} - Response data
 */
export async function processAudio(audioBlob) {
  // For audio, we need to use FormData
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.wav');
  
  return fetch(`${BASE_URL}/api/process-audio`, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  });
}

/**
 * Process text query
 * @param {string} text - Text query
 * @returns {Promise<any>} - Response data
 */
export async function processText(text) {
  return apiRequest('/api/process-text', {
    method: 'POST',
    body: JSON.stringify({ text })
  });
}

/**
 * Update voice settings
 * @param {object} settings - Voice settings
 * @returns {Promise<any>} - Response data
 */
export async function updateSettings(settings) {
  return apiRequest('/api/settings', {
    method: 'POST',
    body: JSON.stringify(settings)
  });
}

export default {
  processAudio,
  processText,
  updateSettings
};