'use client'
import { useState, useEffect } from 'react'
import { useResendConfirmationEmail } from '@/api/mutations/useResendConfirmationEmail'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export default function ConfirmEmailPage() {
  const resendEmail = useResendConfirmationEmail()
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId') || ''

  const [isResendDisabled, setIsResendDisabled] = useState(false)
  const [timer, setTimer] = useState(0)
  const [lastResendTime, setLastResendTime] = useState<number | null>(null)

  useEffect(() => {
    if (lastResendTime) {
      const interval = setInterval(() => {
        const currentTime = Date.now()
        const remainingTime = Math.max(0, 300000 - (currentTime - lastResendTime))
        setTimer(remainingTime)

        if (remainingTime === 0) {
          clearInterval(interval)
          setIsResendDisabled(false)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [lastResendTime])

  const handleResendConfirmationEmail = async () => {
    setIsResendDisabled(true)
    setLastResendTime(Date.now())

    const res = await resendEmail.mutateAsync({ id: userId })
    toast(res.message)
  }

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = Math.floor((milliseconds % 60000) / 1000)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="min-w-full h-full flex flex-col justify-center items-center p-10">
      <div className="min-w-[10rem] px-10 flex flex-col justify-center items-center gap-3 border-1 p-5 shadow-lg rounded-lg">
        <h1 className="text-3xl text-[#5F6A48]">Email Confirmation</h1>

        <p className="text-md text-[#5F6A48] text-center mt-4">
          A confirmation email has been sent to the email address you provided. Please check your
          inbox (or spam folder) for the confirmation email.
        </p>

        <p className="text-md text-[#5F6A48] text-center mt-4">
          If you haven't received the email, you can click the button below to resend the
          confirmation email.
        </p>

        <Button
          type="button"
          className="max-w-[10rem] bg-[#5F6A48] text-white rounded-none mt-6 cursor-pointer"
          onClick={handleResendConfirmationEmail}
          disabled={isResendDisabled}
        >
          {isResendDisabled ? `Wait ${formatTime(timer)}` : 'Resend Email'}
        </Button>
      </div>
    </div>
  )
}
