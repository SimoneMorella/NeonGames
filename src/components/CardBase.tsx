import { GameProp } from "../types/gameTypes"
import { IoHeartOutline, IoHeartSharp} from "react-icons/io5";
import useGameContext from "../context/contextHook";


export default function CardBase({ game }: GameProp) {
    const { favoriteGames, addFavorite, removeFavorite } = useGameContext();
    const isFavorite = favoriteGames.some(g => g.id === game.id);
    return (
        <div className="flex flex-col gap-2 group">
            <div id="img"
            style={{
                backgroundImage: `url(${game.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '210px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                position: 'relative',
 
            }}>
                <button
                    className="absolute top-2 right-2 p-[2px] flex justify-center items-center bg-white bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500"
                    onClick={() => isFavorite ? removeFavorite(game.id): addFavorite(game)}>
                        {isFavorite 
                            ? (<IoHeartSharp className="w-4 h-4 text-[#FA4B9C]"/>)
                            : (<IoHeartOutline className="w-4 h-4 text-[#FA4B9C]"/>)
                        }

                </button>

            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm">{game.name}</h3>
                <p className="text-xs">{game.price}</p>
            </div>
        </div>
    )
}