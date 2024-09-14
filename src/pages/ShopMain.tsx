import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { SiFireship } from "react-icons/si";


export default function ShopMain ({ sliderGames }) {
    console.log(sliderGames);
    return (
        <div className="flex flex-col py-8 px-8">
            <div className="space-y-4">
                <div className="flex items-center gap-3 font-cyberWay tracking-wider">
                    <SiFireship className="w-6 h-6 shadowIco"/>
                    <h1 className="text-2xl -mb-1">Hottest releases</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination= {{clickable: true}}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="bg-black text-black w-full h-48 rounded-lg"
                    >
                    { sliderGames.map((game) => {
                        return (
                            <SwiperSlide
                                key={game.id}
                                style={{
                                    backgroundImage: `url(${game.background_image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100%',
                                    borderRadius: '8px',
                                }}>
                                <h4 className="text-white font-montserrat w-fit mt-2 ml-2 px-2 rounded-lg bg-black bg-opacity-60">
                                    {game.name}
                                </h4>
                                
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </div>
    )
}