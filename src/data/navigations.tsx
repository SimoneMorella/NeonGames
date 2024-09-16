import { IoHome, IoExtensionPuzzle } from "react-icons/io5";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { GiFire, GiLaurelCrown, GiLaurelsTrophy, GiDiamondTrophy, GiBouncingSword } from "react-icons/gi";
import { TbRewindBackward30, TbRewindForward30 } from "react-icons/tb";
import { FaWindows, FaXbox, FaPlaystation, FaCampground, FaChessRook } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiBoxingFill } from "react-icons/ri";
import { MdOutlineSportsBasketball } from "react-icons/md";
import get30DaysGap from "../utils/utilities";


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
        path: '/shop/gamelist/this-week?ordering=-added&page_size=20&dates=2024-09-09,2024-09-16',
    },
    {
        name: 'Last 30 Days',
        icon: <TbRewindBackward30 className="w-5 h-5 text-white"/>,
        path: `/shop/gamelist/last-30-days?dates=${get30DaysGap()}&ordering=-rating&page_size=20`,
    },
    {
        name: 'Next 30 Days',
        icon: <TbRewindForward30 className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/next-30-days',
    },
    {
        name: 'Top of All Time',
        icon: <GiLaurelCrown className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/top-of-all-time',
    },
    {
        name: 'Best of the Year',
        icon: <GiLaurelsTrophy className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/best-of-the-year',
    },
    {
        name: 'Top of Last Year',
        icon: <GiDiamondTrophy className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/top-of-last-year',
    },
    {
        name: 'PC',
        icon: <FaWindows className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/pc',
    },
    {
        name: 'Xbox',
        icon: <FaXbox className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/xbox',
    },
    {
        name: 'PlayStation',
        icon: <FaPlaystation className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/playstation',
    },
    {
        name: 'Nintendo Switch',
        icon: <BsNintendoSwitch className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/nintendo-switch',
    },
    {
        name: 'Action',
        icon: <RiBoxingFill className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/action',
    },
    {
        name: 'Adventure',
        icon: <FaCampground className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/adventure',
    },
    {
        name: 'RPG',
        icon: <GiBouncingSword className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/rpg',
    },
    {
        name: 'Strategy',
        icon: <FaChessRook className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/strategy',
    },
    {
        name: 'Sports',
        icon: <MdOutlineSportsBasketball className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/sports',
    },
    {
        name: 'Puzzle',
        icon: <IoExtensionPuzzle className="w-5 h-5 text-white"/>,
        path: '/shop/gamelist/puzzle',
    }
]

export default navigationInfo