import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 mx-auto px-4 max-w-screen-xl">
        {/* Logo in the center */}
        <a href='/'><div className="flex flex-row">
          
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKTp5fsOvDxhhGUEPjMMq9lJn7u_ElQtxCw&s"
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
      
                    <h1 className='text-rose-700 text-bold text-4xl'>VogueVerse</h1>
        </div>
        </a>
        {/* Links and Cart Icon */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-800 hover:text-rose-600 transition duration-300">Home</a>
          <a href="#product" className="text-gray-800 hover:text-rose-600 transition duration-300">Products</a>
          <a href="#contact" className="text-gray-800 hover:text-rose-600 transition duration-300">Contact Us</a>
          <button className="snipcart-checkout">
            <i className="fas fa-shopping-cart text-2xl text-gray-800 hover:text-rose-600 transition duration-300"></i>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Home</a>
        <a href="/products" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Products</a>
        <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Contact Us</a>
        <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300 snipcart-checkout">
          <i className="fas fa-shopping-cart"></i> Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
