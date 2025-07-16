import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterBar({className=""}) {
  return (
    <div className=''>  
        <div className={`bg-[#FAFAFA] flex justify-center flex-col py-15 px-10 sm:px-60 gap-6 sm:flex-row sm:justify-between ${className}`}>
    <h3 className='text-[#252b42] text-3xl font-bold'>Bandage</h3>
    <div className='flex flex-row gap-x-6 '> 
       <FontAwesomeIcon icon={faFacebookF} className="text-[#45a1c2] text-2xl" />
       <FontAwesomeIcon icon={faInstagram} className="text-[#45a1c2] text-2xl" />
       <FontAwesomeIcon icon={faTwitter} className="text-[#45a1c2] text-2xl" />
    </div>
  </div>
  </div>
  )
}

export default FooterBar