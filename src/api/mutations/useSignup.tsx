import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getTrendHiveOpenApi } from '../trendhive/api'
import { CreateUserDto } from '../trendhive/services/trend-hive/codegen'

export function useSignup() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateUserDto) => {
      const api = await getTrendHiveOpenApi()
      const res = api.trendHive.auth.authControllerSignup({
        requestBody: data
      })
      return res
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.error('Signup error:', error)
    },
  })
}
