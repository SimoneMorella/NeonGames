import { useLoaderData, useLocation } from "react-router-dom"
import navigationInfo from "../data/navigations";

export default function GameList() {
    const data = useLoaderData();
    const location = useLocation();
    const currentListName = navigationInfo.find(item => item.path === location.pathname + location.search)?.name;
    console.log(currentListName);
    console.log(data);
    // NOW IT WORKS AAAAAAAAAAAAAAA TOMORROW LET'S FINISH IT
    return (
        <div className="text-white">
            Questo è la lista dei giochi
            {currentListName}
        </div>
    )
}