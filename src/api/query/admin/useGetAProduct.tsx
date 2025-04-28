import { getTrendHiveOpenApi } from '@/api/trendhive/api'
import { useQuery } from '@tanstack/react-query'

export function useGetAProduct(args: {id: number}) {
  return useQuery({
    queryKey: ['product-detail'], // Unique key for caching
    queryFn: async () => {
      try {
        const { id } = args;
        const api = await getTrendHiveOpenApi()
        // Assuming there's a method to get all categories
        const response = await api.trendHive.products.productsControllerFindOne({id: id})
        return response // Adjust based on your API response structure
      } catch (error: any) {
        throw new Error(error.message || 'Fetching categories failed')
      }
    },
  })
}
