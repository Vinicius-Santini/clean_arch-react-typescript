import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError, AccessDeniedError } from '../../domain/errors'
import { LoadGameList } from '../../domain/usecases'

export class RemoteLoadGameList implements LoadGameList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadGameList.Model>
  ) {}

  async loadAll (): Promise<LoadGameList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteGames = httpResponse.body || null as any
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteGames
      case HttpStatusCode.noContent: return null as any
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

type Game = {
  id: string
  name: string  
}

export namespace RemoteLoadGameList {
  export type Model = {
      count:  number
      next: string
      previous: string
      results: Game[]
  }
}

