import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

// Dynamically import the VoiceAssistant component to avoid SSR issues
const VoiceAssistant = dynamic(
  () => import('../components/VoiceAssistant'),
  { ssr: false }
);

export default function Assistant() {
  return (
    <>
      <Head>
        <title>AI Assistant - Voice-Powered Conversations | VoiceAI</title>
        <meta name="description" content="Interact with our advanced AI assistant using voice commands. Experience real-time speech recognition, natural language processing, and intelligent responses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />

        {/* Header Section */}
        <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Assistant</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Start a conversation with our AI assistant. Use your voice or type your messages.
            </p>
            
            {/* Quick Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">💡 Quick Tips</h3>
              <div className="grid md:grid-cols-3 gap-3 text-sm text-blue-700">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span>Click the mic to speak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Use settings to customize</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Type or speak naturally</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Assistant Interface */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <VoiceAssistant />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}