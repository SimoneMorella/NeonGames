import { createContext, useState, ReactNode, useEffect } from 'react';
import { SliderGame } from '../types/gameTypes';
import { ContextGameType } from '../types/gameTypes';


export const GameContext = createContext<ContextGameType | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
    const [favoriteGames, setFavoriteGames] = useState<SliderGame[]>([]);
    const [cart, setCart] = useState<SliderGame[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavoriteGames(JSON.parse(savedFavorites));
        }
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart))
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

    const addToCart = (game: SliderGame) => {
        const updatedCart = [...cart, game]
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const removeFromCart = (gameId: number) => {
        const updatedCart = cart.filter(game => game.id!== gameId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const clearCart = () =>  {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const value = {
        favoriteGames,
        addFavorite,
        removeFavorite,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
} 
