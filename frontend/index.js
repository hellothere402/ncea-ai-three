import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <main>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Voice Assistant</span>
        </h1>

        <p className="text-lg mb-8">
          Your AI-powered voice assistant is ready
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/assistant" className="border p-4 rounded hover:bg-gray-50">
            <h2 className="text-xl font-semibold">Launch Assistant &rarr;</h2>
            <p>Start using your voice assistant now</p>
          </a>

          <a href="/about" className="border p-4 rounded hover:bg-gray-50">
            <h2 className="text-xl font-semibold">About &rarr;</h2>
            <p>Learn about the voice assistant features</p>
          </a>
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-600">
        <p>Powered by Next.js and Azure</p>
      </footer>
    </div>
  );
}