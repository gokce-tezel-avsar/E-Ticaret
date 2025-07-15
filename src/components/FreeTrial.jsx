import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FreeTrial() {
  return (
    <div className='flex flex-col py-40 items-center text-center gap-10 px-15'>
    
        <h1 className='text-[#252b42] text-4xl font-bold text-wrap'>Start your 14 days free trial</h1>
        <p>Met minim Mollie non esert Alamo est sit cliquey dolor do met sent. RELIt officiasl consequent</p>
        <button className='bg-[#3fa6f0] px-10 py-4 text-white text-sm rounded'>Try it free now</button>

       <div className='flex flex-row gap-x-4'> 
                             <FontAwesomeIcon icon={faFacebookF} className="text-[#45a1c2] text-xl" />
                             <FontAwesomeIcon icon={faInstagram} className="text-[#45a1c2] text-xl" />
                             <FontAwesomeIcon icon={faTwitter} className="text-[#45a1c2] text-xl" />
                             <FontAwesomeIcon icon={faLinkedinIn}  className="text-[#45a1c2] text-xl" />
                      </div>
       
    </div>
  )
}

export default FreeTrial