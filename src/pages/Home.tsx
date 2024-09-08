import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Home () {
    return (
        <div className="min-h-svh bg-customBg flex justify-center items-center">
            <div className="flex flex-col justify-center gap-32 p-8 -mt-32">
                <h1 className="font-neon text-7xl p-4 flex items-center">
                    <span className="neonLogo inline-block h-16 animate-textPulsate">Ne<span className="animate-textFlick">o</span>n</span>
                    <span className="font-cyberWay text-white inline-block h-16">Games</span>
                </h1>
                <button className="font-neon text-white text-center text-4xl w-40 self-center py-4 px-8 pt-6 neonLogo neonBorder  animate-borderPulse">
                    <div className="animate-textPulsate">
                        S<span className="animate-textFlick">H</span>OP
                    </div>
                </button>
            </div>
            <div className="text-white absolute bottom-5 bg-white bg-opacity-20 py-2 px-6 rounded-xl ">
                <div className="">
                    SimoneMorella 
                    <GitHubLogoIcon />
                </div>
                caccapipi
            </div>
        </div>
    )
}