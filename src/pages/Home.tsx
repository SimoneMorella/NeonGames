import { GitHubLogoIcon } from "@radix-ui/react-icons"
import rawgImg from "../assets/images/RAWG.png";
import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();

    return (
        <div className=" flex-1 bg-customBg flex justify-center items-center">
            <div className="flex flex-col justify-center gap-10 lg:gap-14 xl:gap-16 p-8 -mt-40">
                <h1 className="font-neon text-5xl md:text-6xl xl:text-7xl p-4 flex items-center">
                    <span className="neonLogo inline-block -mb-2 h-16 animate-textPulsate">Ne<span className="animate-textFlick">o</span>n</span>
                    <span className="font-cyberWay text-white inline-block h-16">Games</span>
                </h1>
                <button 
                    className="font-neon text-white text-center text-2xl xl:text-3xl w-32 xl:w-36 self-center py-2 xl:py-3 px-6 pt-4 xl:pt-5 neonLogo neonBorder animate-borderPulse"
                    onClick={() => navigate("/shop")}>
                    <div className="animate-textPulsate">
                        S<span className="animate-textFlick">H</span>OP
                    </div>
                </button>
            </div>
            <div className="text-gray-900 font-montserrat absolute bottom-4 bg-white bg-opacity-10 py-2 px-4 rounded-xl flex gap-3">
                <a href="https://github.com/SimoneMorella" className="flex w-[120px] items-center justify-center gap-1 py-1 px-2 bg-white bg-opacity-90 hover:bg-opacity-70 rounded-lg transition">
                    <GitHubLogoIcon className="w-4 h-4 text-black"/>
                    <span className="text-[11px] font-normal -mb-[2px]">SimoneMorella</span> 
                </a>
                <a href="https://api.rawg.io/docs/" className="flex items-center justify-center gap-1 py-1 px-2 bg-white bg-opacity-90 hover:bg-opacity-70 w-[120px] rounded-lg transition">
                    <img src={rawgImg} alt="RAWG logo" className="w-4 h-4"/>
                    <span className="text-xs -mb-[2px]">RAWG API</span>
                </a>
            </div>
        </div>
    )
}