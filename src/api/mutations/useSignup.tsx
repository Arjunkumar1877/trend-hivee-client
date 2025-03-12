import api from '@/lib/axiosInstance'
import { UserType } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useSignup() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (data: UserType) => {
      const res = await api.post('/auth/signup', data)
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
