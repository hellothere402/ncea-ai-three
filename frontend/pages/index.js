import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Voice Assistant - AI-Powered Conversation</title>
        <meta name="description" content="Experience the future of AI conversation with our advanced voice assistant." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Simple Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">VoiceAI</h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-blue-600 font-medium px-3 py-2">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                    About
                  </Link>
                  <Link href="/assistant" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                    AI Assistant
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to the Future of
              <span className="text-blue-600"> Voice AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience cutting-edge voice recognition technology with our AI assistant. 
              Engage in natural conversations and discover the power of advanced speech processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/assistant"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Voice Assistant
              </Link>
              <Link 
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Simple Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-lg text-gray-600">Discover what makes our voice assistant special</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Recognition</h3>
                <p className="text-gray-600">Advanced speech-to-text technology with high accuracy.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Intelligence</h3>
                <p className="text-gray-600">Powered by OpenAI's GPT technology for natural conversations.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Synthesis</h3>
                <p className="text-gray-600">Natural-sounding text-to-speech with multiple voice options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-4">VoiceAI</h3>
            <p className="text-gray-400 mb-4">
              Advancing the future of human-AI interaction through natural voice conversations.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} VoiceAI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}