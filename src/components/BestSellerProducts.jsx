import React from 'react'
import { Link } from 'react-router-dom'
import {products} from "../data.js"

function BestSellerProducts({className=""}) {
  return (
    <div className='flex flex-col w-full px-10 sm:px-30 mt-10 bg-[#fafafa]'>
      <h2 className='text-[#252b42] font-bold text-xl my-4 '>BESTSELLER PRODUCTS</h2>
      <hr className='text-[#ececec]'/>

      <div className='flex flex-col sm:flex-row gap-10 sm:flex-wrap overflow-hidden'>
        {products.map((product, index) => (
          <Link
            to="/productDetail"
            key={index}
            className={`flex flex-col items-center gap-3 my-5 ${
              index > 3 ? 'hidden sm:text-center' : ''  
            }`}
          >
            <div className='bg-white pb-5 text-center flex flex-col gap-3'>
            <img src={product.image} alt={product.name} />
            <h3 className='text-[#252b42] font-bold'>{product.category}</h3>
            <p className='text-[#737373] font-bold'>{product.name}</p>
            <p className='text-[#bdbdbd]'>
              {product.price}{' '}
              <span className='text-[#3f866d]'>{product.discountPrice}</span>
            </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestSellerProducts
