import { getApi } from '@/api/trendhive/api';
import {  CreateProductDto } from '@/api/trendhive/services/trend-hive/codegen';
import { useMutation } from '@tanstack/react-query'

export function useAddProducts() {
    const mutation = useMutation({
      mutationFn: async (args: CreateProductDto) => {
        try {
          const api = await getApi()
          const adminCreds = api.trendHive.products.productsControllerCreate({
            requestBody: args
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
  