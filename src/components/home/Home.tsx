'use client'
import PageLayout from '@/components/pageLayout/PageLayout'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    // Scroll down on initial load
    window.scrollTo({
      top: 80, // Adjust this value as needed
      behavior: 'smooth'
    });

    // Prevent scrolling back to the top
    const handleScroll = () => {
      if (window.scrollY < 80) {
        window.scrollTo(0, 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout footer>
      <div className='w-full h-[34rem] relative md:h-[40rem]'>
        <Image 
          src='/images/home/1.png'  
          fill 
          alt='banner' 
          className='object-cover'
        />
      </div>
    </PageLayout>
  )
}

export default Home
