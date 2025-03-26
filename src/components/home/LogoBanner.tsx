import React from 'react'

const LogoBanner = () => {
  return (
    <div className="bg-[#5f6a48b0] flex justify-center items-center w-full h-[30rem]">
      <div className="border-4 border-[#E6DDD8] relative flex justify-center items-center w-[97%] h-[89%] opacity-65">
        {/* Main Heading */}
        <p className="z-50 absolute bottom-[12rem] left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[2.125rem] tracking-[0.1em] text-center uppercase opacity-100">
          Explore our latest collections
        </p>

        {/* Subheading */}
        <p className="z-50 absolute bottom-[9.5rem] left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[1.125rem] leading-[1.375rem] tracking-[0.1em] text-center uppercase opacity-100">
          Discover the newest trends and timeless pieces that will elevate your style.
        </p>

        {/* CTA */}
        <p className="z-50 absolute bottom-[5rem] underline left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[1.875rem] leading-[1.375rem] tracking-[0.1em] text-center opacity-100">
          SHOP NOW
        </p>
      </div>
    </div>
  )
}

export default LogoBanner
