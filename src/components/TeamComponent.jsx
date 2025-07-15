import { ChevronRight } from 'lucide-react'
import React from 'react'
import left from  "../assets/team/left.png"
import first from  "../assets/team/first.png"
import second from  "../assets/team/second.png"
import third from  "../assets/team/third.png"
import last from  "../assets/team/last.png"

function TeamComponent() {
  return (
    <div className='py-20 flex flex-col w-full'>
        <div className='flex flex-col items-center text-center gap-5'>
            <h1 className='text-sm font-bold text-[#737373]'>WHAT WE DO</h1>
            <h2 className='text-4xl font-bold text-[#252b42]'>Innovation tailored for you</h2>
            <div className='flex flex-row items-center gap-3'>
                <a className='text-[#252b42] font-semibold' href="/">Home</a>
                <ChevronRight size={20} />
                <h6 className='text-[#737373] font-semibold'>Team</h6>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center w-full h-[530px] sm:h-[550px] my-10'>
            <div className='sm:w-1/2 h-full py-1'>
                <img src={left} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='sm:w-1/2 h-full sm:pl-2 flex flex-wrap'>
                <div className='w-1/2 h-1/2 p-1'>
                    <img src={first} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-1/2 h-1/2 p-1'>
                    <img src={second} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-1/2 h-1/2 p-1'>
                    <img src={third} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-1/2 h-1/2 p-1'>
                    <img src={last} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
    
        </div>



    </div>
  )
}

export default TeamComponent