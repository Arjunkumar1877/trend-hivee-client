'use client'
import { Button } from '@/components/ui/button'

export default function ConfirmEmailPage() {
  return (
    <div className="min-w-full h-full flex flex-col justify-center items-center">
      <div className="px-10 min-w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl text-[#5F6A48]">Email Confirmation</h1>
        
        <p className="text-md text-[#5F6A48] text-center mt-4">
          A confirmation email has been sent to the email address you provided. Please check your inbox (or spam folder) for the confirmation email.
        </p>
        
        <p className="text-md text-[#5F6A48] text-center mt-4">
          If you haven't received the email, you can click the button below to resend the confirmation email.
        </p>

        {/* Resend Email Button */}
        <Button
          type="button"
          className="max-w-[10rem] bg-[#5F6A48] text-white rounded-none mt-6 cursor-pointer"
          onClick={() => {
            // Handle resend email logic here (e.g., call API or Firebase function to resend email)
            console.log('Resend email functionality triggered');
          }}
        >
          Resend Email
        </Button>
      </div>
    </div>
  )
}
