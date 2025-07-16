import React from 'react'

function AboutRatings() {
  return (
    <div className='flex flex-col sm:px-50 py-20'>
        <div className='flex flex-col sm:flex-row items-center px-10 '>
            <div className='flex flex-col items-center text-center gap-5 pb-10 sm:items-baseline sm:text-left'>
                <p className='text-[#e74040]'>Problems trying</p>
                <div className='flex sm:flex-row flex-col gap-10'>
                <h3 className='text-[#252b42] font-bold text-3xl sm:pr-20'>Met minimum Moliie non desert Alamo est sit cliquey dolor do met sent.</h3>


                <p className='text-[#737373] text-center px-10'>Problems trying to reseolve the conflict between the two major realms of Classical physic Newtonian mechanics</p>
                </div>
            </div>
         
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center text-center gap-20 pt-20 sm:px-10'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#252b42] font-bold text-5xl'>15K</h1>
                <p className='text-[#737373] font-bold'>Happy Customers</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[#252b42] font-bold text-5xl'>150K</h1>
                <p className='text-[#737373] font-bold'>Montly Visitors</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[#252b42] font-bold text-5xl'>15</h1>
                <p className='text-[#737373] font-bold'>Countries Worldwide</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[#252b42] font-bold text-5xl'>100+</h1>
                <p className='text-[#737373] font-bold'>Top Partners</p>
            </div>


        </div>
    </div>
  )
}

export default AboutRatings