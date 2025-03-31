import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getTrendHiveOpenApi } from '../trendhive/api';

export function useResendConfirmationEmail() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (args: { id: string }) => {
      const { id } = args;
      const api = await getTrendHiveOpenApi()
      const res = await api.trendHive.auth.authControllerResendConfirmationEmail({
        id: id
      })
      return res
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['resend-email'] })
    },
    onError: (error) => {
      console.error('Editing user details error:', error)
    },
  })
}
