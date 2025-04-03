'use client'
import React, { useState } from 'react'
import PageLayout from '@/components/pageLayout/PageLayout'
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const colors = [
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white' },
    { name: 'Mauve', value: 'mauve' },
    { name: 'Emerald', value: 'emerald' },
    { name: 'Charcoal', value: 'charcoal' },
    { name: 'Sage', value: 'sage' },
  ]

  const products: Product[] = [
    {
      id: 1,
      name: 'Criss Cross Hijab Undercap',
      price: 65.00,
      originalPrice: 85.00,
      image: '/images/product_list/1.png'
    },
    {
        id: 2,
        name: 'Criss Cross Hijab Undercap',
        price: 65.00,
        originalPrice: 85.00,
        image: '/images/product_list/2.png'
      },
      {
        id: 3,
        name: 'Criss Cross Hijab Undercap',
        price: 65.00,
        originalPrice: 85.00,
        image: '/images/product_list/3.png'
      },
      {
        id: 4,
        name: 'Criss Cross Hijab Undercap',
        price: 65.00,
        originalPrice: 85.00,
        image: '/images/product_list/4.png'
      },
      {
        id: 5,
        name: 'Criss Cross Hijab Undercap',
        price: 65.00,
        originalPrice: 85.00,
        image: '/images/product_list/5.png'
      },
      {
        id: 6,
        name: 'Criss Cross Hijab Undercap',
        price: 65.00,
        originalPrice: 85.00,
        image: '/images/product_list/6.png'
      },
    // Add more products here
  ]

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-light text-center mb-8">TREND HIVE</h1>
        
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Availability Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Availability</h3>
                {/* Add availability filters here */}
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Price</h3>
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="text-sm text-gray-600">
                  £{priceRange[0]} - £{priceRange[1]}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Color</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color.value} className="flex items-center">
                      <Checkbox
                        id={`color-${color.value}`}
                        checked={selectedColors.includes(color.value)}
                        onCheckedChange={() => toggleColor(color.value)}
                      />
                      <label
                        htmlFor={`color-${color.value}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {color.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                {products.length} Products
              </div>
              <select className="border rounded-md px-2 py-1">
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
              <Link href={`/products/${product.id}`}>
                <div key={product.id} className="group relative">
                  <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-none bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                    <button className="absolute bottom-20 w-[50%] left-1/2 transform -translate-x-1/2 bg-[#5F6A48] text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      VIEW
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                      <div className="flex gap-2">
                        <p className="text-sm text-red-600">£{product.price.toFixed(2)}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">
                            £{product.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ProductsPage
