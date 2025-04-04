/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest'
import type { OpenAPIConfig } from './core/OpenAPI'
import { FetchHttpRequest } from './core/FetchHttpRequest'
import { AddressService } from './services/AddressService'
import { AdminService } from './services/AdminService'
import { AppService } from './services/AppService'
import { AuthService } from './services/AuthService'
import { CategoriesService } from './services/CategoriesService'
import { ProductsService } from './services/ProductsService'
import { UsersService } from './services/UsersService'
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest
export class TrendHiveTrendhiveApi {
  public readonly address: AddressService
  public readonly admin: AdminService
  public readonly app: AppService
  public readonly auth: AuthService
  public readonly categories: CategoriesService
  public readonly products: ProductsService
  public readonly users: UsersService
  public readonly request: BaseHttpRequest
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    })
    this.address = new AddressService(this.request)
    this.admin = new AdminService(this.request)
    this.app = new AppService(this.request)
    this.auth = new AuthService(this.request)
    this.categories = new CategoriesService(this.request)
    this.products = new ProductsService(this.request)
    this.users = new UsersService(this.request)
  }
}
