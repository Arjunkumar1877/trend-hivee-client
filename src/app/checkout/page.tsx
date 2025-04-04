'use client'
import React, { useState } from 'react'
import PageLayout from '@/components/pageLayout/PageLayout'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"

const CheckoutPage = () => {
  const [useSameAddress, setUseSameAddress] = useState(true)

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* Contact Section */}
            <div>
              <h2 className="text-xl mb-4">Contact</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
              />
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="text-xl mb-4">Delivery</h2>
              <div className="space-y-4">
                <select className="w-full p-3 border rounded-md">
                  <option value="">Country/Region</option>
                  <option value="UK">United Kingdom</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-3 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-3 border rounded-md"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border rounded-md"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="p-3 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="p-3 border rounded-md"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border rounded-md"
                />

                <div className="flex items-center gap-2">
                  <Checkbox id="save-info" />
                  <label htmlFor="save-info" className="text-sm text-gray-600">
                    Save this information for next time
                  </label>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div>
              <h2 className="text-xl mb-4">Shipping method</h2>
              <div className="p-3 border rounded-md bg-gray-50">
                Standard Delivery (3-5 working days)
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h2 className="text-xl mb-4">Payment</h2>
              <p className="text-sm text-gray-600 mb-4">
                All transactions are secure and encrypted
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-xl mb-4">Billing address</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-3 border rounded-md">
                  <input
                    type="radio"
                    id="same-address"
                    name="billing"
                    checked={useSameAddress}
                    onChange={() => setUseSameAddress(true)}
                  />
                  <label htmlFor="same-address">Same as shipping address</label>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-md">
                  <input
                    type="radio"
                    id="different-address"
                    name="billing"
                    checked={!useSameAddress}
                    onChange={() => setUseSameAddress(false)}
                  />
                  <label htmlFor="different-address">
                    Use a different billing address
                  </label>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#5F6A48] text-white py-4 rounded-md">
              CHECKOUT
            </button>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Product Summary */}
              <div className="border-b pb-6 mb-6">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20">
                    <img
                      src="/images/product1.jpg"
                      alt="Product"
                      className="object-cover rounded"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                      1
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm">Anoh Luxe Dress - Onyx Black</h3>
                    <p className="text-sm text-gray-600">S</p>
                  </div>
                  <p className="font-medium">£20.00</p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium">ORDER SUMMARY</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>£60.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span>£60.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping charge</span>
                    <span>£3.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>£60.00</span>
                  </div>
                  <div className="flex justify-between font-medium pt-4 border-t">
                    <span>GRAND TOTAL</span>
                    <span>£60.00</span>
                  </div>
                </div>

                <p className="text-sm text-center text-gray-600">
                  100% Safe and Secure Checkout.
                </p>

                {/* Payment Methods */}
                <div className="flex justify-center gap-2 pt-4">
                  <img src="/visa.svg" alt="Visa" className="h-8" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
                  <img src="/maestro.svg" alt="Maestro" className="h-8" />
                  <img src="/amex.svg" alt="American Express" className="h-8" />
                  <img src="/gpay.svg" alt="Google Pay" className="h-8" />
                  <img src="/applepay.svg" alt="Apple Pay" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CheckoutPage 