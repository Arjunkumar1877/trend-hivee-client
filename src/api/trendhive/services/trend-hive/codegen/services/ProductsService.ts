/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto'
import type { Product } from '../models/Product'
import type { UpdateProductDto } from '../models/UpdateProductDto'
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class ProductsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all products
   * @returns Product Return all products
   * @throws ApiError
   */
  public productsControllerFindAll(): CancelablePromise<Array<Product>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/products',
    })
  }
  /**
   * Create a new product
   * @returns Product Product created successfully
   * @throws ApiError
   */
  public productsControllerCreate({
    requestBody,
  }: {
    requestBody: CreateProductDto
  }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/products',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete a product
   * @returns any Product deleted successfully
   * @throws ApiError
   */
  public productsControllerRemove({ id }: { id: number }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/products/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * Get a product by id
   * @returns Product Return the product
   * @throws ApiError
   */
  public productsControllerFindOne({ id }: { id: number }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/products/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * Update a product
   * @returns Product Product updated successfully
   * @throws ApiError
   */
  public productsControllerUpdate({
    id,
    requestBody,
  }: {
    id: number
    requestBody: UpdateProductDto
  }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/products/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
