import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { join } from 'path';
import fs from 'fs';
import formidable from 'formidable';

// Disable body parsing - we'll handle it manually with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Parse form data with formidable
 * @param {Request} req - Request object
 * @returns {Promise<{fields: object, files: object}>} - Parsed form data
 */
const parseFormData = (req) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

/**
 * Process audio file with Python script
 * @param {string} filePath - Path to audio file
 * @returns {Promise<object>} - Response from Python script
 */
const processPythonAudio = (filePath) => {
  return new Promise((resolve, reject) => {
    // Run Python script with the file path
    const pythonProcess = spawn('python', [
      join(process.cwd(), 'python', 'process_audio.py'),
      filePath
    ]);
    
    let result = '';
    let errorData = '';
    
    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });
    
    pythonProcess.stderr.on('data', (data) => {
      errorData += data.toString();
    });
    
    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Python process exited with code ${code}: ${errorData}`));
      } else {
        try {
          resolve(JSON.parse(result));
        } catch (e) {
          reject(new Error(`Failed to parse Python output: ${e.message}`));
        }
      }
    });
  });
};

/**
 * API route handler for audio processing
 */
export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form data to get the audio file
    const { files } = await parseFormData(req);
    const audioFile = files.audio;
    
    if (!audioFile) {
      return res.status(400).json({ error: 'No audio file provided' });
    }
    
    // Process the audio with Python
    const result = await processPythonAudio(audioFile.filepath);
    
    // Clean up the temp file
    fs.unlinkSync(audioFile.filepath);
    
    // Return the result
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error processing audio:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}