import { fetchSliderGames } from "./apiCall";


////remember to remove all the default later if I need to

export default async function loadSliderGames() {
    try {
        const results = await fetchSliderGames();
        console.log(results);
        return results;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Error in loading fetched Data: ${err.message}`);
        } else {
            throw new Error('Error in loading fetched Data: unknown error')
        }
        
    }
}