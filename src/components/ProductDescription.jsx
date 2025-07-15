import {
    ChevronLeft,
    ChevronRight,
    Eye,
    Heart,
    ShoppingCart,
    Star,
  } from "lucide-react";
  import React, { useState } from "react";
  import { productDetails } from "../data.js";
  
  function ProductDescription({ productId }) {
    const product = productDetails.find((p) => p.id === productId);
    const [mainImage, setMainImage] = useState(product?.image);
  
    if (!product) {
      return <div>Ürün bulunmadı.</div>;
    }
  
    return (
      <div className="flex flex-col bg-[#fafafa] py-10">
    
        <div className="flex items-center px-30 py-8 gap-2">
          <a className="text-[#252b42] font-bold" href="/">
            Home
          </a>
          <ChevronRight />
          <h6 className="text-[#737373] font-bold">Shop</h6>
        </div>
  
        
        <div className="flex flex-col items-center justify-center px-10">
          <div className="flex flex-col sm:flex-row max-w-6xl w-full gap-10">
           
            <div className="flex flex-col items-center w-full sm:w-1/2">
              <div className="relative w-full">
                <img
                  src={mainImage}
                  alt=""
                  className="w-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <ChevronLeft color="white" size={40} />
                  <ChevronRight color="white" size={40} />
                </div>
              </div>
              <div
                className="mt-4 cursor-pointer"
                onClick={() => setMainImage(product.image2)}
              >
                <img
                  src={product.image2}
                  alt=""
                  className="h-[100px] w-[100px] object-cover rounded"
                />
              </div>
            </div>
  
            
            <div className="flex flex-col justify-between w-full lg:w-1/2 h-[500px] px-4">
              <div className="space-y-4">
                <h3 className="text-[#252b42] font-semibold text-2xl">
                  {product.name}
                </h3>
  
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="text-yellow-400" />
                  <span className="ml-2 text-sm text-[#737373] font-bold">
                    {product.reviews} Reviews
                  </span>
                </div>
  
                <p className="text-xl text-[#252b42] font-semibold">{product.price}</p>
                <p className="text-[#737373] font-bold">
                  Availability:{" "}
                  <span className="text-[#3fa6f0]">{product.availability}</span>
                </p>
                <p className="text-[#858585] pb-10">{product.description}</p>
  
               <hr className="text-[#858585] pb-10"/>
                <div className="flex gap-3">
                  <button className="w-6 h-6 bg-orange-600 rounded-full" />
                  <button className="w-6 h-6 bg-blue-600 rounded-full" />
                  <button className="w-6 h-6 bg-green-600 rounded-full" />
                  <button className="w-6 h-6 bg-black rounded-full" />
                </div>
              </div>
  
        
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-500 flex text-nowrap text-white rounded px-4 py-2">
                  Select Options
                </button>
                <button className="rounded-full border-2 border-[#ececec] p-2">
                  <Heart size={20}/>
                </button>
                <button className="rounded-full border-2 border-[#ececec] p-2">
                  <ShoppingCart size={20} />
                </button>
                <button className="rounded-full border-2 border-[#ececec] p-2">
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductDescription;
  