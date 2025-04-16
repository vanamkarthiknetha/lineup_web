
import React from 'react'

const Cover = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden mt-20">
      {/* Background image */}
      <img 
        src="/cover/iPhone 16 Pro.png" 
        alt="Cover Photo" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
    </div>
  )
}

export default Cover

