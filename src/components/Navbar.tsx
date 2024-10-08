import { PiShoppingCart } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import useGameContext from "../context/contextHook";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { cart } = useGameContext(); 

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

        useEffect(() => {
            setIsCartOpen(false);
        }, [location, setIsCartOpen]);

    function toggleCartOpen() {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <nav className=" w-full flex items-center py-6 px-8 md:px-16 lg:px-8 justify-between">
            <Link to="/" className="font-neon text-3xl flex relative">
                <span className="neonLogo relative top-[2px] home-top-fix animate-textPulsate">
                    N<span className="hidden absolute lg:inline lg:ml-[1px]">eon</span>
                </span>
                <span className="font-cyberWay relative lg:left-14 z-10 text-white -ml-2 lg:ml-0">
                    G<span className="hidden  absolute lg:inline lg:ml-[2px]">ames</span>
                </span>
            </Link>
            <SearchBar />
            <button 
                className="p-2 text-white relative lg:right-7"
                onClick={() => toggleCartOpen()}>
                <PiShoppingCart className="w-6 h-6"/>
                { cart.length > 0 && (<div className="w-2 h-2 bg-[#FA4B9C] rounded-full absolute top-2 right-[6px]"></div>)}
            </button>
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div 
                            initial={{ x: '420px' }}
                            animate={{ x: 0 }}
                            exit= {{ x: '360px' }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="absolute z-50 top-0 right-0 w-[280px] md:w-[360px] xl:w-[420px] h-full bg-cartBg p-4 shadow-md">
                            <Cart />
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{ opacity: 0.5}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                            onClick={() => toggleCartOpen()}
                            className="absolute top-0 right-0 z-40 w-full h-full bg-black opacity-50">
                        </motion.div>
                    </>

                )}
            </AnimatePresence>

        </nav>
    )
}