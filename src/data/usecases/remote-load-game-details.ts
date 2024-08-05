import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError, AccessDeniedError } from '../../domain/errors'
import { LoadGameDetails } from '../../domain/usecases'
import { RemoteGameDetailsModel } from '../models'

export class RemoteLoadGameDetails implements LoadGameDetails {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadGameDetails.Model>
  ) {}

  async load (): Promise<LoadGameDetails.Model> {
    console.log('aqui')
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteGameDetails = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteGameDetails as RemoteLoadGameDetails.Model
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadGameDetails {
  export type Model = RemoteGameDetailsModel
}

