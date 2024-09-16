import { createContext, useState, ReactNode, useEffect } from 'react';
import { SliderGame } from '../types/gameTypes';
import { ContextGameType } from '../types/gameTypes';


export const GameContext = createContext<ContextGameType | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
    const [favoriteGames, setFavoriteGames] = useState<SliderGame[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavoriteGames(JSON.parse(savedFavorites));
        }
    }, []);

    const addFavorite = (game: SliderGame) => {
        const updatedFavorites = [...favoriteGames, game]
        setFavoriteGames(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    const removeFavorite = (gameId: number) => {
        const updatedFavorites = favoriteGames.filter(game => game.id!== gameId);
        setFavoriteGames(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
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
