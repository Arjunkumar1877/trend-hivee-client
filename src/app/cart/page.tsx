'use client'
import React from 'react'
import PageLayout from '@/components/pageLayout/PageLayout'
import { FiTrash2 } from 'react-icons/fi'

interface CartItem {
  id: number
  name: string
  color: string
  size: string
  price: number
  quantity: number
  image: string
}

const CartPage = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: 1,
      name: 'This is a sample text',
      color: 'Black',
      size: '56',
      price: 20.00,
      quantity: 1,
      image: '/images/product_list/1.png'
    },
    {
      id: 2,
      name: 'This is a sample text',
      color: 'Black',
      size: '56',
      price: 20.00,
      quantity: 1,
      image: '/images/product_list/2.png'
    },
    {
      id: 3,
      name: 'This is a sample text',
      color: 'Black',
      size: '56',
      price: 20.00,
      quantity: 1,
      image: '/images/product_list/3.png'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 0 // You can calculate discount here
  const grandTotal = subtotal - discount

  return (
    <PageLayout footer>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-light text-center mb-12">CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm">{item.name}</h3>
                      <p className="text-sm text-gray-600">Colour: {item.color}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 border-r"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border-l"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-medium">£{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">ORDER SUMMARY</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span>£{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium pt-4 border-t">
                  <span>GRAND TOTAL</span>
                  <span>£{grandTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Shipping, taxes, and discount codes calculated at checkout.
                </p>
                <button className="w-full bg-[#5F6A48] text-white py-3 rounded">
                  PROCEED TO CHECKOUT
                </button>
                <p className="text-sm text-center text-gray-600 mt-4">
                  100% Secure Checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CartPage 