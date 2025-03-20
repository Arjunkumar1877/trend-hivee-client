'use client'
import PageLayout from '@/components/pageLayout/PageLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { firebaseAuth } from '@/lib/firebase'
import { sendPasswordResetEmail } from '@firebase/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-menubar'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const ForgetPassword = () => {
  const forgetPassSchema = z.object({
    email: z.string().email(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgetPassSchema),
  })

  const onSubmit = async (value: { email: string }) => {
    if (!value.email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(firebaseAuth, value.email);
      alert("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(error);
    }
  }
  return (
    <PageLayout footer>

    <div className="min-w-full h-full flex flex-col justify-center items-center">
      <div className="px-10 min-w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl text-[#5F6A48]">User Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
          <div>
            <Label className="text-md text-[#5F6A48]">Email</Label>
            <Input
              className="rounded-none border-[#5F6A48]"
              {...register('email')}
              placeholder="Enter your email.."
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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

export default ForgetPassword
