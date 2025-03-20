import axios from 'axios'
import { toast } from 'sonner'
import { getFirebaseUserWithToken } from './firebase'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

api.interceptors.request.use(
  async (config) => {
    try {
      const { token } = await getFirebaseUserWithToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      console.error('Error fetching Firebase token:', error)
    }

    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error('Session expired. Please log in again.')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    toast.error(error.response?.data?.message || 'An error occurred')
    return Promise.reject(error)
  }
)

export default api
