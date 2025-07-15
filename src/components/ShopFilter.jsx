import { Grid2x2, Logs } from 'lucide-react'
import React, { useState } from 'react'

function ShopFilter() {
    const [filter, setFilter] = useState('Popularity');
    const [filterCount, setFilterCount] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      setFilter(filter);
    };
  return (
    <div className='flex flex-col items-center gap-y-4 py-10 sm:flex sm:flex-row sm:gap-100 '>
        <h6 className='text-[#737373] font-bold'>Showing all {filterCount} results</h6>
        <div className='flex flex-row gap-2 sm:items-center'>
            <span className='flex text-[#737373] font-bold'>Views: 
            </span>
            <button className='border-[#ececec] border-1 p-2 rounded'><Grid2x2 color='navy' size={10}/></button>
            <button className='border-[#ececec] border-1 p-2 rounded'><Logs size={10}/></button>
        </div>
        
      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-3 rounded"
        >
          <option value="popularity">Popularity</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
        <button
          type="submit"
          className="text-white bg-blue-500 px-4 py-2 rounded"
        >
          Filtrele
        </button>
      </form>
    </div>
  )
}

export default ShopFilter