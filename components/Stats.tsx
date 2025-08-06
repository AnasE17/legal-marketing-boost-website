import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "100+",
      label: "Clients Helped",
      description: "Reputable law firms served"
    },
    {
      number: "4X",
      label: "Increase in leads generated",
      description: "Average improvement"
    },
    {
      number: "4.9/5",
      label: "Customer satisfaction",
      description: "Client satisfaction rating"
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Proven track record"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We have worked with hundreds of Reputable Law Firms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Legal Marketing Boost has helped top law firms scale with exclusive, AI-driven paid ads—no more junk leads, no more wasted budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Join the hundreds of law firms that trust Legal Marketing Boost to scale their practice
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 