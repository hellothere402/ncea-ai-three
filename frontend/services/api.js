export const processAudioData = async (audioBlob) => {
  try {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock transcription (you can replace this with Web Speech API later)
    const mockTranscription = "Hello, this is a test transcription of your speech.";
    
    return {
      userSpeech: mockTranscription,
      response: {
        text: "Thank you for your message. This is a simulated response from the voice assistant.",
        source: "client-mock"
      },
      audio: null
    };
  } catch (error) {
    console.error('Error processing audio:', error);
    throw error;
  }
};

export const generateTextResponse = async (text) => {
  try {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple mock responses based on input
    let responseText;
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      responseText = "Hello! How can I help you today?";
    } else if (lowerText.includes('time')) {
      responseText = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerText.includes('weather')) {
      responseText = "I'm sorry, I don't have access to weather data in demo mode.";
    } else {
      responseText = `I received your message: "${text}". This is a simulated response.`;
    }
    
    return {
      text: responseText,
      audio: null
    };
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};

// Browser-based text-to-speech (optional)
export const speakText = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }
};

// Browser-based speech recognition (optional)
export const startSpeechRecognition = (onResult, onError) => {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
    
    recognition.onerror = (event) => {
      onError(event.error);
    };
    
    recognition.start();
    return recognition;
  } else {
    onError('Speech recognition not supported');
    return null;
  }
};

// Default export for backward compatibility
export default {
  processAudioData,
  generateTextResponse,
  speakText,
  startSpeechRecognition
};