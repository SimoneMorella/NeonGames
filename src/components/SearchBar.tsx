import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from "react"
import { SliderGame } from "../types/gameTypes";
import { fetchGameQuery } from "../api/apiCall";
import { Link, useLocation } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SliderGame[]>([]);
    const [debounceQuery, setDebounceQuery] = useState(query);
    const [isFocused, setIsFocused] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query])

    useEffect(() => {
        const fetchResults = async () => {
            if (debounceQuery) {
                const searchResult = await fetchGameQuery(debounceQuery);
                console.log(searchResult);
                setResults(searchResult);
            } else {
                setResults([]);
            }
        };
        fetchResults();
    }, [debounceQuery])

    useEffect(() => {
        setIsFocused(false);
    }, [location])

    return (
        <form 
            className="relative flex flex-col justify-center" 
            onSubmit={(e) => e.preventDefault()}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}>
        <input 
            placeholder="Search game..."
            id="searchBox"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="font-montserrat  text-sm px-3 py-[6px] rounded-lg w-44 sm:w-56 md:w-72 xl:w-80 focus:w-60 sm:focus:w-72 md:focus:w-80 xl:focus:w-96 focus:outline-none transition-all"/>
        <label htmlFor="searchBox" className="absolute right-1 top-0 bottom-0 flex items-center">
            <MagnifyingGlassIcon className="w-[18px] h-[18px]"/>
        </label>
        { (isFocused && results.length > 0) && (
            <div className="mt-1 py-2 px-2 overflow-y-auto bg-white bg-opacity-95 absolute top-full w-full max-h-[300px] z-10 rounded-lg shadow-xl scroll-content">
                {results.map((game) => (
                    <Link
                        to={`/shop/game/${game.id}`}
                        state={{ game: game}}
                        key={game.id} 
                        className="flex items-center gap-2 py-2 border-b border-b-black border-opacity-20 min-h-[65px] hover:bg-black hover:bg-opacity-10"
                        onMouseDown={(e) => e.preventDefault()}
                        onTouchStart={(e) => e.preventDefault()}>
                        <img src={game.background_image} alt={game.name} className="w-12 h-12 object-cover rounded-lg"/>
                        <h3 className="text-sm font-montserrat">{game.name}</h3>
                    </Link>
                ))}
            </div>
        )}
    </form>
    )
}