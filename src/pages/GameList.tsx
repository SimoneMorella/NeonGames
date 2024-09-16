import { useLoaderData } from "react-router-dom"

export default function GameList() {
    const data = useLoaderData();
    console.log(data);
    // NOW IT WORKS AAAAAAAAAAAAAAA TOMORROW LET'S FINISH IT
    return (
        <div className="text-white">
            Questo è la lista dei giochi
        </div>
    )
}