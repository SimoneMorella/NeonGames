import { fetchSliderGames } from "./apiCall";
import { SliderPageGames } from "../types/gameTypes";
import { generatePrice } from "../utils/utilities";


////remember to remove all the default later if I need to

export default async function loadSliderGames(): Promise<SliderPageGames> {
    try {
        const [hottestResult, goatResult, preorderResult, lastYearResult] = await Promise.all([
                fetchSliderGames("hottest"),
                fetchSliderGames("goat"),
                fetchSliderGames("preorder"),
                fetchSliderGames("bestLastYear"),
            ])
        const goatWPrice = goatResult.map(game => ({
            ...game,
            price: generatePrice()
        }))
        const preoderWPrice = preorderResult.map(game => ({
            ...game,
            price: generatePrice()
        }))
        const bestLastYearWPrice = lastYearResult.map(game => ({
            ...game,
            price: generatePrice()
        }))
        console.log([hottestResult, goatWPrice, preoderWPrice, bestLastYearWPrice]);
        return {
            hottest: hottestResult,
            goat: goatWPrice,
            preorder: preoderWPrice,
            bestLastYear: bestLastYearWPrice,
        }
        
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Error in loading fetched Data: ${err.message}`);
        } else {
            throw new Error('Error in loading fetched Data: unknown error')
        }
        
    }
}