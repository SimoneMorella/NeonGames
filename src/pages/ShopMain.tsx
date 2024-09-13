import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { SiFireship } from "react-icons/si";


export default function ShopMain () {

    return (
        <div className="flex flex-col py-8 px-8">
            <div className="space-y-4">
                <div className="flex items-center gap-4 font-cyberWay tracking-wider">
                    <SiFireship className="w-6 h-6 shadowIco"/>
                    <h1 className="text-2xl">Hottest releases</h1>
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
                    className="w-40 h-20"
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}