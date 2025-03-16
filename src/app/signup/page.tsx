'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignup } from '@/api/mutations/useSignup'
import { useRouter } from 'next/navigation'
import { UserType } from '@/lib/types'
import { toast } from 'sonner'

const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  )

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  const signup = useSignup()
  const router = useRouter()

  const onSubmit = async (data: UserType) => {
    try {
      const res = await signup.mutateAsync(data)
      console.log(res)

      toast(res.message)
      if (!res.success) return
      console.log(res)
      toast.error(res.message)
      router.push(`/confirm-email?userId=${res.userId}`);

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="min-w-full h-full  flex flex-col justify-center items-center overflow-y-scroll">
      <div className="px-10 min-w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl text-[#5F6A48] ">SIGN UP</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="text-md text-[#5F6A48] ">Name</Label>
            <Input
              {...register('name')}
              className="rounded-none border-[#5F6A48]"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label className="text-md text-[#5F6A48]">Email</Label>
            <Input
              type="email"
              {...register('email')}
              className="rounded-none border-[#5F6A48]"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label className="text-md text-[#5F6A48]">Phone</Label>
            <Input
              type="phoneNumber"
              {...register('phoneNumber')}
              className="rounded-none border-[#5F6A48]"
              placeholder="Enter you phone."
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <Label className="text-md text-[#5F6A48]">Password</Label>
            <Input
              type="password"
              {...register('password')}
              className="rounded-none border-[#5F6A48]"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <Label className="text-md text-[#5F6A48]">Confirm Password</Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              className="rounded-none border-[#5F6A48]"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#5F6A48] text-white rounded-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  )
}
