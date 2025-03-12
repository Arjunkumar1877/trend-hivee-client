import React from 'react'
import Bottom from './Bottom'

function Navbar() {
  return (
    <div className="fixed top-0  w-full bg-white z-50 shadow-md">
      <div className="h-[50px] bg-[#E6DDD8]"></div>
      <div className="h-[40px] bg-[#FFFFFF] flex justify-center items-center p-1 text-[#5F6A48] font-semibold text-[14px]">
        <span className="text-cente">FREE DELIVERY ON ORDERS OVER Rs.1000</span>
      </div>
      <Bottom />
    </div>
  )
}

export default Navbar
