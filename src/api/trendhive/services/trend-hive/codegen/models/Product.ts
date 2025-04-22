/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Product = {
  id: number
  name: string
  description: string
  price: number
  availableQuantity: number
  categoryId: number
  images?: Array<{
    id: number
    image: string
    isCover: boolean
    createdAt: string
  }>
  createdAt?: string
  updatedAt?: string
}
