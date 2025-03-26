'use client'
import PageLayout from '@/components/pageLayout/PageLayout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CollectionSlide } from './CollectionsSlide'
import LogoBanner from './LogoBanner'
import FeaturedProducts from './FeaturedProducts'

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
      <div className="w-full h-[34rem] relative md:h-[40rem] bg-[#E6DDD8]">
        <Image src="/images/home/1.png" fill alt="banner" className="object-cover" />

        {/* Main Heading */}
        <p className="z-50 absolute bottom-[12.5rem] left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[4.0625rem] leading-[1.375rem] tracking-[0.1em] text-center text-white">
          Elegant Floral Abaya
        </p>

        {/* Subheading */}
        <p className="z-50 absolute bottom-[9.5rem] left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[1.375rem] leading-[1.375rem] tracking-[0.1em] text-center text-white">
          Timeless beauty in every thread.
        </p>

        {/* CTA */}
        <p className="z-50 absolute bottom-[5rem] underline left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[1.875rem] leading-[1.375rem] tracking-[0.1em] text-center text-white">
          SHOP NOW
        </p>
      </div>
      <CollectionSlide />
      <LogoBanner />
      <FeaturedProducts />
    </PageLayout>
  )
}

export default Home
