import React from 'react'

import Brands from '../components/Brands'
import BestSellerProducts from '../components/BestSellerProducts'
import FeaturedProduct from '../components/FeaturedProduct'
import Services from '../components/Services'
import TopProducts from '../components/TopProducts'
import FeaturedPost from '../components/FeaturedPost'

function PageContent() {
  return (
    <div>

     <Brands/>
    <TopProducts/>
     <BestSellerProducts/>
     <FeaturedProduct/>
   <Services/>
   <FeaturedPost/>
</div>
  )
}

export default PageContent
/*
başlıkların rengi #252b42
gri renkli yazılar #737373
#bdbdbd pricing açık renkli
#3f866d pricing yeşil*/