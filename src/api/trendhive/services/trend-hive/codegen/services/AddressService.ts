/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartialTypeClass } from '../models/PartialTypeClass'
import type { UpdateAddressRequestDto } from '../models/UpdateAddressRequestDto'
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class AddressService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Update user details during onboarding
   * @returns PartialTypeClass Returns the updated partial user entity
   * @throws ApiError
   */
  public addressControllerUpdateUserDetails({
    token,
    requestBody,
  }: {
    token: string
    requestBody: UpdateAddressRequestDto
  }): CancelablePromise<PartialTypeClass> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/address/update-address/{token}',
      path: {
        token: token,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
