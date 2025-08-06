import React from 'react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Platforms
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Official partner and certified expert across leading digital advertising platforms
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-4 group-hover:bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src="https://www.pngmart.com/files/23/Google-Ads-Logo-PNG-HD.png" 
                alt="Google Ads Partner" 
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <span className="text-sm text-slate-700 font-medium">Google Ads Partner</span>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-4 group-hover:bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src="https://seeklogo.com/images/M/meta-business-partner-logo-8CED76C499-seeklogo.com.png" 
                alt="Meta Business Partner" 
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <span className="text-sm text-slate-700 font-medium">Meta Business Partner</span>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-4 group-hover:bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src="https://netzoll.com/wp-content/uploads/2024/05/microsoft_advertising_partner_logo_black_v2.png" 
                alt="Microsoft Ads Partner" 
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <span className="text-sm text-slate-700 font-medium">Microsoft Ads Partner</span>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Official platform partnerships and certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges; 