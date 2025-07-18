import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageContent from '../layouts/PageContent'
import Hero from '../components/Hero';


function HomePage() {
  return (
    <div className="flex flex-col items-center bg-white w-full ">
      <Header/>
      <Hero/>
      <Brands/>
     <TopProducts/>
     <BestSellerProducts/>
     <FeaturedProduct/>
     <Services/>
     <FeaturedPost/>
      <Footer/>
    </div>

  )
}

export default HomePage