import { useLocation, useLoaderData } from "react-router-dom"
import { SliderGame, GamePageData } from "../types/gameTypes";
import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function GamePage() {
    const location = useLocation();
    const gameDataFromLink = location.state?.game as SliderGame;
    const {game, screenshots} = useLoaderData() as GamePageData;
    console.log(game);
    console.log(screenshots)
    console.log(gameDataFromLink)
    return (
        <div className="text-white font-montserrat flex flex-col gap-4 py-8 px-8">
            <div>
                <h2 className="font-bold text-xl">{game.name}</h2>
            </div>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination= {{clickable: true}}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    className=" bg-transparent text-black w-full h-64 rounded-lg"
                    >
                    <SwiperSlide
                    style={{
                        backgroundImage: `url(${game.background_image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        borderRadius: '8px',
                    }}>
                    </SwiperSlide>
                    { screenshots.slice(0,6).map((screenshots) => {
                        return (
                            <SwiperSlide
                                key={screenshots.id}
                                style={{
                                    backgroundImage: `url(${screenshots.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    borderRadius: '8px',
                                }}>                                
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <h4 className="font-bold text-sm">MetaScore:</h4>
                        <div 
                            className={`${!game.metacritic ? 'bg-gray-800 bg-opacity-50' : game.metacritic < 51 ? 'bg-red-600' : game.metacritic < 81 ? 'bg-yellow-600' : 'bg-green-600'}
                             w-12 h-7 rounded-lg flex justify-center items-center font-bold text-sm`}>
                            {game.metacritic}
                        </div>
                    </div>
                    <div className="font-bold text-lg">
                        <p>{gameDataFromLink.price}</p>
                    </div>
                </div>
                <div>

                </div>
        </div>
    )
}