import React from 'react';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';


const VoiceAssistant = dynamic(
  () => import('../components/VoiceAssistant'),
  { ssr: false }
);

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
        <p>© {new Date().getFullYear()} Voice Assistant Demo</p>
      </footer>
    </div>
  );
}