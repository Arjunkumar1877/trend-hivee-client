import api from '@/lib/axiosInstance'
import { UserAddress } from '@/lib/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateUserDetails() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (args: { userDetails: UserAddress; token: string }) => {
      const res = await api.patch(`/address/update-address/${args.token}`, args.userDetails)
      return res.data
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['add-user-detail'] })
    },
    onError: (error) => {
      console.error('Editing user details error:', error)
    },
  })
}
