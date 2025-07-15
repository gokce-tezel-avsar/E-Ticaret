import React from 'react'
import contacthero from "../assets/contacthero.jpg"

function ContactComponent() {
  return (
    <div className='relative w-full sm:h-[446px] h-[468px]'>
    <img 
      src={contacthero} 
      alt="contact background" 
      className='w-full h-full object-cover object-center' 
    />
    <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
      <h1 className='text-4xl text-[#252b42] font-bold'>Questions <br className='sm:hidden'/> & Answers</h1>
      <p className='text-xl mt-4 tex-wrap text-[#252b42]'>Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
      <button className='text-[#3fa6f0] mt-6 text-lg font-semibold'>CONTACT US</button>
    </div>
  </div>
  )
}

export default ContactComponent