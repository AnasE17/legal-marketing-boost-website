import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Legal Marketing<span className="text-blue-500">Boost</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help top law firms scale with exclusive, AI-driven paid ads—no more junk leads, no more wasted budget. Just real cases from real injury victims, ready to sign.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Areas Of Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas Of Expertise</h3>
            <ul className="space-y-2">
              <li><Link href="#personal-injury" className="text-gray-300 hover:text-white transition-colors">Personal Injury Marketing</Link></li>
              <li><Link href="#estate-planning" className="text-gray-300 hover:text-white transition-colors">Estate Planning Marketing</Link></li>
              <li><Link href="#consumer-protection" className="text-gray-300 hover:text-white transition-colors">Consumer Protection Marketing</Link></li>
              <li><Link href="#ai-driven" className="text-gray-300 hover:text-white transition-colors">AI-Driven Paid Ads</Link></li>
              <li><Link href="#exclusive-leads" className="text-gray-300 hover:text-white transition-colors">Exclusive Lead Generation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#clients" className="text-gray-300 hover:text-white transition-colors">Our Clients</Link></li>
              <li><Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Legal Marketing Boost. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Legal Marketing Boost is a brand name of the company Digital Capital Ventures LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 