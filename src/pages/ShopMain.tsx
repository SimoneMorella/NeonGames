import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useLoaderData } from "react-router-dom";
import { SiFireship } from "react-icons/si";
import { GiLaurelCrown, GiDiamondTrophy } from "react-icons/gi";
import { TbRewindForward30 } from "react-icons/tb";
import { SliderPageGames } from "../types/gameTypes";
import CardBase from "../components/CardBase";
import { get30DaysNextGap } from "../utils/utilities";


export default function ShopMain () {
    const sliderGames = useLoaderData() as SliderPageGames;
    return (
        <div className="flex flex-col gap-10 lg:gap-14 py-8 px-8 sm:px-16 md:px-8 lg:px-20 xl:px-28 md:col-span-5 2xl:max-w-[1180px] 2xl:mx-auto">
            <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 xl:gap-5 font-cyberWay tracking-wider">
                    <SiFireship className="w-6 h-6 xl:w-8 xl:h-8 shadowIco"/>
                    <h1 className="text-2xl xl:text-4xl -mb-1">Hottest releases</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination= {{clickable: true}}
                    navigation= {true}
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className=" bg-transparent text-black w-full h-56 min-[530px]:h-64 sm:h-72 lg:h-[420px] xl:h-[500px] 2xl:h-[600px] rounded-lg"
                    >
                    { sliderGames.hottest.map((game) => {
                        return (

                            <SwiperSlide
                            key={game.id}
                                style={{
                                    position: "relative",
                                    backgroundImage: `url(${game.background_image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    borderRadius: '8px',
                                }}>
                                <Link
                                    className="absolute w-full h-full"
                                    to={`/shop/game/${game.id}`}
                                    state={{ game: game}}>
                                </Link>
                                <h4 className="text-white lg:text-xl lg:font-bold font-montserrat w-fit mt-2 ml-2 px-2 lg:px-4 lg:py-1 rounded-lg bg-black bg-opacity-60">
                                    {game.name}
                                </h4>
                                
                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </div>
            <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 xl:gap-5 font-cyberWay tracking-wider">
                    <GiLaurelCrown className="w-6 h-6 xl:w-8 xl:h-8 shadowIco"/>
                    <h1 className="text-2xl xl:text-4xl -mb-1">All Time Top</h1>
                </div>
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={15}
                    centeredSlides={false}
                    className="font-montserrat swiper-container"
                    watchOverflow={true}
                    breakpoints={{
                        530: {
                            width: 530,
                            slidesPerView: 3.2,
                        },
                        1280: {
                            width: 900,
                            slidesPerView: 4.2,
                            spaceBetween: 15,
                        }
                    }}
                >
                    {sliderGames.goat.map(game => {
                        return (
                            <SwiperSlide key={game.id} className="">
                                <CardBase game={game}/>
                            </SwiperSlide>
                        )
                    })}
                    <SwiperSlide>
                        <div className="h-[210px] flex justify-center items-center">
                            <Link 
                                to='/shop/gamelist/top-of-all-time?ordering=-added&page_size=20&exclude_additions&parent_platforms=1,2,3'
                                className="neonLogo font-neon animate-textPulsate xl:text-xl">
                                    See More...
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 xl:gap-5 font-cyberWay tracking-wider">
                    <GiDiamondTrophy className="w-6 h-6 xl:w-8 xl:h-8 shadowIco"/>
                    <h1 className="text-2xl xl:text-4xl -mb-1">Last Year Best</h1>
                </div>
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={15}
                    centeredSlides={false}
                    className="font-montserrat swiper-container"
                    breakpoints={{
                        530: {
                            width: 530,
                            slidesPerView: 3.2,
                        },
                        1280: {
                            width: 900,
                            slidesPerView: 4.2,
                            spaceBetween: 15,
                        }
                    }}>
                    {sliderGames.bestLastYear.map(game => {
                        return (
                            <SwiperSlide key={game.id} className="">
                                <CardBase game={game}/>
                            </SwiperSlide>
                        )
                    })}
                    <SwiperSlide>
                        <div className="h-[210px] flex justify-center items-center">
                            <Link 
                                to={`/shop/gamelist/top-of-last-year?ordering=-added&page_size=20&dates=${new Date().getFullYear() - 1}-01-01,${new Date().getFullYear() - 1}-12-31`}
                                className="neonLogo font-neon animate-textPulsate xl:text-xl">
                                    See More...
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 xl:gap-5 font-cyberWay tracking-wider">
                    <TbRewindForward30 className="w-6 h-6 xl:w-8 xl:h-8 shadowIco"/>
                    <h1 className="text-2xl xl:text-4xl -mb-1">Popular Preorder</h1>
                </div>
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={15}
                    centeredSlides={false}
                    className="font-montserrat swiper-container"
                    breakpoints={{
                        530: {
                            width: 530,
                            slidesPerView: 3.2,
                        },
                        1280: {
                            width: 900,
                            slidesPerView: 4.2,
                            spaceBetween: 15,
                        }
                    }}>
                    {sliderGames.preorder.map(game => {
                        return (
                            <SwiperSlide key={game.id} className="">
                                <CardBase game={game}/>
                            </SwiperSlide>
                        )
                    })}
                    <SwiperSlide>
                        <div className="h-[210px] flex justify-center items-center">
                            <Link 
                                to={`/shop/gamelist/next-30-days?ordering=-added&page_size=20&dates=${get30DaysNextGap()}`}
                                className="neonLogo font-neon animate-textPulsate xl:text-xl">
                                    See More...
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

