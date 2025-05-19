import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Voice Assistant</span>
        </h1>

        <p className={styles.description}>
          Your AI-powered voice assistant is ready
        </p>

        <div className={styles.grid}>
          <a href="/assistant" className={styles.card}>
            <h2>Launch Assistant &rarr;</h2>
            <p>Start using your voice assistant now</p>
          </a>

          <a href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn about the voice assistant features</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Next.js and Azure
        </p>
      </footer>
    </div>
  );
}