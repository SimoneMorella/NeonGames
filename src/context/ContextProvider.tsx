import { createContext, useState, ReactNode } from 'react';
import { SliderGame } from '../types/gameTypes';
import { ContextGameType } from '../types/gameTypes';


export const GameContext = createContext<ContextGameType | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
    const [favoriteGames, setFavoriteGames] = useState<SliderGame[]>([]);

    const addFavorite = (game: SliderGame) => {
        setFavoriteGames([...favoriteGames, game]);
    }

    const removeFavorite = (gameId: number) => {
        setFavoriteGames(favoriteGames.filter(game => game.id!== gameId));
    }

    const value = {
        favoriteGames,
        addFavorite,
        removeFavorite,
        //then add for cart here
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
} 
