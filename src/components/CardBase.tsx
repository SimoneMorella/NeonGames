import { GameProp } from "../types/gameTypes"

export default function CardBase({ game }: GameProp) {
    return (
        <div className="flex flex-col gap-2">
            <div id="img"
            style={{
                backgroundImage: `url(${game.background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '210px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
 
            }}></div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm">{game.name}</h3>
                <p className="text-xs">{game.price}</p>
            </div>
        </div>
    )
}