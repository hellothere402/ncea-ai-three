import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'bug',
    message: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        type: 'bug',
        message: '',
        priority: 'medium'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Support - Bug Reports & Help | VoiceAI</title>
        <meta name="description" content="Need help with the voice assistant? Report bugs, request features, or get technical support. We're here to help improve your AI experience." />
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
                  <Link href="/assistant" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors">
                    AI Assistant
                  </Link>
                  <Link href="/contact" className="text-blue-600 font-medium px-3 py-2 rounded-md text-sm">
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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Found a bug? Need help? Have a feature request? We're here to help improve your voice assistant experience.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Bug Reports */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bug Reports</h3>
                <p className="text-gray-600 mb-4">
                  Encountered an issue? Help us fix it by providing detailed information about the problem.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Voice recognition issues</li>
                  <li>• Interface problems</li>
                  <li>• Audio playback errors</li>
                  <li>• Performance issues</li>
                </ul>
              </div>

              {/* Feature Requests */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature Requests</h3>
                <p className="text-gray-600 mb-4">
                  Have an idea for improvement? We'd love to hear your suggestions for new features.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• New voice options</li>
                  <li>• Enhanced capabilities</li>
                  <li>• UI improvements</li>
                  <li>• Integration ideas</li>
                </ul>
              </div>

              {/* General Support */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                 </div>
             </div>
         </div>
     </div>
 </section>
</div>
</>
  );
}