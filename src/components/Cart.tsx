import useGameContext from "../context/contextHook"

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useGameContext(); 
    return (
        <div className="font-montserrat w-full flex flex-col">
            <div>
                <h3>{cart.length} Games</h3>
            </div>
        </div>
    )

}