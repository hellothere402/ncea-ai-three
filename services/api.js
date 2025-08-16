const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

class VoiceAPIService {
  constructor() {
    this.baseURL = API_BASE_URL;
    console.log('API Service initialized with URL:', this.baseURL);
  }

  async checkBackendHealth() {
    try {
      const response = await fetch(`${this.baseURL}/health`, {
        method: 'GET',
        mode: 'cors',
      });
      return response.ok;
    } catch (error) {
      console.error('Backend health check failed:', error);
      return false;
    }
  }

  async processText(text) {
    try {
      const response = await fetch(`${this.baseURL}/api/text/process`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to process text');
      }

      return await response.json();
    } catch (error) {
      console.error('Error processing text:', error);
      
      // Check if it's a network error
      if (error.message === 'Failed to fetch') {
        throw new Error('Cannot connect to AI service. Please check if the backend is running.');
      }
      throw error;
    }
  }

  async processVoice(audioBlob) {
    try {
      // Convert WebM to WAV if needed
      const wavBlob = await this.convertToWav(audioBlob);
      
      const formData = new FormData();
      formData.append('audio', wavBlob, 'recording.wav');

      const response = await fetch(`${this.baseURL}/api/voice/process`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to process voice');
      }

      return await response.json();
    } catch (error) {
      console.error('Error processing voice:', error);
      
      if (error.message === 'Failed to fetch') {
        throw new Error('Cannot connect to AI service. Please check if the backend is running.');
      }
      throw error;
    }
  }

  async checkProfile() {
    try {
      const response = await fetch(`${this.baseURL}/api/voice/profile`, {
        method: 'GET',
        mode: 'cors',
      });
      
      if (!response.ok) {
        throw new Error('Failed to check profile');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error checking profile:', error);
      return { hasProfile: false, profile: null };
    }
  }

  async createProfile(audioBlob, name) {
    try {
      const wavBlob = await this.convertToWav(audioBlob);
      
      const formData = new FormData();
      formData.append('audio', wavBlob, 'profile.wav');
      formData.append('name', name);

      const response = await fetch(`${this.baseURL}/api/voice/profile/create`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create profile');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }

  // Simple WebM to WAV converter
  async convertToWav(blob) {
    // For now, return the original blob
    // In production, you'd want to use a proper audio conversion library
    return blob;
  }

  // Helper to play audio from base64
  playAudioFromBase64(base64Audio) {
    if (!base64Audio) return;
    
    try {
      const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);
      audio.play().catch(error => console.error('Error playing audio:', error));
    } catch (error) {
      console.error('Error creating audio element:', error);
    }
  }
}

export default new VoiceAPIService();