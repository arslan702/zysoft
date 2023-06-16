import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-f6f6f6 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Image className="h-16 w-16" src="/images/zy.png" alt="Logo" height={250} width={250}/>
                {/* <span className="text-gray-800 text-xl font-bold ml-2">Your Logo</span> */}
              </a>
            </div>
            <div className="hidden md:flex">
              <div className="ml-4 flex items-center">
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">Jobs</a>
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">Portfolio</a>
                <a href="#" className="text-gray-800 hover:text-black px-6 py-2 rounded-md text-sm font-medium">Blog</a>
              </div>
              <div className="ml-4">
                <a href="#" className="text-white bg-indigo-400 hover:bg-indigo-400 px-4 py-2 rounded-md text-sm font-medium" style={{background: 'linear-gradient(274.71deg, #3C1B65 -32.2%, #9F37F0 109.29%)', boxShadow: '0px 4px 25px rgba(151, 50, 212, 0.35)', borderRadius: '25px'}}>Contact Us</a>
              </div>
            </div>
            <div className="flex md:hidden">
              <button type="button" className="text-gray-800 hover:text-black focus:outline-none focus:text-black" aria-label="Toggle menu" onClick={toggleMenu}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 9.5C2.33579 9.5 2 9.83579 2 10.25C2 10.6642 2.33579 11 2.75 11H17.25C17.6642 11 18 10.6642 18 10.25C18 9.83579 17.6642 9.5 17.25 9.5H2.75ZM2 14.75C2 14.3358 2.33579 14 2.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H2.75C2.33579 15.5 2 15.1642 2 14.75Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Jobs</a>
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#" className="text-gray-800 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Blog</a>
          </div>
          <div className="px-4 py-3 border-t border-gray-700">
            <a href="#" className="text-white bg-indigo-500 hover:bg-indigo-600 block px-4 py-2 rounded-md text-base font-medium contact-button">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
