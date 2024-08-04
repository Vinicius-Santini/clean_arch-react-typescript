import {makeRemoteLoadGameList} from '../usecases'
import GameList from '../../../presentation/pages/game-list/game-list'

function makeGameList() {
    return ( 
        <GameList 
            loadGameList={makeRemoteLoadGameList()}
        />
     );
}

export default makeGameList;