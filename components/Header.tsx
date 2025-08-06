import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">
              Legal Marketing<span className="text-blue-500">Boost</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              About Us
            </Link>
            <Link href="#expertise" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              Areas Of Expertise
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="#clients" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              Our Clients
            </Link>
            <Link href="#blogs" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              Blogs
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
              Contact Us
            </Link>
            <Link 
              href="#strategy-call" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-500 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#about" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                About Us
              </Link>
              <Link href="#expertise" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                Areas Of Expertise
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                Pricing
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                Our Clients
              </Link>
              <Link href="#blogs" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                Blogs
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">
                Contact Us
              </Link>
              <Link 
                href="#strategy-call" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Book Your Free Strategy Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 