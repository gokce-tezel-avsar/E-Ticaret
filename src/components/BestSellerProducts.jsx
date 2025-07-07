import React from 'react'

import product1 from '../assets/productPics/product1.png'
import product2 from '../assets/productPics/product2.png'
import product3 from '../assets/productPics/product3.png'
import product4 from '../assets/productPics/product4.png'
import product5 from '../assets/productPics/product5.png'

function BestSellerProducts() {
  return (
    <div className='flex flex-col w-full'>
      <section className='flex flex-col items-center justify-center text-center gap-3'>
    <div className='flex flex-col items-center gap-2 pt-20'>
    <h2 className='flex text-[#252b42] font-bold text-2xl'>BESTSELLER<br /> PRODUCTS</h2>
    <p className='text-[#737373]'>Problems trying to resolve the <br />conflict between</p>
    </div>
    <div className='flex flex-col sm:flex-row sm:w-full justify-center gap-10'>
       <div className='flex flex-col items-center gap-3 my-5 sm:w-1/8'>
         <img src={product1} alt="" /> 
         <h3  className='text-[#252b42] font-bold'>Graphic Design</h3>
          <p className='text-[#737373] font-bold'>English Department</p>
          <p className='text-[#bdbdbd]'>$16.48  <span className='text-[#3f866d]'>$6.48</span></p>
      </div>
       <div className='flex flex-col items-center gap-3 my-5 sm:w-1/8'>
          <img src={product2} alt="" />
          <h3 className='text-[#252b42] font-bold'>Graphic Design</h3>
           <p className='text-[#737373] font-bold'>English Department</p>
           <p className='text-[#bdbdbd]'>$16.48  <span className='text-[#3f866d]'>$6.48</span></p>
      </div>
      <div className='flex flex-col items-center gap-3 my-5 sm:w-1/8'>
    <img src={product3} alt="" />
    <h3 className='text-[#252b42] font-bold'>Graphic Design</h3>
    <p className='text-[#737373] font-bold'>English Department</p>
    <p className='text-[#bdbdbd]'>$16.48  <span className='text-[#3f866d]'>$6.48</span></p>
    </div>
    <div className='flex flex-col items-center gap-3 my-5 sm:w-1/8'>
    <img src={product4} alt="" />
    <h3 className='text-[#252b42] font-bold'>Graphic Design</h3>
    <p className='text-[#737373] font-bold'>English Department</p>
    <p className='text-[#bdbdbd]'>$16.48  <span className='text-[#3f866d]'>$6.48</span></p>
    </div>
    <div className='flex flex-col items-center gap-3 my-5 sm:w-1/8'>
    <img src={product5} alt="" />
    <h3 className='text-[#252b42] font-bold'>Graphic Design</h3>
    <p className='text-[#737373] font-bold'>English Department</p>
    <p className='text-[#bdbdbd]'>$16.48  <span className='text-[#3f866d]'>$6.48</span></p>
    </div>
    </div>
    <button className='border-1 py-4 px-10 my-10 font-bold rounded text-[#3fa6f0]'>LOAD MORE PRODUCTS</button>
  </section></div>
  )
}

export default BestSellerProducts