import React from 'react'
import workwithus from "../assets/workwithus.png"

function WorkWithUs() {
  return (
    <div className='flex flex-row w-full bg-[#2a7cc7] justify-between ' >
        <div className='flex flex-col text-white font-bold items-center py-30 text-center sm:text-left sm:items-baseline gap-8 justify-center sm:px-60 px-20 '>
            <h2>WORK WITH US</h2>
            <h5 className='text-5xl'>Now Let's grow Yours</h5>
            <p className='font-normal'>The gratdual accumulation of information abaout atomic and small scale behavior during the first quarter of the 20th.</p>
            <button className='border-2 rounded border-white px-6 py-2 font-normal'>Button</button>
        </div>
            <img src={workwithus} className='hidden sm:block' />
    </div>
  )
}

export default WorkWithUs