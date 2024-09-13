import { NavLink } from "react-router-dom"
import navigationInfo from "../data/navigations";


export default function ShopNavigation() {

    return (
        <aside className="text-black z-10 md:text-white absolute md:static top-0 left-0 grid grid-cols-1 w-full font-montserrat gap-y-10 py-8 px-6">
            <div className="space-y-3">
                <h2 className="font-bold text-xl">Discover</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(0, 2).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm">
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
            <div className="space-y-3">
                <h2 className="font-bold text-xl">New Release</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(2, 5).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm">
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
            <div className="space-y-3">
                <h2 className="font-bold text-xl">Top</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(5, 8).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm">
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
            <div className="space-y-3">
                <h2 className="font-bold text-xl">Platform</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(8, 12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm">
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
            <div className="space-y-3">
                <h2 className="font-bold text-xl">Genre</h2>
                <ul className="space-y-2">
                {navigationInfo.slice(12).map(ele => {
                        return (
                            <li key={ele.name}>
                                <NavLink to={ele.path} end>
                                {({ isActive }) => (
                                    <div className="flex items-center gap-2 text-sm">
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