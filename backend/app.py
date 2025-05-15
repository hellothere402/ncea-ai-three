from flask import Flask, request, jsonify
import numpy as np
import tempfile
import os
import base64
from flask_cors import CORS

# Import your voice assistant components
from voice import VoiceProcessingSystem
from response import ResponseGenerator, Query
from sym import SystemManager

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize components
try:
    # Load config
    with open("config.yaml", 'r') as f:
        import yaml
        config = yaml.safe_load(f)
    
    openai_api_key = config.get('openai_api_key', os.environ.get('OPENAI_API_KEY'))
    searchapi_key = config.get('searchapi_key', os.environ.get('SEARCHAPI_KEY'))
    
    if not openai_api_key:
        raise ValueError("OpenAI API key not found")
    
    # Initialize components
    system_manager = SystemManager()
    voice_processor = VoiceProcessingSystem(openai_api_key)
    response_generator = ResponseGenerator(
        openai_api_key,
        cache_file="response_cache.json",
        voice_id=config.get('voice_id', 'nova')
    )
    
    print("✅ Voice assistant components initialized")
except Exception as e:
    print(f"❌ Error initializing components: {e}")
    raise

@app.route('/')
def index():
    return "Voice Assistant API Server is running"

@app.route('/api/voice/process', methods=['POST'])
async def process_voice():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files['audio']
    
    # Save the audio file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_file:
        audio_file.save(temp_file.name)
        temp_filename = temp_file.name
    
    try:
        # Load audio file as numpy array
        import wave
        with wave.open(temp_filename, 'rb') as wf:
            sample_rate = wf.getframerate()
            frames = wf.readframes(wf.getnframes())
            audio_data = np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32767.0
            audio_data = audio_data.reshape(1, -1)
        
        # Process the audio
        voice_result = voice_processor.process_voice(audio_data, sample_rate)
        
        if not voice_result or not voice_result.text:
            return jsonify({"error": "Could not process speech"}), 400
        
        # Generate response
        query_obj = Query(
            text=voice_result.text,
            intent=voice_result.intent,
            speaker_id=voice_result.speaker_id
        )
        
        response = await response_generator.generate_response(query_obj)
        
        # Generate audio for the response
        audio_data = await response_generator.tts_engine.generate_speech(response.text)
        audio_base64 = base64.b64encode(audio_data).decode('utf-8') if audio_data else None
        
        return jsonify({
            "userSpeech": voice_result.text,
            "response": {
                "text": response.text,
                "source": response.source
            },
            "audio": audio_base64
        })
    
    except Exception as e:
        print(f"Error processing voice: {e}")
        return jsonify({"error": str(e)}), 500
    
    finally:
        # Clean up temp file
        if os.path.exists(temp_filename):
            os.remove(temp_filename)

@app.route('/api/text/process', methods=['POST'])
async def process_text():
    try:
        data = request.json
        
        if not data or 'text' not in data:
            return jsonify({"error": "No text provided"}), 400
        
        user_text = data['text']
        
        # Use your existing response system to generate a response
        query_obj = Query(
            text=user_text,
            intent="conversation",  # Default intent
            speaker_id="web_user"
        )
        
        response = await response_generator.generate_response(query_obj)
        
        # Generate audio for the response
        audio_data = await response_generator.tts_engine.generate_speech(response.text)
        audio_base64 = base64.b64encode(audio_data).decode('utf-8') if audio_data else None
        
        return jsonify({
            "text": response.text,
            "source": response.source,
            "audio": audio_base64
        })
        
    except Exception as e:
        print(f"Error processing text: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/voice/profile', methods=['GET'])
def check_profile():
    try:
        # Check if voice profiles exist
        if os.path.exists("voice_profiles.json"):
            import json
            with open("voice_profiles.json", "r") as f:
                profiles_data = json.load(f)
                
            hasProfile = len(profiles_data) > 0
            profile = profiles_data[0] if hasProfile else None
                
            return jsonify({
                "hasProfile": hasProfile,
                "profile": {
                    "user_id": profile["user_id"],
                    "name": profile["name"],
                    "created_at": profile["created_at"]
                } if profile else None
            })
        
        return jsonify({"hasProfile": False, "profile": None})
    
    except Exception as e:
        print(f"Error checking profile: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/voice/profile/create', methods=['POST'])
async def create_profile():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files['audio']
    name = request.form.get('name', 'User1')
    
    # Save the audio file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_file:
        audio_file.save(temp_file.name)
        temp_filename = temp_file.name
    
    try:
        # Load audio file as numpy array
        import wave
        with wave.open(temp_filename, 'rb') as wf:
            sample_rate = wf.getframerate()
            frames = wf.readframes(wf.getnframes())
            audio_data = np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32767.0
            audio_data = audio_data.reshape(1, -1)
        
        # Create profile
        profile = voice_processor.create_voice_profile(audio_data, name)
        
        if not profile:
            return jsonify({"error": "Could not create voice profile"}), 400
        
        # Format profile for response
        profile_data = {
            "user_id": profile.user_id,
            "name": profile.name,
            "created_at": profile.created_at
        }
        
        return jsonify({
            "success": True,
            "profile": profile_data
        })
    
    except Exception as e:
        print(f"Error creating profile: {e}")
        return jsonify({"error": str(e)}), 500
    
    finally:
        # Clean up temp file
        if os.path.exists(temp_filename):
            os.remove(temp_filename)

if __name__ == '__main__':
    app.run(debug=True)