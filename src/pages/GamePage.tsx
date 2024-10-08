import { useLocation, useLoaderData } from "react-router-dom"
import { SliderGame, GamePageData } from "../types/gameTypes";
import {Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import useGameContext from "../context/contextHook";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GamePage() {
    const location = useLocation();
    const { favoriteGames, addFavorite, removeFavorite, cart, addToCart, removeFromCart } = useGameContext();
    const gameDataFromLink = location.state?.game as SliderGame;
    const gameData = useLoaderData() as GamePageData;
    if (!gameData) {
        return null;
    }
    const { game, screenshots } = gameData;
    const isFavorite = favoriteGames.some(g => g.id === game.id);
    const isInCart = cart.some(g => g.id === game.id);
    return (
        <div className="text-white font-montserrat flex flex-col lg:grid lg:grid-cols-7 gap-6 lg:gap-y-16 py-8 lg:py-20 px-8 sm:px-20 md:px-28 lg:px-8 2xl:max-w-[1520px] 2xl:mx-auto">
            <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-8">
                <h2 className="font-bold text-xl md:text-3xl">{game.name}</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination= {{clickable: true}}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className=" bg-transparent text-black w-full h-64 sm:h-80 md:h-96 lg:h-[700px] rounded-lg"
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
            </div>
            
                <div className="flex flex-col gap-8 col-span-2 lg:mt-16">
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <h4 className="font-bold text-sm">MetaScore:</h4>
                        <div 
                            className={`${!game.metacritic ? 'bg-gray-800 bg-opacity-50' : game.metacritic < 51 ? 'bg-red-600' : game.metacritic < 81 ? 'bg-yellow-500' : 'bg-green-600'}
                             w-12 h-7 rounded-lg flex justify-center items-center font-bold text-sm`}>
                            {game.metacritic}
                        </div>
                    </div>
                    <div className="font-bold text-lg">
                        <p>{gameDataFromLink.price}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 font-bold text-sm">
                    <button 
                        className="h-12 bg-[#FA4B9C] rounded-lg hover:bg-[#e86ca6] transition-colors"
                        onClick={() => isInCart ? removeFromCart(game.id) :addToCart(gameDataFromLink)}>
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <button 
                        className="h-12 rounded-lg bg-white bg-opacity-40 hover:bg-opacity-50 transition-opacity"
                        onClick={() => isFavorite ? removeFavorite(game.id): addFavorite(gameDataFromLink)}>
                        {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-sm font-bold py-2 border-b border-b-white border-opacity-35">
                        <h4 className="text-white text-opacity-65">Genre</h4>
                        <div className="space-x-2 text-right">
                            {game.genres.map(genre => (
                                <span key={genre.id} className="tracking-tighter">{genre.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold py-2 border-b border-b-white border-opacity-35">
                        <h4 className="text-white text-opacity-65">Developer</h4>
                        <div className="space-x-2 text-right">
                            {game.developers.length === 0 ? "TBA" : game.developers.map(dev => (
                                <span key={dev.id} className="tracking-tighter">{dev.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold py-2 border-b border-b-white border-opacity-35">
                        <h4 className="text-white text-opacity-65">Publisher</h4>
                        <div className="space-x-2 text-right">
                            {game.publishers.length === 0 ? "TBA" : game.publishers.map(pub => (
                                <span key={pub.id} className="tracking-tighter">{pub.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold py-2 border-b border-b-white border-opacity-35">
                        <h4 className="text-white text-opacity-65">Released</h4>
                        <div className="space-x-2">
                            {game.released ? game.released : "TBA"}
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold py-2 border-b border-b-white border-opacity-35">
                        <h4 className="text-white text-opacity-65">Platform</h4>
                        <div className="space-x-2 text-right">
                            {game.parent_platforms.length === 0 ? "TBA" : game.parent_platforms.map(pub => (
                                <span key={pub.platform.id} className="tracking-tighter">{pub.platform.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
                

                </div>
                <div className="h-72 relative overflow-auto rounded-lg scroll-content lg:col-span-full">
                    <h5 className="font-bold text-lg pb-2">Description</h5>
                    <p className="text-sm">{game.description_raw ? game.description_raw : "No Description available for this game."}</p> 
                    <div className="sticky -bottom-1 inset-x-0 h-7 rounded-lg bg-gradient-to-t from-zinc-700 to-transparent"></div>
                </div>

        </div>
    )
}