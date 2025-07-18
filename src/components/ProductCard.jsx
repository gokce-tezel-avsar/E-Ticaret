import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import product1 from '../assets/productPics/product1.png'
import product2 from '../assets/productPics/product2.png'
import product3 from '../assets/productPics/product3.png'
import product4 from '../assets/productPics/product4.png'
import product5 from '../assets/productPics/product5.png'
import { Link } from 'react-router-dom'


const products = [
  {category: "Graphic Design", name:"Engslish Department", image:product1, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product2, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product3, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product4, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product5, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product2, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product3, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product4, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product5, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product3, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product4, price:"$16.48", discountPrice:"$6.48"},
  {category: "Graphic Design", name:"Engslish Department", image:product5, price:"$16.48", discountPrice:"$6.48"},]


function ProductCard() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/productDetail")

  };

  return (
    <Link to="/productDetail"
    onClick={handleClick}
    className='flex flex-col sm:flex-row sm:justify-between px-30 gap-5 sm:flex-wrap'>
      {products.map((product, index)=> (
       <div key={index} className={`flex flex-col items-center gap-3 my-5  ${
          index > 3 ? 'hidden sm:block sm:text-center' : ''
        }`}>
          <img src={product.image} />
          <h3 className='text-[#252b42] font-bold'>{product.category}</h3>
          <p className='text-[#737373] font-bold'>{product.name}</p>
          <p className='text-[#bdbdbd]'>{product.price} <span className='text-[#3f866d]'>{product.discountPrice}</span></p>
          </div>
    ))}

    </Link>

  )
}

export default ProductCard



