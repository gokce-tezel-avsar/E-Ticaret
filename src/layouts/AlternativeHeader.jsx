import { AlignJustify, ArrowRight, ChevronDown, Heart, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AlternativeHeader() {
          const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white px-10 py-5 sm:px-60 w-full flex-col align-center">
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
        
                <div className="sm:flex items-center gap-5 hidden">
                        <Link to="/login" className="text-[#3fa6f0] font-medium">Login</Link>

                        <button className='flex flex-row text-white bg-[#3fa6f0] rounded px-8 py-4'>Become a member <ArrowRight className="text-white" /></button>
                </div>



<div className='flex flex-row items-center justify-center gap-5 sm:hidden'>
                <Search className="text-[#252b42]" />

              <ShoppingCart className="text-[#252b42]" />

                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <AlignJustify strokeWidth={1} />
            </button>

          
            </div>
           
        </div>
        {isOpen && (
                      <nav className="flex mt-2 text-[#737373] bg-white p-6 sm:hidden text-xl font-semibold flex-col gap-3 text-center">
                        <Link to="/home">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>
                      </nav>
                    )}
    </header>
  )
}

export default AlternativeHeader