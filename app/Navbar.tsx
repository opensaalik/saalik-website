"use client"


import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => window.removeEventListener('scroll', changeBackground);
  }, []);
  return (
    <nav className={`sticky h-[80px] top-0 z-50 px-16 transition-colors duration-300 bg-black flex items-center justify-between `}>
    
    
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex py-4 items-center justify-between">
            <Image src="/img/saalik-logo.png" alt="SAALIK logo" width={70} height={70} />
            <div className="hidden sm:block sm:ml-6">
              <div className={`text-black-300 flex space-x-6 ${className}`}>
                <Link className={`hover:text-[#63c963] ${path == '/' ? "text-[#63c963] font-semibold" : ""} px-5 py-2 rounded-xl text-sm font-medium`} href="/">
                  Home
                </Link>
                <Link className={`hover:text-[#63c963] ${path == '/about' ? "text-[#63c963] font-semibold" : ""} px-5 py-2 rounded-xl text-sm font-medium`} href="/about">
                  About
                </Link>
                <Link className={`hover:text-[#63c963] ${path == '/myths' ? "text-[#63c963] font-semibold" : ""} px-5 py-2 rounded-xl text-sm font-medium`} href="/myths">
                  Myths
                </Link>
                <Link className={`hover:text-[#63c963] ${path == '/initiatives' ? "text-[#63c963] font-semibold" : ""} px-5 py-2 rounded-xl text-sm font-medium`} href="/initiatives">
                  Initiatives
                </Link>
                <Link className={`bg-gradient-to-r from-green-500 to-green-700 rounded-full hover:from-green-700 hover:to-green-500  transition duration-800 ease-in-out delay-800 fade-in text-white hover:text-white ${path == '/contact' ? "text-[#63c963] font-semibold" : ""} px-5 py-2 text-sm font-medium`} href="/contact">
                  Reach Us
                </Link>
              </div>
            </div>
       
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
              home
            </Link>
            <Link className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/myths">
              myths
            </Link>
            <Link className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/initiatives">
              initiatives
            </Link>
            <Link className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/contact">
              contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
