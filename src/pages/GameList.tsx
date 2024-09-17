import { useLoaderData, useLocation } from "react-router-dom"
import navigationInfo from "../data/navigations";
import { cloneElement } from "react";
import { SliderGame } from "../types/gameTypes";
import CardBase from "../components/CardBase";
import useGameContext from "../context/contextHook";

export default function GameList() {
    const data = useLoaderData() as SliderGame[];
    const { favoriteGames } = useGameContext();
    const location = useLocation();
    const isFavoritePage = location.pathname.includes("favorite");

    const gamesToShow = isFavoritePage ? favoriteGames : data;
    const currentListInfo = navigationInfo.find(item => item.path === location.pathname + location.search);
    const currentListName = currentListInfo?.name;
    const currentListIcon = currentListInfo?.icon;
    return (
        <div className="text-white font-montserrat flex flex-col gap-6 py-8 px-8">
            <div className="flex items-center gap-3 font-cyberWay tracking-wider">
                {currentListIcon && 
                    cloneElement(currentListIcon, { className: "w-6 h-6 shadowIco" } )}
                <h2 className="text-2xl -mb-1">{currentListName}</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {gamesToShow.length !== 0
                ? gamesToShow.map(game => {
                    return (
                        <CardBase key={game.id} game={game}/>
                    )
                })
                : <div className="text-white col-span-2 text-lg">Nothing to show here, try to add games to your favorites.</div> 
                }
            </div>
        </div>
    )
}