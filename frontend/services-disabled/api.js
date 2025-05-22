export const processAudioData = async (audioBlob) => {
  try {
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      userSpeech: "This is a simulated transcription of the user's speech.",
      response: {
        text: "This is a simulated response from the assistant.",
        source: "simulated"
      },
      audio: null // No audio in demo mode
    };
  } catch (error) {
    console.error('Error processing audio:', error);
    throw error;
  }
};

export const generateTextResponse = async (text) => {
  try {
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      text: `This is a simulated response to your message: "${text}"`,
      audio: null // No audio in demo mode
    };
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};

// Default export for backward compatibility
export default {
  processAudioData,
  generateTextResponse
};