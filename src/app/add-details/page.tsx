'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateUserDetails } from '@/api/mutations/useUpdateUserDetails'
import { UserAddress } from '@/lib/types'
import { useRouter, useSearchParams } from 'next/navigation'
import PageLayout from '@/components/pageLayout/PageLayout'

const profileSchema = z.object({
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(2, 'Address must be at least 2 characters'),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().min(5, 'ZIP code must be at least 5 characters'),
  country: z.string().min(2, 'Country must be included'),
  isDefault: z.boolean().optional(),
})

export default function UserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
  })

  const editDetails = useUpdateUserDetails()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  const onSubmit = async (data: UserAddress) => {
    try {
      console.log('Submitting data:', data)

      const res = await editDetails.mutateAsync({
        token,
        userDetails: data,
      })

      if (res) {
        console.log('Response:', res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageLayout footer>
      <div className="min-w-full h-full flex flex-col justify-center items-center">
        <div className="px-10 min-w-full flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl text-[#5F6A48]">User Profile</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
            {/* Phone Number */}
            <div>
              <Label className="text-md text-[#5F6A48]">Phone Number</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                type="text"
                {...register('phoneNumber')}
                placeholder="Your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <Label className="text-md text-[#5F6A48]">Country</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                type="text"
                {...register('country')}
                placeholder="Country"
              />
            </div>

            {/* Address */}
            <div>
              <Label className="text-md text-[#5F6A48]">Address</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                {...register('address')}
                placeholder="Street Address"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* City */}
            <div>
              <Label className="text-md text-[#5F6A48]">City</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                type="text"
                {...register('city')}
                placeholder="City"
              />
            </div>

            {/* State */}
            <div>
              <Label className="text-md text-[#5F6A48]">State</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                type="text"
                {...register('state')}
                placeholder="State"
              />
            </div>

            {/* ZIP Code */}
            <div>
              <Label className="text-md text-[#5F6A48]">ZIP Code</Label>
              <Input
                className="rounded-none border-[#5F6A48]"
                type="text"
                {...register('zipCode')}
                placeholder="ZIP Code"
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
            </div>

            {/* Default Address Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register('isDefault')} />
              <Label>Set as default address</Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#5F6A48] text-white rounded-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Profile'}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
