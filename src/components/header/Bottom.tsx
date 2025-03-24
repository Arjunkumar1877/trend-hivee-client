'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Menubar, MenubarMenu } from '@/components/ui/menubar'
import Link from 'next/link'
import { FiUser, FiHeart, FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

const Bottom = () => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)
  const sideNavRef = useRef<HTMLDivElement>(null)
  const menuIconRef = useRef<HTMLDivElement>(null)

  const pathName = usePathname()
  const home = pathName === '/'

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(e.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(e.target as Node)
      ) {
        setShowSideNav(false)
      }
    }

    if (showSideNav) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSideNav])

  return (
    <>
      {/* Top Navbar */}
      <Menubar
        className={`bg-[${home ? 'rgba(95,106,72,0.2)' : '#5F6A48'}] rounded-none fixed h-[1rem] w-full flex justify-between px-6 py-6.5 border-none backdrop-blur-md`}
      >
        {/* Logo Section */}
        <div className="text-white text-xl font-bold">Logo</div>

        {/* Desktop Navigation Links */}
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
          <FiSearch className="text-white hover:text-gray-300 cursor-pointer hidden md:block" />
          <FiUser className="text-white hover:text-gray-300 cursor-pointer hidden md:block" />
          <FiHeart className="text-white hover:text-gray-300 cursor-pointer hidden md:block" />
          <FiShoppingCart className="text-white hover:text-gray-300 cursor-pointer hidden md:block" />

          {/* Menu Icon with ref */}
          <div ref={menuIconRef}>
            <FiMenu
              onClick={() => setShowSideNav((prev) => !prev)}
              className="text-white hover:text-gray-300 cursor-pointer md:hidden"
            />
          </div>
        </div>
      </Menubar>

      {/* Side Navbar */}
      {showSideNav && (
        <Menubar
          ref={sideNavRef}
          className={`bg-[${home ? 'rgba(95,106,72,0.2)' : '#5F6A48'}] rounded-none fixed bottom-0 left-0 h-[82.5%] w-[250px] flex flex-col items-start px-6 py-8 border-none backdrop-blur-md`}
        >
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
              <Icon
                key={index}
                size="1.5rem"
                className="text-white hover:text-gray-300 cursor-pointer"
              />
            ))}
          </div>
        </Menubar>
      )}
    </>
  )
}

export default Bottom
