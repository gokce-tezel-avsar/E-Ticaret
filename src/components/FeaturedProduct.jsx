import React from 'react';
import leftPic from '../assets/featured/leftPic.png';
import rightPic from '../assets/featured/rightPic.png';

function FeaturedProduct() {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-20 w-full sm:justify-center items-center">
      
      <div className="flex gap-2 justify-center sm:justify-start sm:w-1/3">
        <img src={leftPic} alt="leftPic" className="w-1/2 object-cover" />
        <img src={rightPic} alt="rightPic" className="w-1/2 object-cover" />
      </div>

     
      <div className="flex flex-col gap-4 text-left w-1/2 sm:w-1/3 sm:justify-center">
        <h5 className="text-[#3fa6f0] font-bold">Featured Products</h5>
        <h2 className="text-[#252b42] font-bold text-4xl sm:text-5xl">
          We love <br /> what we do
        </h2>
        <p className="text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics
        </p>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics. Newtonian mechanics
        </p>
      </div>

    </section>
  );
}

export default FeaturedProduct;
