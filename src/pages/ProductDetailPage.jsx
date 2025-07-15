import React from 'react'
import Brands from '../components/Brands'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import BestSellerProducts from '../components/BestSellerProducts'
import ProductDescription from '../components/ProductDescription'
import ProductsDetails from '../components/ProductsDetails'

function ProductDetailPage(props) {
  const {className,id} = props;
  return (
    <div>
       <Header/>
       <ProductDescription productId={id}/>
       <ProductsDetails/>
       <BestSellerProducts className="bg-[#fafafa]"/>
       <Brands className="bg-[#fafafa]"/>
       <Footer/>
        
    </div>
  )
}

export default ProductDetailPage