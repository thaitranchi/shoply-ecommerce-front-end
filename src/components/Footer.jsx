import React from 'react';
import NavBar from './Navbar'; // Import NavBar component

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Bar inside Footer */}
        <div className="mb-4">
          <NavBar />
        </div>

        {/* Footer Content */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shoply. All rights reserved.</p>
          <p>Designed & Developed by TCT Softwares</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
