import { Play } from 'lucide-react'
import React from 'react'
import video from "../assets/video.png"

function Video() {
  return (
    <div className='flex relative items-center justify-center py-10'>
        <img src={video} className='relative rounded-xl object-contain'></img>
        <button className='absolute bg-[#3fa6f0] p-4 rounded-4xl items-center justify-center'><Play className='text-white'/></button>
    </div>
  )
}

export default Video