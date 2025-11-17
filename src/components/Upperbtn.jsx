import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Upperbtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className=' w-[215px] md:w-[250px] aspect-square bg-[#445626] rounded-full flex items-center justify-center cursor-pointer z-40 transition-all duration-300 ease-in-out active:bg-[#52682D]'>
      <ChevronUp color='#96B85D' size={126} />
    </div>
  )
}

export default Upperbtn
