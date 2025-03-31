import React from 'react'

const LogoBanner = () => {
  return (
    <div className="bg-[#5f6a48b0] flex justify-center items-center w-full h-[20rem] xs:h-[24rem] sm:h-[28rem] md:h-[30rem] lg:h-[34rem]">
      <div className="border-4 border-[#E6DDD8] relative flex justify-center items-center w-[95%] xs:w-[92%]  h-[85%] sm:h-[87%] md:h-[89%] opacity-65">
        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 z-50 px-4 sm:px-6">
          {/* Main Heading */}
          <h2 className="font-[Agatho] font-normal text-[1.25rem] xs:text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.125rem] tracking-[0.1em] text-center uppercase text-white opacity-100 max-w-[90%] sm:max-w-[85%]">
            Explore our latest collections
          </h2>

          {/* Subheading */}
          <p className="font-[Agatho] font-normal text-sm xs:text-base sm:text-lg md:text-xl lg:text-[1.125rem] leading-tight tracking-[0.1em] text-center uppercase text-white opacity-100 max-w-[95%] sm:max-w-[80%] md:max-w-[70%]">
            Discover the newest trends and timeless pieces that will elevate your style.
          </p>

          {/* CTA */}
          <p className="font-[Agatho] font-normal text-base xs:text-lg sm:text-xl md:text-[1.75rem] lg:text-[1.875rem] leading-tight tracking-[0.1em] text-center text-white underline opacity-100 cursor-pointer hover:text-opacity-80 transition-opacity">
            SHOP NOW
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogoBanner
