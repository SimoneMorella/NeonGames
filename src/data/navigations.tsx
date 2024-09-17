import { IoHome, IoExtensionPuzzle } from "react-icons/io5";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { GiFire, GiLaurelCrown, GiLaurelsTrophy, GiDiamondTrophy, GiBouncingSword } from "react-icons/gi";
import { TbRewindBackward30, TbRewindForward30 } from "react-icons/tb";
import { FaWindows, FaXbox, FaPlaystation, FaCampground, FaChessRook } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiBoxingFill } from "react-icons/ri";
import { MdOutlineSportsBasketball } from "react-icons/md";
import get30DaysGap, { get30DaysNextGap, get7DaysGap } from "../utils/utilities";


//later add function for this week gap create it and use it


const navigationInfo = [
    {
        name: 'Home',
        icon: <IoHome  className="w-5 h-5 text-white"/>,
        path: '/shop',
    },
    {
        name: 'Your Favorites',
        icon: <HeartFilledIcon  className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/favorites',
    },
    {
        name: 'This Week',
        icon: <GiFire className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/this-week?ordering=-added&page_size=20&dates=${get7DaysGap()}`,
    },
    {
        name: 'Last 30 Days',
        icon: <TbRewindBackward30 className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/last-30-days?dates=${get30DaysGap()}&ordering=-rating&page_size=20`,
    },
    {
        name: 'Next 30 Days',
        icon: <TbRewindForward30 className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/next-30-days?ordering=-added&page_size=20&dates=${get30DaysNextGap()}`,
    },
    {
        name: 'Top of All Time',
        icon: <GiLaurelCrown className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/top-of-all-time?ordering=-added&page_size=20&exclude_additions&parent_platforms=1,2,3',
    },
    {
        name: 'Best of the Year',
        icon: <GiLaurelsTrophy className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/best-of-the-year?ordering=-added&page_size=20&dates=${new Date().getFullYear()}-01-01,${new Date().getFullYear()}-12-31`,
    },
    {
        name: 'Top of Last Year',
        icon: <GiDiamondTrophy className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/top-of-last-year?ordering=-added&page_size=20&dates=${new Date().getFullYear() - 1}-01-01,${new Date().getFullYear() - 1}-12-31`,
    },
    {
        name: 'PC',
        icon: <FaWindows className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/pc?ordering=-added&page_size=20&parent_platforms=1',
    },
    {
        name: 'Xbox',
        icon: <FaXbox className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/xbox?ordering=-added&page_size=20&parent_platforms=3',
    },
    {
        name: 'PlayStation',
        icon: <FaPlaystation className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/playstation?ordering=-added&page_size=20&parent_platforms=2',
    },
    {
        name: 'Nintendo Switch',
        icon: <BsNintendoSwitch className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/nintendo-switch?ordering=-added&page_size=20&parent_platforms=7',
    },
    {
        name: 'Action',
        icon: <RiBoxingFill className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/action?ordering=-added&page_size=20&genres=4',
    },
    {
        name: 'Adventure',
        icon: <FaCampground className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/adventure?ordering=-added&page_size=20&genres=3',
    },
    {
        name: 'RPG',
        icon: <GiBouncingSword className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/rpg?ordering=-added&page_size=20&genres=5',
    },
    {
        name: 'Strategy',
        icon: <FaChessRook className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/strategy?ordering=-added&page_size=20&genres=10',
    },
    {
        name: 'Sports',
        icon: <MdOutlineSportsBasketball className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/sports?ordering=-added&page_size=20&genres=15',
    },
    {
        name: 'Puzzle',
        icon: <IoExtensionPuzzle className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/puzzle?ordering=-added&page_size=20&genres=7',
    }
]

export default navigationInfo