import React from 'react';
import VoiceAssistant from '../components/VoiceAssistant';

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Voice Assistant Demo</h1>
      </header>
      <main className="app-main">
        <VoiceAssistant />
      </main>
      <footer className="app-footer">
        <p>Voice Assistant Integration</p>
      </footer>
    </div>
  );
}