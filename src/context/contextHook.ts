import { GameContext } from "./ContextProvider";
import { useContext } from "react";


export default function useGameContext() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
}