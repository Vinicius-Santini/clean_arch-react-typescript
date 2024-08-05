import { Game } from "../../../../domain/usecases";
import { useNavigate } from "react-router-dom";

type Props = {
    game: Game;
};

function GameCard({game}: Props) {
    const navigate = useNavigate();

    function handleNavigation(gameId: string) {
        navigate(`/game/${gameId}`)
    }

    return ( <>
        <div className='rounded-xl bg-dark-jungle-green'>
            <img src={game.background_image} className="rounded-t-xl h-52 w-full" />
            <div className="pt-4 px-4 pb-6 min-h-32">
                <a onClick={() => handleNavigation(game.id)} className='font-bold text-2xl'>{game.name}</a>
            </div>
        </div>
    </> );
}

export default GameCard;