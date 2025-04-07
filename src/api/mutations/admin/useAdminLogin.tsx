import { getTrendHiveOpenApi } from '@/api/trendhive/api'
import { AdminLoginDto } from '@/api/trendhive/services/trend-hive/codegen'
import { useMutation } from '@tanstack/react-query'

export function useAdminLogin() {
  const mutation = useMutation({
    mutationFn: async (args: AdminLoginDto) => {
      try {
        const api = await getTrendHiveOpenApi()
        const adminCreds = api.trendHive.admin.adminControllerLogin({
          requestBody: args,
        })
        return adminCreds
      } catch (error: any) {
        throw new Error(error.message || 'Login failed')
      }
    },
    onSuccess: (data) => {
      console.log('Login successful', data)
    },
    onError: (error: Error) => {
      console.error('Login failed:', error.message)
    },
  })

  return mutation
}
