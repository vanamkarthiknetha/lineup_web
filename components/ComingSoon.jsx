import React from 'react'
import EmailNButton from './EmailNButton'

const ComingSoon = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden ">
      {/* Background image */}
      <img 
        src="/Coming_soon.png" 
        alt="Coming Soon Background" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Content overlay */}
      <div className="absolute inset-x-0 top-16 flex flex-col items-center justify-center ">
        <h1 className=" font-semibold text-[100px]">App Coming Soon</h1>
          <div className="pt-16">
          <EmailNButton hero={false}/>
            </div>
      </div>
    </div>
  )
}

export default ComingSoon
