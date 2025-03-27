'use client'
import Navbar from '@/components/adminHeader/Navbar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</div>
    </div>
  )
}
