'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'

const FeaturedProducts = () => {
  const images = [
    '/images/home/featured/1.png',
    '/images/home/featured/2.png',
    '/images/home/featured/3.png',
    '/images/home/featured/4.png',
    '/images/home/featured/5.png',
    '/images/home/featured/2.png',
    '/images/home/featured/3.png',
    '/images/home/featured/1.png',
    '/images/home/featured/1.png',
    '/images/home/featured/2.png',
    '/images/home/featured/3.png',
    '/images/home/featured/1.png',
    '/images/home/featured/1.png',
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const getItemsPerPage = useCallback(() => {
    if (typeof window === 'undefined') return 3
    const width = window.innerWidth
    if (width < 640) return 1
    if (width < 768) return 2
    if (width < 1024) return 3
    if (width < 1280) return 4
    return 5
  }, [])

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout // Local variable for timeout

    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage())
      setCurrentPage(0)
    }

    updateItemsPerPage() // Initial call
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateItemsPerPage, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [getItemsPerPage])

  const totalPages = Math.ceil(images.length / itemsPerPage)
  const paginatedImages = images.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page)
    }
  }

  const getPaginationItems = () => {
    const items = []
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
    const maxButtons = isMobile ? 5 : totalPages

    if (totalPages <= maxButtons) {
      for (let i = 0; i < totalPages; i++) {
        items.push(i)
      }
    } else if (isMobile) {
      const startPages = [0, 1]
      const endPages = [totalPages - 2, totalPages - 1]
      const currentRange = currentPage <= 1 ? 2 : currentPage >= totalPages - 2 ? totalPages - 3 : currentPage

      items.push(...startPages)
      if (currentRange > 2) items.push('...')
      if (currentRange >= 2 && currentRange <= totalPages - 3) items.push(currentRange)
      if (currentRange < totalPages - 3) items.push('...')
      items.push(...endPages)
    } else {
      for (let i = 0; i < totalPages; i++) {
        items.push(i)
      }
    }

    return items
  }

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
      <h2 className="text-[#5F6A48] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal mb-6 sm:mb-8 md:mb-10 font-[Agatho] text-center uppercase tracking-wide">
        Our Featured Abayas
      </h2>

      {/* Carousel Section */}
      <div className="flex justify-center items-stretch gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-hidden">
        {paginatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-1 min-w-[14rem] sm:min-w-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2 sm:p-3"
          >
            <Card className="rounded-none border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="relative w-full aspect-[3/4] p-0">
                <div className="relative w-full h-full">
                  <Image
                    alt={`Featured Product ${index + 1}`}
                    src={src}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <Button
                  type="button"
                  className="bg-[#5F6A48] w-[85%] text-white rounded-none text-sm sm:text-base md:text-lg font-normal px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 font-[Agatho] hover:bg-[#4a5538] transition-all duration-300"
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 md:mt-10 gap-2 sm:gap-3 px-2 max-w-full">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`flex-shrink-0 p-2 sm:p-3 rounded-full transition-colors duration-200 ${
              currentPage === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#5F6A48] hover:bg-[#5f6a481a]'
            }`}
            aria-label="Previous page"
          >
            <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 min-w-0">
            {getPaginationItems().map((item, index) =>
              typeof item === 'number' ? (
                <button
                  key={index}
                  onClick={() => handlePageChange(item)}
                  className={`flex-shrink-0 px-2 sm:px-3 py-1 rounded-full font-[Agatho] text-xs sm:text-sm md:text-base transition-all duration-200 ${
                    item === currentPage
                      ? 'bg-[#5F6A48] text-white shadow-md'
                      : 'text-[#5F6A48] hover:bg-[#5f6a481a]'
                  }`}
                  aria-label={`Page ${item + 1}`}
                  aria-current={item === currentPage ? 'page' : undefined}
                >
                  {item + 1}
                </button>
              ) : (
                <span
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-3 py-1 text-xs sm:text-sm md:text-base text-[#5F6A48] font-[Agatho]"
                >
                  ...
                </span>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className={`flex-shrink-0 p-2 sm:p-3 rounded-full transition-colors duration-200 ${
              currentPage === totalPages - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#5F6A48] hover:bg-[#5f6a481a]'
            }`}
            aria-label="Next page"
          >
            <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts