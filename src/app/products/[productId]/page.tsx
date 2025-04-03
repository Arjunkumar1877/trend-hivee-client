'use client'
import React, { useState } from 'react'
import PageLayout from '@/components/pageLayout/PageLayout'
import { FiHeart } from 'react-icons/fi'
import { cn } from '@/lib/utils'

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const sizes = ['52', '54', '56', '58']

  return (
    <PageLayout footer>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src='/images/product_list/1.png'
              alt="Bandana Hijab Undercap"
              className="w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase text-gray-500">ABAYA</p>
              <h1 className="text-2xl font-light mt-2">BANDANA HIJAB UNDERCAP</h1>
              <p className="text-xl mt-4">£8.00</p>
            </div>

            <p className="text-gray-600">
              Made from an ultra soft and breathable premium jersey fabric, these
              hijab undercaps are an essential to keep your Hijab in place. Designed
              for maximum comfort, these hijab caps work well with all of our hijabs.
            </p>

            {/* Size Selection */}
            <div>
              <p className="font-medium mb-3">SELECT SIZE</p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      'w-12 h-12 border border-gray-300 flex items-center justify-center',
                      selectedSize === size && 'border-[#5F6A48] border-2'
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="text-gray-600 underline text-sm mt-2">
                Want to know your size?
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#5F6A48] text-white px-8 py-3 flex-1">
                ADD TO CART
              </button>
              <button className="bg-gray-200 text-gray-800 px-8 py-3 flex gap-2 items-center">
                <FiHeart />
                ADD TO WISHLIST
              </button>
            </div>

            {/* Product Features */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex gap-3 items-center">
                <img src="/delivery-icon.svg" alt="Delivery" className="w-6 h-6" />
                <p className="text-sm">FREE DELIVERY ON ALL ORDERS OVER £100.00</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/returns-icon.svg" alt="Returns" className="w-6 h-6" />
                <p className="text-sm">QUICK AND EASY RETURNS</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/support-icon.svg" alt="Support" className="w-6 h-6" />
                <p className="text-sm">CONTACT OUR CUSTOMER CARE TEAM</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/brand-icon.svg" alt="Brand" className="w-6 h-6" />
                <p className="text-sm">DISCOVER MORE ABOUT THE BRAND</p>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4 border-t pt-6">
              <Accordion title="FABRIC & FIT">
                <p className="text-sm text-gray-600">
                  Regular fit, Full length sleeves, Lightweight fabric
                </p>
              </Accordion>
              <Accordion title="DESCRIPTION &DETAIL">
                <p className="text-sm text-gray-600">
                  Premium quality abaya with elegant design and comfortable fit. Features cross-stitch detailing on sleeves.
                </p>
              </Accordion>
              <Accordion title="MATERIAL & CARE ADVICE">
                <p className="text-sm text-gray-600">
                  100% Premium Cotton. Machine washable at 30°C. Do not tumble dry.
                </p>
              </Accordion>
              <Accordion title="DELIVERY AND RETURNS">
                <p className="text-sm text-gray-600">
                  Free standard delivery on orders over £100. Returns accepted within 14 days of delivery.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-light text-center mb-8">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Add related products here */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group relative">
                <div className="aspect-h-4 aspect-w-3 overflow-hidden">
                  <img
                    src={'/images/product_list/2.png'}
                    alt={`Related Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-20 w-[50%] left-1/2 transform -translate-x-1/2 bg-[#5F6A48] text-white px-6 py-2">
                    VIEW
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">Criss Cross Hijab Undercap</h3>
                  <p className="text-sm text-gray-900 mt-1">£65.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

// Accordion Component
const Accordion = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{title}</span>
        <span className="transform transition-transform">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  )
}

export default ProductDetails
