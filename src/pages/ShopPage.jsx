import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Brands from '../components/Brands'
import ShopCategoryList from '../components/ShopCategoryList'
import ShopFilter from '../components/ShopFilter'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'


function ShopPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
        <Header/>
        <ShopCategoryList/>
        <ShopFilter/>
        <ProductCard/>
        <Brands/>
        <Footer/>
        <Pagination/>
    </div>
  )
}

export default ShopPage