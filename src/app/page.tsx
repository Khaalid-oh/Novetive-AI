import React from 'react';
import Navbar from './components/Navbar';

function Page() {
  return (
    <div className="h-screen w-full mx-auto text-3xl font-bold bg-blue-600 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">Revamp Your Social Media with Novetiv AI</h1>
        <p className="text-xl mb-8">Empower your social media strategy with Novetiv AI. Gain valuable insights, auh.</p>
        <button className="bg-white text-blue-600 py-2 px-4 rounded">Try Novetiv for free</button>
      </div>
    </div>
  );
}

export default Page;
