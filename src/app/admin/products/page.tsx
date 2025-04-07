'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Plus, Search, Filter, Edit, Trash2, Package } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    description: 'A great product that you will love.',
    image: '/images/home/featured/1.png',
    category: 'Electronics',
    stock: 15,
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$39.99',
    description: 'High quality and reliable.',
    image: '/images/home/featured/2.png',
    category: 'Clothing',
    stock: 8,
    status: 'Low Stock',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$19.99',
    description: 'Affordable and functional.',
    image: '/images/home/featured/3.png',
    category: 'Accessories',
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$29.99',
    description: 'A great product that you will love.',
    image: '/images/home/featured/1.png',
    category: 'Electronics',
    stock: 20,
    status: 'In Stock',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$39.99',
    description: 'High quality and reliable.',
    image: '/images/home/featured/2.png',
    category: 'Clothing',
    stock: 12,
    status: 'In Stock',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$19.99',
    description: 'Affordable and functional.',
    image: '/images/home/featured/3.png',
    category: 'Accessories',
    stock: 5,
    status: 'Low Stock',
  },
]

export default function AdminProductsPage() {
  const router = useRouter()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800'
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800'
      case 'Out of Stock':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-gray-600" />
            <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
          </div>
          <div className="flex gap-3">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
              onClick={() => router.push('/admin/products/add-product')}
            >
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              onClick={() => router.push('/admin/products/add-category')}
            >
              <Plus className="h-4 w-4" />
              Add Category
            </Button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search products..." className="pl-10 w-full" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <Badge className={`absolute top-2 right-2 ${getStatusColor(product.status)}`}>
                    {product.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <Badge variant="outline" className="text-sm">
                      Stock: {product.stock}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {product.category}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  onClick={() => router.push(`/admin/products/edit/${product.id}`)}
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white gap-2"
                  onClick={() => {
                    // Add delete confirmation logic here
                    console.log('Delete product:', product.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
