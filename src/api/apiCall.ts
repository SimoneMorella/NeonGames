import axios from 'axios';
import get30DaysGap from '../utils/utilities';
import { SliderApiResponse, SliderGame } from '../types/gameTypes';
//remember to remove all the default later if I need to

const URL = 'https://api.rawg.io/api/games?key=174131b6a816487ebd53103081309606';

export async function fetchSliderGames(filter: string): Promise<SliderGame[]> {
    let url_slider = URL;
    switch (filter) {
        case 'hottest':
            url_slider = `${URL}&dates=${get30DaysGap()}&ordering=-rating&page_size=5`;
            break;
        case "goat":
            url_slider = `${URL}&ordering=-added&page_size=5&exclude_additions&parent_platforms=1,2,3`;
            break;
    }
    try {
        const response = await axios.get(url_slider);
        const data: SliderApiResponse = response.data;
        return data.results;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch RAWG data: ${err.message} )`)
        } else {
            throw new Error('Failed to fetch RAWG data: Unknown error.')
        }

        
    }
}