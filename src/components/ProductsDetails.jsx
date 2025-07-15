import { ChevronRight } from 'lucide-react'
import React from 'react'
import product1 from '../assets/productPics/product1.png'

function ProductsDetails() {
  return (
    <div className='flex flex-col sm:px-30 p-10'>
        <div className='flex flex-row justify-center gap-10 text-[#737373] font-bold pb-10'>
            <p>Description</p>
            <p>Additional Information</p>
            <p>Reviews(0)</p>
        </div>
        <hr className='text-[#ececec] py-5'/>

        <div className='flex flex-col sm:flex-row items-center text-[#737373] w-full gap-10 px-10'>
            <div className='flex sm:w-1/3 '>
                <img src={product1} className='w-full h-full object-contain ' />
            </div>

            <div className='flex flex-col sm:w-1/3'>
                <h3 className='text-[#252b42] text-2xl font-bold'>the quick fox jumps over</h3>
                <p>Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuenv </p>
                <p>Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuenv </p>
                <p>Met minimum mollie non deser Almao est sit sliuen Met  est sit sliuen Met minimum mollie non deser Almao est sit sliuen Met minimum mollie non deser Almao est sit sliuenv </p>
            </div>


            <div className=' flex flex-col sm:w-1/3 gap-5'>
            <div className='flex flex-col'>
               <h3 className='text-[#252b42] text-2xl font-bold'>the quick fox jumps over</h3>
                <span><ChevronRight/>the quick foc jumps over lazy doog</span>
                <span><ChevronRight/>the quick foc jumps over lazy doog</span>
                <span><ChevronRight/>the quick foc jumps over lazy doog</span>
                </div>
            <div className='flex flex-col '>
                <h3 className='text-[#252b42] text-2xl font-bold'>the quick fox jumps over</h3>
                <p><ChevronRight/>the quick foc jumps over lazy doog</p>
                <p><ChevronRight/>the quick foc jumps over lazy doog</p>
                <p><ChevronRight/>the quick foc jumps over lazy doog</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails