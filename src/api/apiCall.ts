import axios from 'axios';


const URL = 'https://api.rawg.io/api/games?key=174131b6a816487ebd53103081309606';

export default async function fetchAllGames() {
    try {
        const response = await axios.get(URL);
        return response.data.results;
    } catch (err) {
        return err;
    }

}