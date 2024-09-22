import { GameProp } from "../types/gameTypes"
import { IoHeartOutline, IoHeartSharp} from "react-icons/io5";
import useGameContext from "../context/contextHook";
import { Link } from "react-router-dom";

export default function CardBase({ game }: GameProp) {
    const { favoriteGames, addFavorite, removeFavorite } = useGameContext();
    const isFavorite = favoriteGames.some(g => g.id === game.id);
    return (
        <div className="flex flex-col gap-2 group">
            <Link to={`/shop/game/${game.id}`} id="img"
            state={{ game: game}}
            style={{
                backgroundImage: `url(${game.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                position: 'relative',
            }}
            className="h-[220px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[320px]">
                <button
                    className="absolute z-10 top-2 right-2 p-[2px] flex justify-center items-center bg-white bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500"
                    onClick={(e) =>
                        {e.preventDefault();
                        if (isFavorite) removeFavorite(game.id)
                        else addFavorite(game)}}>
                        {isFavorite 
                            ? (<IoHeartSharp className="w-4 h-4 text-[#FA4B9C]"/>)
                            : (<IoHeartOutline className="w-4 h-4 text-[#FA4B9C]"/>)
                        }

                </button>

            </Link>
            <div className="flex flex-col gap-1">
                <Link to={`/shop/game/${game.id}`}>
                    <h3 className="font-bold text-sm lg:text-base">{game.name}</h3>
                </Link>
                <p className="text-xs lg:text-sm">{game.price}</p>
            </div>
        </div>
    )
}