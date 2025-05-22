export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, audioData } = req.body;

    // Simple mock response for now
    if (message) {
      // Text query
      return res.status(200).json({
        response: {
          text: `I received your message: "${message}". This is a mock response.`,
          source: "mock"
        }
      });
    }

    if (audioData) {
      // Audio query
      return res.status(200).json({
        userSpeech: "Mock transcription of your speech",
        response: {
          text: "This is a mock response to your voice input.",
          source: "mock"
        }
      });
    }

    return res.status(400).json({ error: 'No message or audio data provided' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}