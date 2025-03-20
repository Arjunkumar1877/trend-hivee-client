import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-[#E5DFD9] py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#5C624A]">Sign up to our Newsletter</h3>
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Enter your email"
              className="w-full rounded-none md:w-64 border-1 border-[#5C624A]"
            />
            <Button className="bg-[#5C624A] rounded-none text-white">SUBSCRIBE</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <ul className="space-y-2 text-md font-medium">
              <li className="text-[#5C624A]">About Us</li>
              <li className="text-[#5C624A]">Terms & Conditions</li>
              <li className="text-[#5C624A]">Privacy Policy</li>
              <li className="text-[#5C624A]">Contact Us</li>
              <li className="text-[#5C624A]">FAQ</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-md font-medium">
              <li className="text-[#5C624A]">Payment Methods</li>
              <li className="text-[#5C624A]">Voucher Information</li>
              <li className="text-[#5C624A]">Returns Policy</li>
              <li className="text-[#5C624A]">Track Order</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Image width={30} height={30} src="/logos/logo.svg" alt="Logo" className="h-24" />
        </div>
      </div>

      <div className="mt-12 border-t pt-8 text-center">
        <div className="flex justify-center space-x-5 mb-6">
          <Image width={30} height={30} src="/logos/visa.svg" alt="Visa" />
          <Image width={30} height={30} src="/logos/master-card.svg" alt="MasterCard" />
          <Image width={30} height={30} src="/logos/maestro.svg" alt="Maestro" />
          <Image width={30} height={30} src="/logos/g-pay.svg" alt="Google Pay" />
          <Image width={30} height={30} src="/logos/apple.svg" alt="Apple Pay" />
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <FaInstagram className="text-[#5C624A]" size={24} />
          <FaTiktok className="text-[#5C624A]" size={24} />
          <FaPinterest className="text-[#5C624A]" size={24} />
        </div>

        <p className="text-sm text-[#5C624A]">© 2024 AMAL</p>
      </div>
    </div>
  )
}
