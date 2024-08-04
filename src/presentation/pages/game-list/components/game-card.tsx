import { Game } from "../../../../domain/usecases";

type Props = {
    game: Game;
};

function GameCard({game}: Props) {
    return ( <>
        <div className='rounded-xl bg-dark-jungle-green'>
            {/* <div 
            style={{backgroundImage: `url('${game.background_image}')`}} 
            className="rounded-t-xl h-[150px] w-full"></div> */}
            <img src={game.background_image} className="rounded-t-xl h-52 w-full" />
            <div className="pt-4 px-4 pb-6 min-h-32">
                <a className='font-bold text-2xl'>{game.name}</a>
            </div>
        </div>
    </> );
}

export default GameCard;