import { fetchSliderGames, fetchGamesList } from "./apiCall";
import { SliderPageGames } from "../types/gameTypes";
import { generatePrice, getQueryParameters } from "../utils/utilities";
import { LoaderFunctionArgs } from "react-router-dom";


////remember to remove all the default later if I need to
// remember now for creating the loader for GamesList, to change all paths in navigation.tsx
// so I can use params 

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
// not working and still I don't like it
// export async function loadGamesList({ request }: LoaderFunctionArgs) {
//     try {
//         const { search } = new URL(request.url);
//         const { ordering, page_size, dates, genres, platforms } = getQueryParameters(search);
//         const response = await fetchGamesList(`ordering=${ordering}&page_size=${page_size}&dates=${dates}&genres=${genres}&parent_platforms=${platforms}`)
//         return response;
//     } catch (err) {
//         if (err instanceof Error) {
//             throw new Error(`Error in loading fetched Data: ${err.message}`);
//         } else {
//             throw new Error('Error in loading fetched Data: unknown error')
//         }
        
//     }
// }


export async function loadGamesList({ request }: LoaderFunctionArgs) {
    try {
        const { search } = new URL(request.url);
        const { ordering, page_size, dates, genres, platforms } = getQueryParameters(search);

        // Build the parameters object
        const params = {
            ordering,
            page_size,
            dates,
            genres,
            parent_platforms: platforms
        };

        // Remove empty parameters
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== ""));
        const response = await fetchGamesList(filteredParams);
        const responseWPrice = response.map((item) => ({
            ...item,
            price: generatePrice()
        }))
        return responseWPrice;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Error in loading fetched Data: ${err.message}`);
        } else {
            throw new Error('Error in loading fetched Data: unknown error');
        }
    }
}

