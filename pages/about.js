import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Voice Assistant | AI Technology & Innovation</title>
        <meta name="description" content="Learn about our voice assistant technology, the team behind it, and our mission to revolutionize human-AI interaction through advanced speech processing." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <div className="page-container bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-grow">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Voice AI Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering the future of human-computer interaction through advanced voice recognition and AI-powered conversations.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that the future of technology lies in natural, intuitive interactions between humans and AI. 
                  Our voice assistant represents a significant step forward in making AI more accessible, conversational, and useful in everyday life.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  By combining cutting-edge speech recognition, natural language processing, and machine learning, 
                  we are creating an AI companion that understands not just your words, but the intent behind them.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">AI</div>
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">ML</div>
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">NLP</div>
                  </div>
                  <span className="text-sm text-gray-500">Powered by advanced AI technologies</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Real-time Processing</h3>
                      <p className="text-gray-600">Sub-second response times</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">High Accuracy</h3>
                      <p className="text-gray-600">95%+ speech recognition accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Privacy Focused</h3>
                      <p className="text-gray-600">Secure & private conversations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-lg text-gray-600">Built with cutting-edge technologies for optimal performance</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI</h3>
                <p className="text-gray-600 text-sm">State-of-the-art language understanding and generation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Speech Recognition</h3>
                <p className="text-gray-600 text-sm">High-accuracy voice-to-text conversion</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.05 6.464a6.5 6.5 0 000 9.072M8.879 9.293a3 3 0 000 4.243M5.05 16.536a6.5 6.5 0 010-9.072" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">TTS Engine</h3>
                <p className="text-gray-600 text-sm">Natural voice synthesis technology</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Neural Networks</h3>
                <p className="text-gray-600 text-sm">Deep learning for enhanced AI capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience the Technology Yourself</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore what AI-powered voice interaction can do?
            </p>
            <Link 
              href="/assistant"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Try Voice Assistant
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}