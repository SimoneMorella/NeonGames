import { useRouteError } from "react-router-dom"

type Error = {
    status: number,
    data: string,
    statusText: string,
}

export default function ErrorPage() {
    const error = useRouteError() as Error;
    console.log(error);
    return (
        <div className="flex flex-col gap-2 justify-center py-8 px-8 text-white font-montserrat">
            <div className="flex gap-2">
                <h2 className="font-cyberWay text-4xl">Error</h2>
                <h2 className="text-[#FA4B9C] relative top-1 font-neon text-4xl neonLogo animate-textPulsate">
                    4<span className="animate-textFlick">0</span>4
                </h2>
            </div>
            <div className="flex gap-1 font-bold mt-7">
                <h4>{error.status}</h4>
                <h4>{error.statusText}</h4>
            </div>
            <div className="flex flex-col gap-2">
                <p>Looks like an error of some sort occurred. Look below for more information.</p>
                <p className="font-bold">{error.data}</p>
            </div>
        </div>
    )
}