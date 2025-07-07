import { ChevronRight } from 'lucide-react'
import React from 'react'

function Categories() {
  return (
      <div className='w-full'>  
         <div className='bg-[#FAFAFA] flex justify-center flex-col py-10 px-10 sm:px-30 gap-6 sm:flex-row sm:justify-between '>
        <h3 className='text-[#252b42] text-2xl font-bold'>Shop</h3>
        <div className='flex flex-row items-center'>
        <h2 className='text-[#252b42] text-xl font-bold'>Home</h2>
        <ChevronRight />
        <h2 className='text-[#737373] text-xl font-bold'>Shop</h2>
        </div>
      </div></div>
  )
}

export default Categories