import React from 'react';
import NavBar from './Navbar';
import Button from './ui/Button';  // Import Button component

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          {/* Replace Link with a simple div or span */}
          <div className="text-white hover:text-blue-300">
            Shoply
          </div>
        </div>

        {/* Navigation Bar */}
        <NavBar />

        {/* Right Section: Search Bar & Buttons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full text-black focus:outline-none"
            />
            <button className="absolute top-0 right-0 mr-3 mt-2 text-blue-600">
              🔍
            </button>
          </div>

          {/* Buttons */}
          <Button onClick={() => console.log('Login Clicked')}>Login</Button>
          <Button
            onClick={() => console.log('Sign Up Clicked')}
            className="bg-green-500 hover:bg-green-700"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
