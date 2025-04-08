import { getTrendHiveOpenApi } from '@/api/trendhive/api'
import { CreateCategoryDto } from '@/api/trendhive/services/trend-hive/codegen'
import { useMutation } from '@tanstack/react-query'

export function useUploadAFile() {
  const mutation = useMutation({
    mutationFn: async (args: {
      formData: {
        file?: Blob
      }
      type?: string
    }) => {
      try {
        const { formData, type } = args
        const api = await getTrendHiveOpenApi()
        const category = await api.trendHive.app.appControllerUploadFile({
          formData: formData,
          type: type,
        })
        return category
      } catch (error: any) {
        throw new Error(error.message || 'Uploading file failed')
      }
    },
    onSuccess: (data) => {
      console.log('Uploading file successful', data)
    },
    onError: (error: Error) => {
      console.error('Uploading file failed:', error.message)
    },
  })

  return mutation
}

export function useUploadMultipleFiles() {
  const mutation = useMutation({
    mutationFn: async (args: {
      formData: {
        images?: Array<Blob>
      }
      type?: string
    }) => {
      try {
        const { formData, type } = args
        const api = await getTrendHiveOpenApi()
        const category = await api.trendHive.products.productsControllerUploadImages({
          formData: formData,
        })
        return category
      } catch (error: any) {
        throw new Error(error.message || 'Uploading files failed')
      }
    },
    onSuccess: (data) => {
      console.log('Uploading files successful', data)
    },
    onError: (error: Error) => {
      console.error('Uploading files failed:', error.message)
    },
  })

  return mutation
}
