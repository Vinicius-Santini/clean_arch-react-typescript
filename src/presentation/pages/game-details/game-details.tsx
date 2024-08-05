import { useEffect, useState } from "react";
import { LoadGameDetails } from "../../../domain/usecases";
import { GameDetailsModel } from "../../../domain/models";

type Props = {
    loadGameDetails: LoadGameDetails;
}

function GameDetails({loadGameDetails}: Props) {
    const [gameDetails, setGameDetails] = useState({} as GameDetailsModel);
    useEffect(() => {
        loadGameDetails.load().then((loadedGameDetails) => setGameDetails(loadedGameDetails))
    }, []);
    return ( <><div>{gameDetails.name}</div></> );
}

export default GameDetails;