'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    description: 'A great product that you will love.',
    image: '/images/home/featured/1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$39.99',
    description: 'High quality and reliable.',
    image: '/images/home/featured/2.png',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$19.99',
    description: 'Affordable and functional.',
    image: '/images/home/featured/3.png',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    description: 'A great product that you will love.',
    image: '/images/home/featured/1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$39.99',
    description: 'High quality and reliable.',
    image: '/images/home/featured/2.png',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$19.99',
    description: 'Affordable and functional.',
    image: '/images/home/featured/3.png',
  },
]

export default function AdminProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button className="bg-green-600 text-white">Add Product</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg rounded-lg">
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <span className="text-lg font-bold">{product.price}</span>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 text-white">Edit</Button>
              <Button className="bg-red-600 text-white ml-4">Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
