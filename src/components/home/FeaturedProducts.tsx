import React, { useState } from 'react'
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
  const itemsPerPage = 5
  const totalPages = Math.ceil(images.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedImages = images.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="w-full">
      <p className="text-[#5F6A48] w-full text-4xl font-normal py-10 font-[Agatho] text-center uppercase">
        Our Featured Abayas
      </p>

      {/* Carousel Section */}
      <div className="flex justify-center overflow-hidden">
        {paginatedImages.map((data, index) => (
          <div key={index} className="md:basis-1/5 lg:basis-1/5 p-2">
            <Card className="rounded-none p-0">
              <CardContent className="relative w-full aspect-square flex items-center justify-center p-0">
                <div className="relative w-full p-0 h-96">
                  <Image alt="Featured Product" src={data} fill className="object-center" />
                </div>

                <Button
                  type="submit"
                  className="bg-[#5F6A48] w-[90%] text-white rounded-none text-md font-normal px-9 bottom-5 font-[Agatho] absolute z-10"
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className={`px-2 py-1 cursor-pointer ${currentPage === 0 ? 'text-gray-400' : 'text-black'}`}
        >
          <IoIosArrowBack />
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`px-3 py-1 rounded-full font-[Agatho] cursor-pointer ${
              pageIndex === currentPage ? 'bg-[#5F6A48] text-white' : 'text-black'
            }`}
            onClick={() => handlePageChange(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className={`px-2 py-1 cursor-pointer ${currentPage === totalPages - 1 ? 'text-gray-400' : 'text-black'}`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}

export default FeaturedProducts
