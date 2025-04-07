import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getApi } from '../trendhive/api'

export function useCheckUserIsVerified() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (input: { firebaseId: string }) => {
      const { firebaseId } = input
      const api = await getApi()
      const res = await api.trendHive.auth.authControllerCheckUser({
        firebaseId: firebaseId,
      })
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
