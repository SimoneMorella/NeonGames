import fetchAllGames from "../api/apiCall.ts"
import { useState, useEffect } from "react";
import useScreenSizeCheck from "../hooks/useScreenSizeCheck.ts";
import ShopNavigation from "../components/ShopNav.tsx";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export async function loadAllGames() {
    const allGames = await fetchAllGames();
    console.log(allGames[0]);
    return allGames[0];
}

export default function Shop() {
    const isMobile = useScreenSizeCheck(768);
    const [isMenuShown, setIsMenuShown] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setIsMenuShown(false);
    }, [location])

    return (
        <div className="min-h-svh bg-customBg text-white flex justify-center items-center">
            <div className={`md:hidden z-10 container ${isMenuShown ? 'expanded': ''}`}></div>
            {
                isMobile
                ? ( <AnimatePresence>
                    {isMenuShown && (
                        <motion.div 
                            className="z-[10]"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.3, delay: 0}}}
                            transition={{
                                duration: 0.5,
                                delay: 1
                            }}>
                            <ShopNavigation />
                        </motion.div>
                        
                    )}
                </AnimatePresence>
                    
                )
                : (
                    <ShopNavigation />
                )
            }
                <button 
                    onClick={() => setIsMenuShown(isMenuShown ? false : true)}
                    className="md:hidden z-[11] fixed bottom-7 right-7 w-9 h-9 flex justify-center items-center text-black rounded-full"
                    >
                    {isMenuShown 
                    ? (<Cross1Icon className="w-5 h-5"/>)
                    : (<HamburgerMenuIcon className="w-5 h-5"/>) 
                    }
                </button>
            <Outlet />
        </div>
    )
}