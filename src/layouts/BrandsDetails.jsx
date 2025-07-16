import React from 'react'
import Brands from "../components/Brands.jsx"

function BrandsDetails(props) {
  const {className} = props;
  return (
    <div>
        <div className='flex flex-col bg-[#fafafa] items-center pt-30 sm:py-20 font-bold gap-10'>
            <h1 className='text-[#252b42] text-4xl w-2/5 sm:w-full text-center'>Big Companies Are Here</h1>
            <p className='text-[#737373] text-center w-2/3 sm:w-1/3'>Problems trying to resolve the coflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <Brands className='bg-[#fafafa]'/>
    </div>
  )
}

export default BrandsDetails