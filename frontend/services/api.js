export const processAudioData = async (audioBlob) => {
  try {
    // In a real implementation, you would send the audio blob to your backend
    // For demo purposes, we'll simulate a response
    console.log('Processing audio blob:', audioBlob);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate a response
    return {
      userSpeech: "This is a simulated transcription of the user's speech.",
      response: {
        text: "This is a simulated response from the assistant.",
        source: "simulated"
      },
      // No audio in demo mode
      audio: null
    };
  } catch (error) {
    console.error('Error processing audio:', error);
    throw error;
  }
};

export const generateTextResponse = async (text) => {
  try {
    // In a real implementation, you would send the text to your backend
    console.log('Processing text input:', text);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate a response
    return {
      text: `This is a simulated response to your message: "${text}"`,
      // No audio in demo mode
      audio: null
    };
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};