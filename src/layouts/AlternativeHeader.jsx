import { ArrowRight, ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function AlternativeHeader() {
  return (
    <header className="bg-white p-10 sm:px-30 w-full flex-col align-center">
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

         
                <div className="flex items-center gap-5">
                        <Link to="/login" className="text-[#3fa6f0] font-medium">Login</Link>

                        <button className='flex flex-row text-white bg-[#3fa6f0] rounded px-8 py-4'>Become a member <ArrowRight className="text-white" /></button>
                </div>
           
        </div>
    </header>
  )
}

export default AlternativeHeader