/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseDto } from '../models/AuthResponseDto'
import type { CheckUserResponseDto } from '../models/CheckUserResponseDto'
import type { ConfirmationEmailResponseDto } from '../models/ConfirmationEmailResponseDto'
import type { CreateUserDto } from '../models/CreateUserDto'
import type { LoginDto } from '../models/LoginDto'
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class AuthService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Check if the user is verified or not
   * @returns CheckUserResponseDto User Verified
   * @throws ApiError
   */
  public authControllerCheckUser({
    firebaseId,
  }: {
    firebaseId: string
  }): CancelablePromise<CheckUserResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/auth/check-user/{firebaseId}',
      path: {
        firebaseId: firebaseId,
      },
    })
  }
  /**
   * Login in a user
   * @returns AuthResponseDto Login successful
   * @throws ApiError
   */
  public authControllerLogin({
    requestBody,
  }: {
    requestBody: LoginDto
  }): CancelablePromise<AuthResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/login',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Resend confirmation email
   * @returns ConfirmationEmailResponseDto Email shared successfully.
   * @throws ApiError
   */
  public authControllerResendConfirmationEmail({
    id,
  }: {
    id: string
  }): CancelablePromise<ConfirmationEmailResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/resend-confirm-email/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * Register a new user
   * @returns AuthResponseDto User created
   * @throws ApiError
   */
  public authControllerSignup({
    requestBody,
  }: {
    requestBody: CreateUserDto
  }): CancelablePromise<AuthResponseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/signup',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
