import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';

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
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-gray-900">VoiceAI</h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    About
                  </Link>
                  <Link href="/assistant" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">
                    AI Assistant
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

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
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <VoiceAssistant />
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="py-12 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Assistant</h2>
              <p className="text-gray-600">Get the most out of your AI conversation experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Voice Input */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Commands</h3>
                <p className="text-gray-600 mb-4">
                  Click the microphone button and speak clearly. The assistant will process your speech in real-time.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Speak naturally and clearly</li>
                  <li>• Wait for the recording indicator</li>
                  <li>• Stop speaking to end recording</li>
                </ul>
              </div>

              {/* Text Input */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Text Messages</h3>
                <p className="text-gray-600 mb-4">
                  Type your questions or commands in the text input field for instant responses.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Type your message</li>
                  <li>• Press Enter or click send</li>
                  <li>• Get instant AI responses</li>
                </ul>
              </div>

              {/* Settings */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalization</h3>
                <p className="text-gray-600 mb-4">
                  Customize your experience with voice profiles, settings, and preferences.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Create voice profiles</li>
                  <li>• Choose voice styles</li>
                  <li>• Adjust preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Conversations */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Try These Examples</h2>
              <p className="text-gray-600">Sample conversations to get you started</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* General Questions */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">General Questions</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "What's the weather like today?"</li>
                  <li>• "Tell me a joke"</li>
                  <li>• "What can you help me with?"</li>
                  <li>• "Explain quantum computing"</li>
                </ul>
              </div>

              {/* Creative Tasks */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Creative Tasks</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Write a short story about space"</li>
                  <li>• "Help me brainstorm ideas"</li>
                  <li>• "Create a poem about nature"</li>
                  <li>• "Suggest meal ideas"</li>
                </ul>
              </div>

              {/* Problem Solving */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Help me debug this code"</li>
                  <li>• "Explain this math problem"</li>
                  <li>• "How do I fix my computer?"</li>
                  <li>• "Plan my day efficiently"</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
              <p className="text-gray-600">Understanding the technology behind your assistant</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2"> 1s</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Response Time</div>
                  <div className="text-xs text-gray-500">Average processing speed</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">95%+</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Accuracy</div>
                  <div className="text-xs text-gray-500">Speech recognition rate</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">6</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Voice Options</div>
                  <div className="text-xs text-gray-500">Different AI personalities</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Availability</div>
                  <div className="text-xs text-gray-500">Always ready to assist</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help or Found a Bug?</h2>
            <p className="text-blue-100 mb-6">
              We're here to help improve your experience. Report issues or get assistance.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Support
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <Link href="/" className="inline-block">
                  <h3 className="text-xl font-bold mb-4">VoiceAI</h3>
                </Link>
                <p className="text-gray-400 mb-4">
                  Advancing the future of human-AI interaction through natural voice conversations.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/assistant" className="text-gray-400 hover:text-white transition-colors">AI Assistant</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Bug Reports</Link></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} VoiceAI. All rights reserved. Built with Next.js and AI technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}