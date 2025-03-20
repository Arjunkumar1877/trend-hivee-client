export type UserType = {
  id?: number
  name?: string
  email?: string
  password?: string
  firebaseId?: string
  phoneNumber?: string
  isEmailVerified?: boolean
  addressess?: UserAddress[]
}

export type UserAddress = {
  id?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country: string
  phoneNumber?: string
  isDefault?: boolean
}
