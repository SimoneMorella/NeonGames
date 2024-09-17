import { useLocation } from "react-router-dom"
import { SliderGame } from "../types/gameTypes";

export default function GamePage() {
    const location = useLocation();
    const game = location.state?.game as SliderGame;
    return (
        <div className="text-white">
            This is the game page
        </div>
    )
}