import { makeApiUrl } from '../http'
import { makeAuthorizeHttpClientDecorator } from '../../factories/decorators'
import { LoadGameDetails } from '../../../domain/usecases'
import { RemoteLoadGameDetails } from '../../../data/usecases'

export const makeRemoteLoadGameDetails = (id: string): LoadGameDetails =>
  new RemoteLoadGameDetails(makeApiUrl(`/games/${id}`), makeAuthorizeHttpClientDecorator())
