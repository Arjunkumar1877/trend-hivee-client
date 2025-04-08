/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class AppService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any
   * @throws ApiError
   */
  public appControllerGetHello(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/',
    })
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public appControllerUploadFile({
    formData,
    type,
  }: {
    formData: {
      file?: Blob
    }
    type?: string
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/upload',
      query: {
        type: type,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    })
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public appControllerUploadFiles({
    formData,
    type,
  }: {
    formData: {
      files?: Array<Blob>
    }
    type?: string
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/upload-multiple',
      query: {
        type: type,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    })
  }
}
