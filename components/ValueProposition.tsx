import React, { useState, useEffect, useRef } from 'react';

const valueItems = [
  {
    title: 'Zero Infrastructure. Full Control.',
    description: 'We replace CapEx with a managed intelligence service. You buy results, not hardware. **Scale from one prompt to enterprise-level output, instantly.**',
  },
  {
    title: 'Monetization First.',
    description: 'Our AI is engineered to generate **revenue-ready assets from a single input.** Every piece of content is instantly packaged for sales, marketing, or licensing.',
  },
  {
    title: 'Talent Amplification.',
    description: 'Automate the mundane. We repurpose your top talent from data processing to **high-value, human-driven strategy and client advocacy.**',
  },
];

const ValueItem: React.FC<{ title: string; description: string, index: number }> = ({ title, description, index }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const transitionDelay = `${index * 100}ms`;

  return (
    <div 
      ref={ref}
      className={`bg-white border border-gray-200 rounded-xl p-6 text-left w-full max-w-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay }}
      aria-hidden={!isInView}
    >
      <h4 className="text-blue-600 font-bold text-xl mb-3">{title}</h4>
      <p 
        className="text-gray-600 leading-relaxed" 
        dangerouslySetInnerHTML={{ __html: description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
      />
    </div>
  );
};

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 w-11/12 max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">The Automation Advantage</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {valueItems.map((item, index) => (
            <ValueItem key={index} index={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
