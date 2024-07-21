import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Novetiv AI</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contacts" className="hover:underline">Contacts</a></li>
          <li><a href="#sign-in" className="hover:underline">Sign In</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
