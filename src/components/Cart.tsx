import useGameContext from "../context/contextHook"
import { IoMdCloseCircle } from "react-icons/io";


// let's finish cart tomorrow!
export default function Cart() {
    const { cart, removeFromCart, clearCart } = useGameContext(); 
    return (
        <div className="font-montserrat w-full h-full flex flex-col gap-2 text-white py-4 px-2">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold">{cart.length} Games</h3>
                <button 
                    onClick={() => clearCart()}
                    className="text-white text-opacity-60 text-sm font-bold">
                    Clear
                </button>
            </div>
            <div className="flex-1 py-4 space-y-1 overflow-auto scroll-content">
                {cart.map(game => {
                    return (
                        <div 
                            key={game.id}
                            className="rounded-lg relative w-full min-h-20 bg-black bg-opacity-40 px-2 py-[6px] flex gap-2 items-center">
                            <div
                                style={{
                                    backgroundImage: `url(${game.background_image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '74px',
                                    width: '52px',
                                    borderRadius: '2px',
                                }}>
                            </div>
                            <div className="flex-1 h-full flex flex-col justify-center">
                                <h4 className="font-bold text-[13px]">{game.name}</h4>
                                <div className="text-xs">{game.price}</div>
                            </div>
                            <button
                                onClick={() => removeFromCart(game.id)} 
                                className="absolute top-1 right-1">
                                <IoMdCloseCircle className=" w-4 h-4 text-white"/>
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center justify-between">
                <span className="text-white text-opacity-60 text-sm font-bold">Total:</span> 
                    <span className="font-bold ">
                        {cart.reduce((sum, game) => {
                            if (game.price) {
                                return sum + Number(game.price.slice(0, -1).replace(",", "."));
                            }
                            return sum;
                        }, 0).toFixed(2)}
                        €
                    </span>
            </div>

        </div>
    )

}