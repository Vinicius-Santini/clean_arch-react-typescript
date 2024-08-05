import {makeRemoteLoadGameDetails} from '../usecases'
import GameDetails from '../../../presentation/pages/game-details/game-details'
import { useParams } from 'react-router-dom'

function makeGameDetails() {
    type Props = {
        id: string
    }
    const { id } = useParams<Props>()
    console.log(id)
    return ( 
        <GameDetails
            loadGameDetails={makeRemoteLoadGameDetails(id as string)}
        />
     );
}

export default makeGameDetails;