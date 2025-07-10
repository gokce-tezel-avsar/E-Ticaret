import React from 'react'
import first from '../assets/shopCards/first.jpg';
import second from '../assets/shopCards/second.jpg';
import third from '../assets/shopCards/third.jpg';
import fourth from '../assets/shopCards/fourth.jpg';
import last from '../assets/shopCards/last.jpg';

const categories = [
    {name:"first", count:5 , image: first},
    {name:"second", count:5 , image: second},
    {name:"third", count:5 , image:third},
    {name:"fourth", count:5 , image:fourth},
    {name:"lastirst", count:5 , image:last},
]

function ShopCategories() {
  return (
    <div className='flex flex-col sm:flex-row gap-6 mx-30 pb-20'>
    
        {categories.map((category,index)=> (
     <div key={index} className='relative'>
        <img className="" src={category.image} alt={category.name}/>
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <h6 className='text-white font-bold'>CLOTHS</h6>
                <h6 className='text-white font-bold'>{category.count} ITEMS</h6>
             </div>
    </div>
        ))}
     
    </div>
  )
}

export default ShopCategories