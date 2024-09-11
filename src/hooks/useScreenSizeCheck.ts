import { useState, useEffect } from "react";


export default function useScreenSizeCheck(breakpoint: number) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint])

    return isMobile;
}