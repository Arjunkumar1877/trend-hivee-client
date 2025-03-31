import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getTrendHiveOpenApi } from '../trendhive/api';
import { UpdateAddressRequestDto } from '../trendhive/services/trend-hive/codegen';

export function useUpdateUserDetails() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (args: { userDetails: UpdateAddressRequestDto; token: string }) => {
      const { userDetails, token } = args;
      const api = await getTrendHiveOpenApi();
      const res = await api.trendHive.address.addressControllerUpdateUserDetails({
        requestBody: userDetails,
        token: token
      })
      return res
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['add-user-detail'] })
    },
    onError: (error) => {
      console.error('Editing user details error:', error)
    },
  })
}
