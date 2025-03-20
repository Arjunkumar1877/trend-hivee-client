import api from '@/lib/axiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCheckUserIsVerified() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (input: { firebaseId: string }) => {
      const { firebaseId } = input
      const res = await api.get(`/auth/check-user/${firebaseId}`)
      return res.data
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.error('Signup error:', error)
    },
  })
}
