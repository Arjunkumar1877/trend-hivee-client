'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { EyeOff, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthControl } from '@/lib/control'
import PageLayout from '@/components/pageLayout/PageLayout'
import Spacer from '@/components/ui/Spacer'

const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)
  const authControl = useAuthControl()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: { email: string; password: string }) => {
    console.log(data)
  }

  return (
    <PageLayout footer>
      <div className="min-w-full h-full flex flex-col justify-center items-center">
        <div className="px-10 min-w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl text-[#5F6A48] ">SIGN IN</h1>
          <Spacer size="1.5rem" />

          <form onSubmit={handleSubmit(onSubmit)} className="">
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
            <Spacer size="1rem" />
            <div className="relative">
              <Label className="text-md text-[#5F6A48]">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="rounded-none border-[#5F6A48] pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <Spacer size="1.5rem" />

            <Button
              type="submit"
              className="w-full bg-[#5F6A48] text-white rounded-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging In...' : 'Login'}
            </Button>

            <Link className="text-sm font-bold text-[#5F6A48]" href="/forget-password">
              Forget password
            </Link>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
