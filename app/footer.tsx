import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border-t border-gray-700 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image 
                src="/img/saalik-logo.png" 
                alt="SAALIK logo" 
                width={120} 
                height={120}
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Delivering innovative technology solutions with excellence and integrity.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white border-b border-green-600 pb-1 inline-block">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                About
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                Services
              </Link>
              <Link 
                href="#" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white border-b border-green-600 pb-1 inline-block">
              Company
            </h3>
            <nav className="space-y-2">
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                Team
              </Link>
              <Link 
                href="/motivation" 
                className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
              >
                Motivation
              </Link>
            </nav>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white border-b border-green-600 pb-1 inline-block">
              Connect With Us
            </h3>
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/saalik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group hover:bg-gray-800 p-1.5 rounded-lg transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-2 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.042 4.388 23.094 10.125 24v-8.437h-3.047v-3.49h3.047v-2.66c0-3.025 1.793-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.494 0-1.953.928-1.953 1.873v2.296h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.042 24 12.073z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium text-xs">Facebook</p>
                  <p className="text-green-400 text-[10px]">/saalik</p>
                </div>
              </a>

              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group hover:bg-gray-800 p-1.5 rounded-lg transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-2 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.499 6.203a3.008 3.008 0 00-2.116-2.118C19.555 3.579 12 3.579 12 3.579s-7.555 0-9.383.506A3.008 3.008 0 00.501 6.203 32.394 32.394 0 000 11.999a32.394 32.394 0 00.501 5.796 3.008 3.008 0 002.116 2.118c1.828.506 9.383.506 9.383.506s7.555 0 9.383-.506a3.008 3.008 0 002.116-2.118 32.394 32.394 0 00.501-5.796 32.394 32.394 0 00-.501-5.796zM9.545 15.454V8.545l6.364 3.455-6.364 3.454z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium text-xs">YouTube</p>
                  <p className="text-green-400 text-[10px]">/saalik</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/saalik0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group hover:bg-gray-800 p-1.5 rounded-lg transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-2 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 text-white group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium text-xs">Instagram</p>
                  <p className="text-green-400 text-[10px]">/saalik</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-4 border-t border-gray-700/50 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent rounded-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-300 text-xs font-medium">
                © {new Date().getFullYear()} SAALIK TECH PVT. LTD. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-400 text-xs transition-all duration-300 hover:underline decoration-green-400">
                Privacy Policy
              </Link>
              <span className="text-gray-600 text-xs">•</span>
              <Link href="#" className="text-gray-400 hover:text-green-400 text-xs transition-all duration-300 hover:underline decoration-green-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
