'use client'
import { Menubar, MenubarMenu } from '@/components/ui/menubar'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  return (
    <div className="fixed top-0  w-full bg-white z-50 shadow-md">
      <div className="h-[40px] bg-[#FFFFFF] flex justify-center items-center p-1 text-[#5F6A48] font-semibold text-[14px]"></div>
      <Bottom />
    </div>
  )
}

export default Navbar

const Bottom = () => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)
  const sideNavRef = useRef<HTMLDivElement>(null)
  const menuIconRef = useRef<HTMLDivElement>(null)

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
        className={`bg-[#5F6A48] rounded-none fixed h-[1rem] w-full flex justify-between px-6 py-6.5 border-none backdrop-blur-md`}
      >
        {/* Logo Section */}
        <div className="text-white text-xl font-bold">Logo</div>

        {/* Desktop Navigation Links */}
        <div className="gap-10 hidden md:flex">
          {[
            { label: 'Dashboard', href: '/admin/dashboard' },
            { label: 'products', href: '/admin/products' },
            { label: 'Orders', href: '/admin/orders' },
            { label: 'About Us', href: '/aboutus' },
            { label: 'Contact Us', href: '/contactus' },
            { label: 'Login', href: '/admin/login' },
            { label: 'Signup', href: '/signup' },
          ].map((item) => (
            <MenubarMenu key={item.href}>
              <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            </MenubarMenu>
          ))}
        </div>

        {/* Menu Icon with ref */}
        <div ref={menuIconRef}>
          <FiMenu
            onClick={() => setShowSideNav((prev) => !prev)}
            className="text-white hover:text-gray-300 cursor-pointer md:hidden"
          />
        </div>
      </Menubar>

      {/* Side Navbar */}
      {showSideNav && (
        <Menubar
          ref={sideNavRef}
          className={`bg-[#5F6A48] rounded-none fixed bottom-0 left-0 h-[87%] w-[250px] flex flex-col items-start px-6 py-8 border-none backdrop-blur-md`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            {[
              { label: 'Dashboard', href: '/admin/dashboard' },
              { label: 'products', href: '/admin/products' },
              { label: 'Orders', href: '/admin/orders' },
              { label: 'About Us', href: '/aboutus' },
              { label: 'Contact Us', href: '/contactus' },
              { label: 'Login', href: '/admin/login' },
              { label: 'Signup', href: '/signup' },
            ].map((item) => (
              <MenubarMenu key={item.href}>
                <Link href={item.href} className="text-white hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              </MenubarMenu>
            ))}
          </div>
        </Menubar>
      )}
    </>
  )
}
