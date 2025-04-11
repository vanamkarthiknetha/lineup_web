import React, { useState } from 'react'

const EmailNButton = ({hero=true}) => {
    const [email, setEmail] = useState('')
    const handleClick = async ()=>{
      try{

      }catch(error){

      }finally{
        setEmail('')
      }
    }
  return (
    <div className="flex items-center rounded-md border border-white ">
          <input
            type="email"
            className={`w-[400px] h-[51px] px-4 text-white bg-transparent text-[20px] ${hero?"font-medium":''}  ${hero?"placeholder:text-gray-500":"placeholder:text-white"} focus:outline-none`}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email Address"
          />
          <button onClick={handleClick} className={`h-[51px] px-6 bg-white text-black ${hero?"font-semibold":''} text-[20px] leading-[100%] rounded-md`}>
            Join the waitlist
          </button>
        </div>
  )
}

export default EmailNButton
