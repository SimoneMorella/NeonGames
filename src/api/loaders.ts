import { fetchSliderGames } from "./apiCall";

export default async function loadSliderGames() {
    try {
        const results = await fetchSliderGames();
        return results;
    } catch (err) {
        throw new Error(`Loader Error: ${err.message}`);
    }

}