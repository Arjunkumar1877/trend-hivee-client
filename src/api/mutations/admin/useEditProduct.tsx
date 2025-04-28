import { getApi, getTrendHiveOpenApi } from '@/api/trendhive/api'
import { CreateProductDto, UpdateProductDto } from '@/api/trendhive/services/trend-hive/codegen'
import { useMutation } from '@tanstack/react-query'

export function useEditProduct() {
  const mutation = useMutation({
    mutationFn: async (args: { data: UpdateProductDto; id: number }) => {
      try {
        const api = await getTrendHiveOpenApi()
        const { id, data } = args
        const adminCreds = api.trendHive.products.productsControllerUpdate({
          id: id,
          requestBody: data,
        })
        return adminCreds
      } catch (error: any) {
        throw new Error(error.message || 'Adding product failed')
      }
    },
    onSuccess: (data) => {
      console.log('Adding product successful', data)
    },
    onError: (error: Error) => {
      console.error('Adding product failed:', error.message)
    },
  })

  return mutation
}
