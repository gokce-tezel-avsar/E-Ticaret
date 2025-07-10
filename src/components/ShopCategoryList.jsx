import { ChevronRight } from 'lucide-react'
import React from 'react'
import ShopCategories from './ShopCategories'

function ShopCategoryList() {
  return (
    <div className='w-full bg-[#FAFAFA]'>
          <div className='flex justify-center flex-col py-10 px-10 sm:px-30 gap-6 sm:flex-row sm:justify-between '>
            <h2 className='text-[#252b42] text-2xl font-bold text-center sm:text-left'>Shop</h2>
            <div className='flex flex-row justify-center sm:items-center'>
                <a className='text-[#252b42] text-xl font-bold' href="/">Home</a>
                <ChevronRight />
                <h6 className='text-[#737373] text-xl font-bold'>Shop</h6>
            </div>
        </div>
        <div>
            <ShopCategories/>
        </div>
    </div>
  )
}

export default ShopCategoryList