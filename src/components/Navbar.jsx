import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className="hidden sm:block w-full bg-gray-800 text-white text-sm py-3 px-20">
      <div className="px-10 flex justify-between items-center">
        
        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
          <Mail strokeWidth={1.25} size={20}/>
          <span>gokcetezelavsar@gmail.com</span>
        </div>
        </div>


        <div className="text-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

      
        <div className="flex items-center gap-2">
          <span>Follow Us:</span>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faFacebookF} className="text-white" />
            <FontAwesomeIcon icon={faYoutube} className="text-white " />
            <FontAwesomeIcon icon={faInstagram} className="text-white " />
            <FontAwesomeIcon icon={faTwitter} className="text-white " />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
