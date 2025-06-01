import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Voice Assistant | AI Technology & Innovation</title>
        <meta name="description" content="Learn about our voice assistant technology, the team behind it, and our mission to revolutionize human-AI interaction through advanced speech processing." />
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
                  <Link href="/about" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">
                    About
                  </Link>
                  <Link href="/assistant" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    AI Assistant
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                  we're creating an AI companion that understands not just your words, but the intent behind them.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">OpenAI GPT</h3>
                <p className="text-gray-600 text-sm">Advanced language understanding and generation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Whisper API</h3>
                <p className="text-gray-600 text-sm">State-of-the-art speech recognition</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.05 6.464A6.975 6.975 0 003 12a6.975 6.975 0 002.05 5.536m2.828-9.9a9 9 0 000 14.142" />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PyTorch</h3>
                <p className="text-gray-600 text-sm">Machine learning framework for AI models</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <p className="text-lg text-gray-600">Explore the advanced features that make our voice assistant unique</p>
            </div>

            <div className="space-y-16">
              {/* Speaker Recognition */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Speaker Recognition</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our advanced speaker recognition system uses voice biometrics to identify users and personalize conversations. 
                    The system learns from voice patterns to provide a tailored experience for each user.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Voice profile creation and management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Real-time speaker identification</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Personalized conversation context</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Voice Biometrics</h4>
                    <p className="text-gray-600">Secure identification through unique voice patterns</p>
                  </div>
                </div>
              </div>

              {/* Intent Classification */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Query</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Command</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Conversation</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Emergency</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Intent Classification</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our AI automatically categorizes user inputs to provide the most appropriate response type. 
                    This ensures that queries, commands, conversations, and emergencies are handled with the right context and urgency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Intelligent request categorization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Context-aware response generation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Priority handling for urgent requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Journey</h2>
              <p className="text-lg text-gray-600">From concept to cutting-edge AI assistant</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Planning</h3>
                    <p className="text-gray-600">Extensive research into voice AI technologies and user experience design.</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Development</h3>
                    <p className="text-gray-600">Building the foundational voice recognition and AI processing systems.</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration & Testing</h3>
                    <p className="text-gray-600">Integrating OpenAI APIs and extensive testing for accuracy and performance.</p>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-semibold text-sm">4</span>
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Optimization</h3>
                    <p className="text-gray-600">Public release with continuous improvements based on user feedback.</p>
                  </div>
                </div>
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