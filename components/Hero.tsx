
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white text-center py-24 sm:py-32 md:py-40">
      <div className="container mx-auto px-4 w-11/12 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          One Prompt. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Infinite Assets.</span> 🚀
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto mb-10 text-gray-300">
          Our AI Content Engine transforms a single directive into a universe of proprietary, revenue-driving intelligence. <strong>Zero Infrastructure. Total Automation.</strong>
        </h3>
        <a 
          href="#audit" 
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Get Your Free Automation Audit &rarr;
        </a>
      </div>
    </header>
  );
};

export default Hero;