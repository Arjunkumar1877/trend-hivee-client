'use client'
import React, { useState } from 'react'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import Link from 'next/link'
import Image from 'next/image'
import { IoHomeOutline } from "react-icons/io5";
import { FiUser, FiHeart, FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";

const Bottom = () => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)

  return (
    <>
    <Menubar  className="bg-[rgba(95,106,72,0.2)] rounded-none fixed  h-[3rem] w-full flex justify-between px-6 py-8 border-none backdrop-blur-md">

  {/* Logo Section */}
  <div className="text-white text-xl font-bold">
    Logo
  </div>

  {/* Navigation Links */}
  <div className="gap-10 hidden md:flex">
    {[
      { label: 'Home', href: '/' },
      { label: 'New Arrival', href: '/newarrival' },
      { label: 'Trending', href: '/trending' },
      { label: 'About Us', href: '/aboutus' },
      { label: 'Contact Us', href: '/contactus' },
      { label: 'Login', href: '/login' },
      { label: 'Signup', href: '/signup' },
    ].map((item) => (
      <MenubarMenu key={item.href}>
        <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
          {item.label}
        </Link>
      </MenubarMenu>
    ))}
  </div>

  {/* Icons Section */}
  <div className="flex gap-4">
    <FiSearch className="text-white hover:text-gray-300 cursor-pointer hidden md:block"  />
    <FiUser className="text-white hover:text-gray-300 cursor-pointer hidden md:block"  />
    <FiHeart className="text-white hover:text-gray-300 cursor-pointer hidden md:block"  />
    <FiShoppingCart className="text-white hover:text-gray-300 cursor-pointer hidden md:block"  />

    <FiMenu onClick={()=> setShowSideNav(!showSideNav)} className="text-white hover:text-gray-300 cursor-pointer md:hidden"  />
  </div>
</Menubar>


{/* // sidenavbar */}
{
  showSideNav && (
    <Menubar className="bg-[rgba(95,106,72,0.2)] rounded-none fixed bottom-0 left-0 h-[81%] w-[250px] flex flex-col items-start px-6 py-8 border-none backdrop-blur-md">
      {/* Logo Section */}

      {/* Navigation Links */}
      <div className="flex flex-col gap-6">
        {[
          { label: 'Home', href: '/' },
          { label: 'New Arrival', href: '/newarrival' },
          { label: 'Trending', href: '/trending' },
          { label: 'About Us', href: '/aboutus' },
          { label: 'Contact Us', href: '/contactus' },
          { label: 'Login', href: '/login' },
          { label: 'Signup', href: '/signup' },
        ].map((item) => (
          <MenubarMenu key={item.href}>
            <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
              {item.label}
            </Link>
          </MenubarMenu>
        ))}
      </div>

      {/* Icons Section */}
      <div className="flex gap-6 mt-auto">
        {[FiSearch, FiUser, FiHeart, FiShoppingCart].map((Icon, index) => (
          <Icon key={index} size="1.5rem" className="text-white hover:text-gray-300 cursor-pointer" />
        ))}
      </div>
    </Menubar>
  )
}
</>
  )
}

export default Bottom
