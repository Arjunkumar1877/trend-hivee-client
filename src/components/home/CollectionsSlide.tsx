import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'

export function CollectionSlide() {
  const images = [
    '/images/home/collections/1.png',
    '/images/home/collections/2.png',
    '/images/home/collections/3.png',
    '/images/home/collections/1.png',
    '/images/home/collections/1.png',
  ]
  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <p className="text-[#5F6A48] w-full  rounded-none text-md font-normal px-9  py-20 bottom-10 font-[Agatho] text-center uppercase">
        Discover your perfect style with amal. Elevate your wardrobe with our premium abayas
      </p>
      <p className="text-[#5F6A48] w-full  rounded-none text-4xl font-normal px-9  py-10 bottom-10 font-[Agatho] text-center uppercase">
        shop by collections
      </p>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-none">
                  <CardContent className="flex aspect-square relative items-center justify-center p-0">
                    <Image alt="image" src={data} fill className="object-contain" />
                    {/* Text Overlay */}
                    <span className="text-2xl font-normal bottom-30 font-[Agatho] absolute z-10 ">
                      Lorem ipsum dolor
                    </span>
                    <Button
                      type="submit"
                      className="bg-[#5F6A48] text-white rounded-none text-md font-normal px-9 bottom-10 font-[Agatho] absolute z-10 "
                    >
                      View
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous and Next buttons positioned on both sides */}
        <CarouselPrevious size="lg" className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext size="lg" className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}
