import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Cart";


export default function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    },[isCartOpen])

    function toggleCartOpen() {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <nav className=" w-full flex items-center py-6 px-8 justify-between">
            <Link to="/" className="font-neon text-3xl">
                <span className="neonLogo relative top-[2px] animate-textPulsate">N<span className="hidden lg:inline">eon</span></span>
                <span className="font-cyberWay relative z-10 text-white -ml-2 lg:ml-0">G<span className="hidden lg:inline">ames</span></span>
            </Link>
            {/* qua serve il form dopo  */}
            <form className="relative flex justify-center">
                <input 
                placeholder="Search game..."
                id="searchBox"
                className="font-montserrat  text-sm px-2 py-[6px] rounded-lg w-44 focus:w-56 focus:outline-none transition-all"/>
                <label htmlFor="searchBox" className="absolute right-1 top-0 bottom-0 flex items-center">
                    <MagnifyingGlassIcon className="w-[18px] h-[18px]"/>
                </label>
            </form>
            <button 
                className="p-2 text-white"
                onClick={() => toggleCartOpen()}>
                <PiShoppingCart className="w-6 h-6"/>
            </button>
            {isCartOpen && (
                <>
                    <div className="absolute z-50 top-0 right-0 w-[250px] h-full bg-white p-4 shadow-md">
                        <Cart />
                    </div>
                    <div 
                        onClick={() => toggleCartOpen()}
                        className="absolute top-0 right-0 z-40 w-full h-full bg-black opacity-40"
                        ></div>
                </>

            )}
        </nav>
    )
}