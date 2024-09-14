import axios from 'axios';


const URL = 'https://api.rawg.io/api/games?key=174131b6a816487ebd53103081309606';
const URL_Slider = 'https://api.rawg.io/api/games?key=174131b6a816487ebd53103081309606&dates=2024-08-14,2024-09-14&ordering=-rating&page_size=5'

export default async function fetchAllGames() {
    try {
        const response = await axios.get(URL);
        return response.data.results;
    } catch (err) {
        return err;
    }
}

export async function fetchSliderGames() {
    try {
        const response = await axios.get(URL_Slider);
        return response.data.results;
    } catch (err) {
        throw new Error(`Failed to fetch RAWG data :( ${err.message} )`)
    }
}