import { getTrendHiveOpenApi } from '@/api/trendhive/api'
import { CreateCategoryDto } from '@/api/trendhive/services/trend-hive/codegen'
import { useMutation } from '@tanstack/react-query'

export function useAddCategory() {
  const mutation = useMutation({
    mutationFn: async (args: CreateCategoryDto) => {
      try {
        const api = await getTrendHiveOpenApi()
        const category = await api.trendHive.categories.categoriesControllerCreate({
          requestBody: args,
        })
        return category
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
