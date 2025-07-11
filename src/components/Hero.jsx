import React from 'react'
import heromobil from '../assets/hero/heromobil.png'
import heropic from "../assets/hero/heropic.png"

function Hero() {
  return (
    <div>
        <div className='w-[388px] h-[902px] sm:h-[622px] sm:w-[1292px] rounded-xl bg-[#96e9fb] flex flex-col justify-between  sm:flex-row sm:items-center'>
            <div className='flex flex-col items-center p-10 pt-20 gap-4 sm:text-left sm:items-start sm:ml-20'>
        <p className="text-[#2a7cc7] font-medium mb-2">SUMMER 2020</p>
                        <h1 className="text- text-[#252b42] text-center text-5xl font-bold mb-4">NEW COLLECTION</h1>
                        <p className="text-xl text-[#737373] max-w-md mb-6">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="bg-[#3fa6f0] text-white px-8 py-4 rounded font-medium text-lg">
                            SHOP NOW
                        </button>
                        </div>
        <img src={heromobil} alt="" className='flex sm:hidden'/>
        <img
                    src={heropic}
                    alt="Hero Pic"
                    className="hidden sm:block"
                    />
        </div>
        
    </div>
  )
}

export default Hero