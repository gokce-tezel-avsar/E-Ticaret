import React from 'react'
import hooli from '../assets/brands/hooli.png'
import lyft from '../assets/brands/lyft.png'
import thirdBrand from '../assets/brands/thirdBrands.png'
import stripe from '../assets/brands/stripe.png'
import aws from '../assets/brands/aws.png'
import lastBrands from '../assets/brands/lastBrand.png'

function Brands({className=""}) {
  return (
    <div>
         <section className={`flex flex-col items-center gap-15 py-20 sm:flex-row sm:items-center sm:justify-center bg-[#fafafa]   ${className} `}>
              <img src={hooli} alt="hooli" />
              <img src={lyft} alt="lyft" />
              <img src={thirdBrand} alt="thirdBrand" />
              <img src={stripe} alt="stripe" />
              <img src={aws} alt="aws" />
              <img src={lastBrands} alt="lastBrand" />
          </section>
    </div>
  )
}

export default Brands