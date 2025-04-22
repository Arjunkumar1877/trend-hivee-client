import { getTrendHiveOpenApi } from '@/api/trendhive/api'
import { useQuery } from '@tanstack/react-query'

export function useGetAllProducts() {
  return useQuery({
    queryKey: ['products'], // Unique key for caching
    queryFn: async () => {
      try {
        const api = await getTrendHiveOpenApi()
        // Assuming there's a method to get all products
        const response = await api.trendHive.products.productsControllerFindAll()
        return response // Adjust based on your API response structure
      } catch (error: any) {
        throw new Error(error.message || 'Fetching products failed')
      }
    },
  })
}
