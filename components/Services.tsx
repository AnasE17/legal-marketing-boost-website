import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🎯",
      title: "Manage Your Advertising Spend",
      description: "We monitor and optimize your spending to ensure you are getting the best return on your investment.",
      features: [
        "Performance-based pricing",
        "Real-time budget optimization",
        "ROI tracking & reporting",
        "Cost-per-lead optimization"
      ]
    },
    {
      icon: "🎯",
      title: "Audience Targeting",
      description: "We can target by groups, interests, gender, job roles, buying behavior, household income. We can also upload your mailing lists so they can be targeted or excluded from campaigns.",
      features: [
        "Demographic targeting",
        "Behavioral targeting",
        "Custom audience creation",
        "Lookalike audience expansion"
      ]
    },
    {
      icon: "📱",
      title: "Ad Creation",
      description: "We will build highly engaging ads that speak to your target audience from drafting the copy to designing an eye catching creative.",
      features: [
        "Compelling ad copy",
        "Eye-catching visuals",
        "A/B testing",
        "Performance optimization"
      ]
    },
    {
      icon: "📊",
      title: "Tracking",
      description: "We will install the Facebook Pixel and Google Tags on all of your custom landing pages and help integrate it on your own website to be able to track every action taken by your audience.",
      features: [
        "Conversion tracking",
        "Lead attribution",
        "ROI measurement",
        "Real-time analytics"
      ]
    },
    {
      icon: "📈",
      title: "Landing Page",
      description: "We will create stunning landing pages to help you qualify potential customers and convert.",
      features: [
        "High-converting design",
        "Mobile optimization",
        "Lead capture forms",
        "A/B testing"
      ]
    },
    {
      icon: "📞",
      title: "Campaign Optimization",
      description: "We maximize campaign returns with precise tracking and strategic optimization using the best technology and data algorithms.",
      features: [
        "AI-driven optimization",
        "Performance monitoring",
        "Continuous improvement",
        "Data-driven decisions"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Do?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We bring all the things you need to solve your case acquisition problems in one place.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We develop a fully automated case acquisition system that is customized to your firm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 