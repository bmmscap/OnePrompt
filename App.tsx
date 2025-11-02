
import React from 'react';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import SolutionsHub from './components/SolutionsHub';
import NextStep from './components/NextStep';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <main>
        <Hero />
        <ValueProposition />
        <SolutionsHub />
        <NextStep />
      </main>
    </div>
  );
};

export default App;
