import { useParams } from "react-router-dom"

export default function GameList() {
    const { filter } = useParams();
    return (
        <div className="text-white">
            Questo è la lista dei giochi {filter}
        </div>
    )
}