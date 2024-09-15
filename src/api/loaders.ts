import { fetchSliderGames } from "./apiCall";
import { SliderPageGames } from "../types/gameTypes";
import { generatePrice } from "../utils/utilities";


////remember to remove all the default later if I need to

export default async function loadSliderGames(): Promise<SliderPageGames> {
    try {
        const [hottestResult, goatResult] = await Promise.all([
                fetchSliderGames("hottest"),
                fetchSliderGames("goat"),
            ])
        const goatWPrice = goatResult.map(game => ({
            ...game,
            price: generatePrice()
        }))
        console.log([hottestResult, goatWPrice]);
        return {
            hottest: hottestResult,
            goat: goatWPrice,
        }
        
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Error in loading fetched Data: ${err.message}`);
        } else {
            throw new Error('Error in loading fetched Data: unknown error')
        }
        
    }
}