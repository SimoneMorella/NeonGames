import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { PiShoppingCart } from "react-icons/pi";

export default function Navbar() {
    return (
        <nav className="absolute w-full flex items-center py-6 px-8 justify-between">
            <a href="/" className="font-neon text-3xl">
                <span className="neonLogo animate-textPulsate">N<span className="hidden lg:inline">eon</span></span>
                <span className="font-cyberWay text-white -ml-2 lg:ml-0">G<span className="hidden lg:inline">ames</span></span>
            </a>
            {/* qua serve il form dopo  */}
            <form className="relative">
                <input 
                placeholder="Search game..."
                id="searchBox"
                className="font-montserrat text-sm px-2 py-[6px] rounded-lg w-44 focus:w-56 focus:outline-none transition-all"/>
                <label htmlFor="searchBox" className="absolute right-1 top-0 bottom-0 flex items-center">
                    <MagnifyingGlassIcon className="w-[18px] h-[18px]"/>
                </label>
            </form>
            <div className="p-2 text-white">
                <PiShoppingCart className="w-6 h-6"/>
            </div>
        </nav>
    )
}