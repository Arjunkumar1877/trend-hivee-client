import api from '@/lib/axiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useResendConfirmationEmail() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (args: { id: string }) => {
      const res = await api.post(`/auth/resend-confirm-email/${args.id}`)
      return res.data
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['resend-email'] })
    },
    onError: (error) => {
      console.error('Editing user details error:', error)
    },
  })
}
