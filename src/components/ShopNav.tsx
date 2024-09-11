import { Link } from "react-router-dom"

export default function ShopNavigation() {

    return (
        <aside className="text-black z-10 md:text-white">
            <div>
                <h2>Discover</h2>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Your Favorite</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>New Release</h2>
                <ul>
                    <li>
                        <Link to={"/"}>This Week</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Last 30 Days</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Next 30 Days</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Top</h2>
                <ul>
                    <li>
                        <Link to={"/"}>Top of All Time</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Best of the Year</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Top of Last Year</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Platforms</h2>
                <ul>
                    <li>
                        <Link to={"/"}>PC</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Xbox</Link>
                    </li>
                    <li>
                        <Link to={"/"}>PlayStation</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Nintendo Switch</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Genres</h2>
                <ul>
                    <li>
                        <Link to={"/"}>Action</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Adventure</Link>
                    </li>
                    <li>
                        <Link to={"/"}>RPG</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Strategy</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Sports</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Puzzle</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )}