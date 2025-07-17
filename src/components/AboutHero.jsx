import React from 'react'
import abouthero from '../assets/about/abouthero.png'

function AboutHero() {
  return (
    <div className='flex flex-col sm:flex-row sm:px-20 justify-between sm:w-full'>
        <div className='flex flex-col sm:items-baseline justify-center py-20  items-center gap-15 sm:gap-10 sm:px-30  sm:w-1/2 tracking-wide'>
            <h1 className='font-bold text-[#252b42] hidden sm:inline'>ABOUT COMPANY</h1>
            <h2 className='text-6xl font-bold text-[#252b42]'>ABOUT US</h2>
            <p className='text-[#737373] text-wrap text-center sm:text-left'>We know how large objects will act, but things on a small scale just do not act that way</p>
            <button className='text-white bg-[#3fa6f0] px-8 py-4 rounded'>Get Quote Now</button>
        </div>
        <div className='flex item-center justify-center' >
            <img src={abouthero} alt="" className='h-[439px] sm:h-[612px] sm:w-full object-cover ' />
        </div>
       
    </div>
  )
}

export default AboutHero