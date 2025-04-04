/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category'
import type { CreateCategoryDto } from '../models/CreateCategoryDto'
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto'
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class CategoriesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all categories
   * @returns Category Return all categories
   * @throws ApiError
   */
  public categoriesControllerFindAll(): CancelablePromise<Array<Category>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/categories',
    })
  }
  /**
   * Create a new category
   * @returns Category Category created successfully
   * @throws ApiError
   */
  public categoriesControllerCreate({
    requestBody,
  }: {
    requestBody: CreateCategoryDto
  }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/categories',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete a category
   * @returns any Category deleted successfully
   * @throws ApiError
   */
  public categoriesControllerRemove({ id }: { id: number }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/categories/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * Get a category by id
   * @returns Category Return the category
   * @throws ApiError
   */
  public categoriesControllerFindOne({ id }: { id: number }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/categories/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * Update a category
   * @returns Category Category updated successfully
   * @throws ApiError
   */
  public categoriesControllerUpdate({
    id,
    requestBody,
  }: {
    id: number
    requestBody: UpdateCategoryDto
  }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/categories/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
