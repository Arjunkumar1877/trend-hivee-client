import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axiosInstance';

export function useAdminLogin() {
  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      try {
        const adminCreds = api.post('/admin/login', {
            email,
            password
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
