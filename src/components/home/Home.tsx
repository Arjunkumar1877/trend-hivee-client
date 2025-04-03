'use client'
import PageLayout from '@/components/pageLayout/PageLayout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CollectionSlide } from './CollectionsSlide'
import LogoBanner from './LogoBanner'
import FeaturedProducts from './FeaturedProducts'
import Spacer from '../ui/Spacer'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth',
    })

    const handleScroll = () => {
      if (window.scrollY < 80) {
        window.scrollTo(0, 80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PageLayout footer>
      {/* Hero Section */}
      <div className="w-full h-[20rem] xs:h-[24rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] relative bg-[#E6DDD8]">
        <Image
          src="/images/home/1.png"
          fill
          alt="banner"
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          {/* Main Heading */}
          <h1 className="font-[Agatho] font-normal text-[1.5rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[4.0625rem] leading-tight tracking-[0.1em] text-center text-white px-4 sm:px-6 max-w-[90%] sm:max-w-4xl mb-2 sm:mb-3 md:mb-4">
            Elegant Floral Abaya
          </h1>

          {/* Subheading */}
          <p className="font-[Agatho] font-normal text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.375rem] leading-tight tracking-[0.1em] text-center text-white px-4 sm:px-6 max-w-[85%] sm:max-w-2xl mb-3 sm:mb-4 md:mb-5">
            Timeless beauty in every thread.
          </p>

          {/* CTA */}
          <p className="font-[Agatho] font-normal text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.875rem] leading-tight tracking-[0.1em] text-center text-white underline cursor-pointer hover:text-opacity-80 transition-opacity px-4 sm:px-6">
            SHOP NOW
          </p>
        </div>
      </div>

      {/* Other Components with Spacing */}
      <Spacer size="2rem" className="sm:size-3rem md:size-4rem" />
      <CollectionSlide />
      <Spacer size="2rem" className="sm:size-3rem md:size-4rem" />
      <LogoBanner />
      <Spacer size="2rem" className="sm:size-3rem md:size-4rem" />
      <FeaturedProducts />
    </PageLayout>
  )
}

export default Home
