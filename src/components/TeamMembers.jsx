import React from 'react'
import left from  "../assets/team/left.png"
import { Facebook } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function TeamMembers() {
  return (
    <div>
        <div className='flex flex-col items-center w-full gap-10'>
            <h2 className='text-[#252b42] font-bold text-3xl'>Meet Our Team</h2>

<div className='flex flex-col sm:flex-row w-full gap-5 '>
            <div className='flex flex-col items-center gap-3 sm:w-1/3'>
                <img src={left} alt="" className=' h-[230px]' />
                <h5 className='text-[#252b42] font-bold 
                '>Yalçın Kaya</h5>
                <h6 className='text-[#737373] font-bold'>Product Manager</h6>
                 <div className='flex flex-row gap-x-6 '> 
                       <FontAwesomeIcon icon={faFacebookF} className="text-[#45a1c2]" />
                       <FontAwesomeIcon icon={faInstagram} className="text-[#45a1c2]" />
                       <FontAwesomeIcon icon={faTwitter} className="text-[#45a1c2]" />
                </div>
            </div>


            <div className='flex flex-col items-center gap-3 sm:w-1/3'>
                <img src={left} alt="" className=' h-[230px]' />
                <h5 className='text-[#252b42] font-bold 
                '>Gökçe Tezel Avşar</h5>
                <h6 className='text-[#737373] font-bold'>Full Stack Developer</h6>
                 <div className='flex flex-row gap-x-6 '> 
                       <FontAwesomeIcon icon={faFacebookF} className="text-[#45a1c2]" />
                       <FontAwesomeIcon icon={faInstagram} className="text-[#45a1c2]" />
                       <FontAwesomeIcon icon={faTwitter} className="text-[#45a1c2]" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMembers