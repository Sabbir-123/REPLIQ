import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Searchbar = () => {
    return (
        <header className="purple text-white px-4 py-3 md:px-6 md:flex md:justify-between">
     
      <div className="flex justify-center md:justify-start mt-4 md:mt-0">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FiSearch className="h-5 w-5 text-gray-500" />
          </span>
          <input
            className="block w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-700 focus:border-gray-500 focus:text-white text-lg"
            placeholder="Search for products"
          />
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <div className="ml-4">
          <button type="button" className="flex items-center text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <span className="sr-only">Add to Wishlist</span>
            <FiHeart className="h-6 w-6" />
            <span className="ml-2">Add to Wishlist</span>
          </button>
        </div>
        <div className="ml-4">
          <button type="button" className="flex items-center text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <span className="sr-only">Cart</span>
            <FiShoppingCart className="h-6 w-6" />
            <span className="ml-2">0</span>
          </button>
        </div>
      </div>
    </header>
    );
};

export default Searchbar;