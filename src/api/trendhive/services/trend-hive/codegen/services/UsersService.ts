/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get user profile
   * @returns any
   * @throws ApiError
   */
  public usersControllerGetProfile(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/profile',
    })
  }
}
