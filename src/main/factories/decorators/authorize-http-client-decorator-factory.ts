import { AuthorizeHttpClientDecorator } from '../../decorators'
import { makeAxiosHttpClient } from '../http'
import { HttpClient } from '../../../data/protocols/http'

export const makeAuthorizeHttpClientDecorator = (): HttpClient =>
  new AuthorizeHttpClientDecorator(makeAxiosHttpClient())
