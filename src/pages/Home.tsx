import { GitHubLogoIcon } from "@radix-ui/react-icons"
import rawgImg from "../assets/images/RAWG.png";
import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();

    return (
        <div className=" flex-1 bg-customBg flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-10 lg:gap-12 2xl:gap-16 p-8 -mt-32">
                <h1 className="font-neon text-[clamp(3rem,4.6vw,4.5rem)] leading-none p-4 flex items-baseline">
                    <span className="neonLogo relative top-[0.1em] animate-textPulsate">Ne<span className="animate-textFlick safari-flick-fix">o</span>n</span>
                    <span className="font-cyberWay text-white">Games</span>
                </h1>
                <button 
                    className="font-neon flex items-center justify-center text-white text-2xl 2xl:text-3xl leading-none w-32 2xl:w-36 py-4 2xl:py-5 px-6 neonLogo neonBorder animate-borderPulse"
                    onClick={() => navigate("/shop")}>
                    <div className="trim-caps animate-textPulsate">
                        S<span className="animate-textFlick safari-flick-fix">H</span>OP
                    </div>
                </button>
            </div>
            <div className="text-gray-900 font-montserrat absolute bottom-4 bg-white bg-opacity-10 py-2 px-4 rounded-xl flex gap-3">
                <a href="https://github.com/SimoneMorella" className="flex w-[120px] items-center justify-center gap-1 py-1 px-2 bg-white bg-opacity-90 hover:bg-opacity-70 rounded-md transition">
                    <GitHubLogoIcon className="w-4 h-4 text-black"/>
                    <span className="text-[11px] font-normal -mb-[2px]">SimoneMorella</span> 
                </a>
                <a href="https://api.rawg.io/docs/" className="flex items-center justify-center gap-1 py-1 px-2 bg-white bg-opacity-90 hover:bg-opacity-70 w-[120px] rounded-md transition">
                    <img src={rawgImg} alt="RAWG logo" className="w-4 h-4"/>
                    <span className="text-xs -mb-[2px]">RAWG API</span>
                </a>
            </div>
        </div>
    )
}