import GameCard from "./components/game-card";
import SearchBar from "./components/search-bar";
import { LoadGameList } from "../../../domain/usecases";
import { useEffect, useState } from "react";

type Props = {
    loadGameList: LoadGameList;
}

function GameList ({loadGameList}: Props) {
    const [gameList, setGameList] = useState({} as LoadGameList.Model);
    useEffect(() => {
        loadGameList.loadAll()
        .then((remoteGameList) => setGameList(remoteGameList))
    }, []);

    return ( <>
        <div className="container mx-auto flex flex-col justify-center items-center pt-10">
            <SearchBar />
            <div className="grid grid-cols-new3 gap-6 pt-10">
                {
                    gameList.results ? 
                    gameList.results.map((game) => (
                        <GameCard game={game}/>
                    )) :
                    <p>Carregando...</p>
                }
            </div>
        </div>
    </> );
}

export default GameList;