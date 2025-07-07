import React from 'react';
import colors from '../assets/featuredPost/colors.png';
import sea from '../assets/featuredPost/sea.png';
import { AlarmClock, ChartArea } from 'lucide-react';

function FeaturedPost() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-10">
     
      <section className="text-center mb-8">
        <h6 className="text-[#3fa6f0] font-bold">Practise Advice</h6>
        <h2 className="text-[#252b42] font-bold text-4xl sm:text-5xl">
          Featured Posts
        </h2>
      </section>

     <div className='flex flex-col sm:flex-row'>
      <section className="relative max-w-md w-full">

       <div>
        <button className="absolute top-2 left-2 bg-red-600 text-white font-bold px-2 py-1 rounded z-10">
          NEW
        </button>

       
        <img src={colors} alt="colors" className="w-full h-auto" />

        </div>
        <div className="shadow-lg sm:shadow-none p-6 bg-white flex flex-col gap-4">
         
          <div className="flex gap-4 text-sm">
            <p className="text-[#8fc2f2]">Google</p>
            <p className="text-[#737373]">Trending</p>
            <p className="text-[#737373]">New</p>
          </div>

        
          <div className="text-[#252b42]">
            <h4 className="text-xl font-semibold">Loudest a la Madison #1 (L'integral)</h4>
            <p className="text-[#737373] text-sm mt-2">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>
          </div>

         
          <div className="flex justify-between text-[#737373] text-sm">
            <div className="flex items-center gap-2">
              <AlarmClock className='text-[#3fa6f0]' size={16} />
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <ChartArea className='text-[#3f866d]' size={16} />
              <span>10 comments</span>
            </div>
          </div>
        </div>
      </section>



      <section className="relative max-w-md w-full">
       
       <button className="absolute top-2 left-2 bg-red-600 text-white font-bold px-2 py-1 rounded z-10">
         NEW
       </button>

      
       <img src={sea} alt="sea" className="w-full h-auto" />

      
       <div className="shadow-lg sm:shadow-none p-6 bg-white flex flex-col gap-4">
        
         <div className="flex gap-4 text-sm">
           <p className="text-[#8fc2f2]">Google</p>
           <p className="text-[#737373]">Trending</p>
           <p className="text-[#737373]">New</p>
         </div>

       
         <div className="text-[#252b42]">
           <h4 className="text-xl font-semibold">Loudest a la Madison #1 (L'integral)</h4>
           <p className="text-[#737373] text-sm mt-2">
             We focus on ergonomics and meeting you where you work. It's only a keystroke away.
           </p>
         </div>

        
         <div className="flex justify-between text-[#737373] text-sm">
           <div className="flex items-center gap-2">
             <AlarmClock className='text-[#3fa6f0]' size={16} />
             <span>22 April 2021</span>
           </div>
           <div className="flex items-center gap-2">
             <ChartArea className='text-[#3f866d]' size={16} />
             <span>10 comments</span>
           </div>
         </div>
       </div>
     </section>
     </div>

    </div>
  );
}

export default FeaturedPost;
