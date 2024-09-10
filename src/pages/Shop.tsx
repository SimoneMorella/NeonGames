import { useEffect } from "react"
import fetchAllGames from "../api/apiCall"

export default function Shop() {

    useEffect(() => {
        const fetchAllGamesData = async () => {
            const games = await fetchAllGames();
            console.log(games[0]);
        }
        fetchAllGamesData();
    }, []);

    return (
        <div className="min-h-svh bg-customBg text-white flex justify-center items-center">
            questo è lo shop
        </div>
    )
}