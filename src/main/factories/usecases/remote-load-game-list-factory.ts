import { makeApiUrl } from '../http'
import { makeAuthorizeHttpClientDecorator } from '../../factories/decorators'
import { LoadGameList } from '../../../domain/usecases'
import { RemoteLoadGameList } from '../../../data/usecases'

export const makeRemoteLoadGameList = (): LoadGameList =>
  new RemoteLoadGameList(makeApiUrl('/games'), makeAuthorizeHttpClientDecorator())
