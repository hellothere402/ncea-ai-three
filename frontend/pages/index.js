import React from 'react';
import '../styles/voiceAssistant.css';
import VoiceAssistant from '../components/VoiceAssistant';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Voice Assistant Demo</h1>
      </header>
      
      <main className="app-main">
        <VoiceAssistant />
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Voice Assistant Demo</p>
      </footer>
    </div>
  );
}