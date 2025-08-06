import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Scale Your Law Firm?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Get exclusive, high-intent personal injury leads that turn into signed cases. No contract. No commitment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#strategy-call"
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Free Strategy Call
          </a>
          <a 
            href="#how-it-works"
            className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA; 