
import React, { useState } from 'react';

const NextStep: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate a successful submission
      console.log('Form submitted:', { name, email, message });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to send inquiry. Please try again later.');
    }
  };

  return (
    <section id="audit" className="bg-gray-900 text-white text-center py-16 sm:py-24">
      <div className="container mx-auto px-4 w-11/12 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Total Content Automation?</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Let's map your first prompt. We'll show you how a single command generates infinite assets, turning your content workflow into a revenue machine. <strong>No hardware required.</strong>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Claim Your Free Audit &rarr;
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-block bg-transparent border-2 border-gray-400 hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
          >
            Talk to an AI Expert
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Us an Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 ease-in-out transform shadow-lg ${
                status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
              }`}
              disabled={status === 'submitting'}
              aria-live="polite"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 mt-4 text-center" role="status">
                Your inquiry has been sent successfully! We will get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 mt-4 text-center" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NextStep;