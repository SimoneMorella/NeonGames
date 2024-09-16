import { useLoaderData, useLocation } from "react-router-dom"
import navigationInfo from "../data/navigations";
import { cloneElement } from "react";
import { SliderGame } from "../types/gameTypes";
import CardBase from "../components/CardBase";

export default function GameList() {
    // here check if data returns what I want for favorites I do not load shit, else i load shit
    const data = useLoaderData() as SliderGame[];
    const location = useLocation();
    const currentListInfo = navigationInfo.find(item => item.path === location.pathname + location.search);
    const currentListName = currentListInfo?.name;
    const currentListIcon = currentListInfo?.icon;
    console.log(data);
    return (
        <div className="text-white font-montserrat flex flex-col gap-4 py-8 px-8">
            <div className="flex items-center gap-3 font-cyberWay tracking-wider">
                {currentListIcon && 
                    cloneElement(currentListIcon, { className: "w-6 h-6 shadowIco" } )}
                <h2 className="text-2xl -mb-1">{currentListName}</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {data.map(game => {
                    return (
                        <CardBase key={game.id} game={game}/>
                    )
                })}
            </div>
        </div>
    )
}