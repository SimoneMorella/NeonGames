import { useState, useEffect } from "react";
import useScreenSizeCheck from "../hooks/useScreenSizeCheck.ts";
import ShopNavigation from "../components/ShopNav.tsx";
import ShopMain from "./ShopMain.tsx";
import { SliderPageGames } from "../types/gameTypes.ts";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";



export default function Shop() {
    const isMobile = useScreenSizeCheck(768);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isBgBig, setIsBgBig] = useState(false);
    const location = useLocation();
    const sliderGameData = useLoaderData() as SliderPageGames;

    useEffect(() => {
        setIsMenuShown(false);
    }, [location])

    // if i want the full screen rest for this component child (main) just add flex here
    return (
        <div className=" flex-1 bg-customBg text-white md:grid grid-cols-5 md:pt-[90px]">
            <motion.div 
                className="z-10 md:hidden container"
                initial={{transform: 'scale(1)'}}
                animate={isMenuShown ? { transform: 'scale(72)'} : {transform: 'scale(1)'}}
                transition={{ duration: 0.6}}
                onAnimationComplete={() => {
                    if (isMenuShown) {
                        setIsBgBig(true);
                    } else {
                        setIsBgBig(false);
                    }
                }}
            ></motion.div>
            {
                isMobile
                ? ( <AnimatePresence>
                    {isMenuShown && isBgBig && (
                        <motion.div
                            className="sticky top-0 -mt-24 z-[11] w-full "
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.3, delay: 0}}}
                            transition={{
                                duration: 0.4,
                            }}>
                            {<ShopNavigation/>}
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
                    ? (<ShopMain sliderGames={sliderGameData}/>)
                    : (<Outlet />)}


           
        </div>
    )
}