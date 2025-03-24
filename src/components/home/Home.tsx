'use client'
import PageLayout from '@/components/pageLayout/PageLayout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CollectionSlide } from './CollectionsSlide'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 80, // Adjust this value as needed
      behavior: 'smooth',
    })

    // Prevent scrolling back to the top
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

        <p className="z-50 absolute bottom-50 left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[65px] leading-[22px] tracking-[0.1em] text-center text-white">
          Elegant Floral Abaya
        </p>

        <p className="z-50 absolute bottom-38 left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[22px] leading-[22px] tracking-[0.1em] text-center text-white">
          Timeless beauty in every thread.
        </p>

        <p className="z-50 absolute bottom-20 underline left-1/2 transform -translate-x-1/2 font-[Agatho] font-normal text-[30px] leading-[22px] tracking-[0.1em] text-center text-white">
          SHOP NOW
        </p>
      </div>
      <CollectionSlide />
    </PageLayout>
  )
}

export default Home
