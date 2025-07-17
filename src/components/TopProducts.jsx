import React from 'react';
import top1 from "../assets/topProducts/top1.jpg";
import top2 from "../assets/topProducts/top2.jpg";
import top3 from "../assets/topProducts/top3.jpg";

function TopProducts() {
  return (
  <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:h-auto gap-10 px-10 object-center">
  
      <div className="sm:h-[600px] w-1/3 relative">
                <img
                  src={top1}
                  alt="top1"
                  className=" w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-400/40 text-white p-6">
                  <h6 className="text-lg font-semibold">Top Product Of the Week</h6>
                  <button className="mt-2 px-4 py-2 border-2 border-white rounded">
                    EXPLORE ITEMS
                  </button>
                </div>
      </div>

  
      <div className="flex flex-col gap-10  sm:w-1/3   ">
                <div className="relative">
                  <img
                    src={top2}
                    alt="top2"
                    className="w-full  sm:h-[280px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-blue-400/40 text-white p-6">
                    <h6 className="text-lg font-semibold">Top Product Of the Week</h6>
                    <button className="mt-2 px-4 py-2 border-2 border-white rounded">
                      EXPLORE ITEMS
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={top3}
                    alt="top3"
                    className="w-full object-cover  sm:h-[280px]"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-blue-400/40 text-white p-6">
                    <h6 className="text-lg font-semibold">Top Product Of the Week</h6>
                    <button className="mt-2 px-4 py-2 border-2 border-white rounded">
                      EXPLORE ITEMS
                    </button>
                  </div>
                

      </div>
    </div>
  </div>
  );
}

export default TopProducts;
