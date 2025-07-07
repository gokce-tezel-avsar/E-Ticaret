import React, { useState } from 'react';
import { AlignJustify, Search, ShoppingCart, UserRound, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <Navbar/>
      <header className="bg-white py-4 px-10 w-full flex-col align-center">
        <div className="flex justify-between items-center w-full">
          <div className='sm:flex sm:flex-row sm:items-center sm:gap-30'>
          <h3 className="text-2xl text-[#252b42] font-bold">Bandage</h3>
          <nav className="hidden sm:flex gap-6 text-gray-700 text-md font-medium">
            <Link to="/home">Home</Link>
            <Link to="/shop" className="flex items-center gap-1">
              Shop <ChevronDown className="w-5 h-5" />
            </Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pages">Pages</Link>
          </nav>
          </div>

          <div className="flex items-center gap-4 sm:text-md ">     
            <div className="hidden sm:flex items-center gap-1">
              <UserRound className="text-blue-500 sm:w-5 sm:h-5" />
              <span className="text-blue-500 font-medium sm:inline">Login / Register</span>
            </div>

           
            <Search className="text-[#252b42] sm:text-blue-500 sm:w-5 sm:h-5" />

          
            <div className="flex items-center gap-1">
              <ShoppingCart className="text-[#252b42] sm:text-blue-500 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-blue-500 text-sm">1</span>
            </div>

            <div className="hidden sm:flex items-center gap-1">
              <Heart className="w-5 h-5 text-blue-500 sm:w-5 sm:h-5" />
              <span className="text-blue-500 text-sm">1</span>
            </div>


            <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <AlignJustify strokeWidth={1} />
            </button>
          </div>
        </div>

      
        {isOpen && (
          <nav className="flex mt-2 text-[#737373] bg-white p-6 sm:hidden flex-col gap-3 text-center">
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        )}
      </header>
   <Hero/>
    </>
  );
}

export default Header;
