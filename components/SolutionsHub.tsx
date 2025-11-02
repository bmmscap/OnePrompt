
import React, { useState } from 'react';
import { solutionsData } from '../constants';
import { Solution, CaseStudy } from '../types';

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <div className="border-l-4 border-green-500 pl-4 mt-6">
    <h4 className="font-semibold text-gray-800">{study.title}</h4>
    <p 
      className="italic text-gray-600 mt-1"
      dangerouslySetInnerHTML={{ __html: study.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-600 font-semibold">$1</strong>') }}
    />
  </div>
);

const SolutionContent: React.FC<{ solution: Solution }> = ({ solution }) => {
    const renderHTML = (text: string) => {
        return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') };
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">{solution.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Challenge & Monetized Output</h4>
                    <ul className="space-y-3 list-inside">
                        <li className="text-gray-700"><strong className="font-semibold text-gray-800">The Problem:</strong> {solution.challenge}</li>
                        <li className="text-gray-700" dangerouslySetInnerHTML={renderHTML(`<strong class="font-semibold text-gray-800">Monetized Output:</strong> ${solution.output}`)} />
                    </ul>
                    {solution.additionalInfo && <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={renderHTML(solution.additionalInfo)} />}
                    {solution.caseStudies && solution.caseStudies.map((study, index) => (
                        <CaseStudyCard key={index} study={study} />
                    ))}
                </div>
                <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-3">Monetization Metrics</h4>
                    <ul className="space-y-3">
                        {solution.metrics.map((metric, index) => (
                            <li key={index} className="bg-gray-100 p-3 rounded-lg text-gray-700" dangerouslySetInnerHTML={renderHTML(metric)} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SolutionsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Solution['id']>('Broadcast');

  const activeSolution = solutionsData.find(sol => sol.id === activeTab);

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 w-11/12 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Solutions Hub: The AI Content Engine in Action</h2>
        
        <div className="flex justify-center flex-wrap mb-8 border-b-2 border-gray-300">
          {solutionsData.map(solution => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`py-3 px-4 text-sm sm:text-base font-bold transition-colors duration-300 border-b-4 focus:outline-none ${
                activeTab === solution.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600 border-transparent'
              }`}
            >
              {solution.emoji} {solution.name}
            </button>
          ))}
        </div>

        <div>
          {activeSolution && <SolutionContent key={activeSolution.id} solution={activeSolution} />}
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
    `}</style>
    </section>
  );
};

export default SolutionsHub;
