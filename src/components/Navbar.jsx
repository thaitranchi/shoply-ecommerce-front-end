import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-2xl font-bold">
            Shoply
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-blue-300">Home</a>
            <a href="/shop" className="text-white hover:text-blue-300">Shop</a>
            <a href="/about" className="text-white hover:text-blue-300">About</a>
            <a href="/contact" className="text-white hover:text-blue-300">Contact</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-white hover:text-blue-300">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
          <a href="/login" className="text-white hover:text-blue-300">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
