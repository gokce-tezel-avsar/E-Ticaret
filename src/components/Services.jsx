import React from 'react'
import book from  '../assets/serviceIcons/book.svg'
import concrete from  '../assets/serviceIcons/concrete.svg'
import trending from  '../assets/serviceIcons/trending.svg'

function Services() {
  return (
    <div>
        <section className="flex flex-col items-center my-30">
            <div className="flex flex-col items-center gap-4 mb-20" >
                <h4 className='text-[#737373] text-xl'>Featured Products</h4>
                <h3 className='text-[#252b42] font-bold text-2xl'>THE BEST SERVICES</h3>
                <p className='text-[#737373] text-sm text-center' >Problems trying to resolve <br/> the conflict between</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-20 max-w-50 sm:max-w-6xl mx-auto sm:justify-between sm:gap-x-50">
                <div className='flex flex-col sm:flex-1 items-center gap-2'> 
                    <img src={book} alt="book" />
                    <h3 className='text-[#252b42] font-bold text-xl'>Easy Wins</h3>
                    <p className='text-[#737373] text-center'>Get your best looking smile now!</p>
                </div>
                <div className='flex flex-col sm:flex-1 items-center gap-2 '>
                    <img src={concrete} alt="contcrete" />
                    <h3 className='text-[#252b42] font-bold text-xl'>Concrete</h3>
                    <p className='text-[#737373] text-center'>defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className='flex flex-col sm:flex-1 items-center gap-2'>
                    <img src={trending} alt="trending" />
                    <h3 className='text-[#252b42] font-bold text-xl'>Hack Growth</h3>
                    <p className='text-[#737373] text-center'>Overcame any hurdle or any other problem.</p>
                </div>
            
            </div>
        </section>

    </div>
  )
}

export default Services