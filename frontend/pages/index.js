// import React from 'react';
//import dynamic from 'next/dynamic';


//const VoiceAssistant = dynamic(
  //() => import('../components/VoiceAssistant'),
  //{ ssr: false }
//);

//export default function Home() {
  //return (
    //<div className="app-container">
     // <header className="app-header">
    //    <h1>Voice Assistant Demo</h1>
    //  </header>
      
   //   <main className="app-main">
     //   <VoiceAssistant />
   //   </main>

   //   <footer className="app-footer">
   //     <p>© {new Date().getFullYear()} Voice Assistant Demo</p>
    //  </footer>
   // </div>
//  );
//}

export default function Home() {
  return (
    <div>
      <h1>Test Page</h1>
      <p>If you can see this, the routing is working</p>
    </div>
  );
}