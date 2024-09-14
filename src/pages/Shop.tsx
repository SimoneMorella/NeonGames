import { useState, useEffect } from "react";
import useScreenSizeCheck from "../hooks/useScreenSizeCheck.ts";
import ShopNavigation from "../components/ShopNav.tsx";
import ShopMain from "./ShopMain.tsx";
import { SliderGame } from "../types/gameTypes.ts";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";



export default function Shop() {
    const isMobile = useScreenSizeCheck(768);
    const [isMenuShown, setIsMenuShown] = useState(false)
    const location = useLocation();
    const results = useLoaderData() as SliderGame[];

    useEffect(() => {
        setIsMenuShown(false);
    }, [location])
// if i want the full screen rest for this component child (main) just add flex here
    return (
        <div className="flex-1 bg-customBg text-white md:grid grid-cols-5 md:pt-[90px]">
            <div className={`md:hidden z-10 container ${isMenuShown ? 'expanded': ''}`}></div>
            {
                isMobile
                ? ( <AnimatePresence>
                    {isMenuShown && (
                        <motion.div
                            className="z-[11]"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.3, delay: 0}}}
                            transition={{
                                duration: 0.5,
                                delay: 1
                            }}>
                            <ShopNavigation/>
                        </motion.div>
                        
                    )}
                </AnimatePresence>
                )
                : (
                    <div className="md:col-span-2 ">
                        <ShopNavigation />
                    </div>

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

                {location.pathname === "/shop" 
                    ? (<ShopMain sliderGames={results}/>)
                    : (<Outlet />)}


           
        </div>
    )
}