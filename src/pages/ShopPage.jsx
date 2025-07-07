import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Brands from '../components/Brands'
import Categories from '../components/Categories'

function ShopPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
        <Header/>
        <Categories/>
        <Brands/>
        <Footer/>
    </div>
  )
}

export default ShopPage