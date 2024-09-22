import { NavLink } from "react-router-dom"
import navigationInfo from "../data/navigations";


export default function ShopNavigation() {

    return (
        <aside className="text-black md:text-white sticky z-[11] md:static top-0 left-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-[300px] sm:w-full md:w-[250px] xl:w-[350px] font-montserrat gap-y-10 xl:gap-y-12 py-8 px-6 xl:px-12">
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Discover</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(0, 2).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#FA4B9C] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">New Release</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(2, 5).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#FA4B9C] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Top</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(5, 8).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#FA4B9C] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Platform</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(8, 12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#FA4B9C] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="space-y-3 xl:space-y-4">
                <h2 className="font-bold text-xl xl:text-2xl">Genre</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm xl:text-base">
                                        <div className={`${isActive ? 'bg-[#FA4B9C] neonIcon animate-borderPulse' : 'bg-black'} p-2 rounded-lg flex justify-center items-center`}>
                                        {ele.icon}
                                        </div>
                                        {ele.name}
                                    </div> 
                                )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )}