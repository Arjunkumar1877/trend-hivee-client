/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminLoginDto } from '../models/AdminLoginDto'
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class AdminService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * admin login
   * @returns any logged in succesfully
   * @throws ApiError
   */
  public adminControllerLogin({
    requestBody,
  }: {
    requestBody: AdminLoginDto
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/login',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
