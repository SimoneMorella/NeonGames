import axios from 'axios';
import get30DaysGap, { get30DaysNextGap } from '../utils/utilities';
import { SliderApiResponse, SliderGame, ScreenshotsResponse, GameDataAlt } from '../types/gameTypes';
import { generatePrice } from '../utils/utilities';

const URL = 'https://api.rawg.io/api/games?key=174131b6a816487ebd53103081309606';

export async function fetchSliderGames(filter: string): Promise<SliderGame[]> {
    let url_slider = URL;
    switch (filter) {
        case 'hottest':
            url_slider = `${URL}&dates=${get30DaysGap()}&ordering=-rating&page_size=6`;
            break;
        case "goat":
            url_slider = `${URL}&ordering=-added&page_size=5&exclude_additions&parent_platforms=1,2,3`;
            break;
        case "preorder":
            url_slider = `${URL}&ordering=-added&page_size=5&dates=${get30DaysNextGap()}`
            break;
        case "bestLastYear": 
            url_slider = `${URL}&ordering=-added&page_size=5&dates=${new Date().getFullYear() - 1}-01-01,${new Date().getFullYear() - 1}-12-31`;
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

export async function fetchGamesList(params: { [key: string]: string }): Promise<SliderGame[]> {
    try {
        const query = new URLSearchParams(params).toString();
        const url = `${URL}&${query}`;  // Assuming URL is your base API URL
        const response = await axios.get(url);
        const data: SliderApiResponse = response.data;
        return data.results;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch RAWG data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch RAWG data: Unknown error.');
        }
    }
}

export async function fetchGameData(id: number) {
    try {
        const url = `${URL.split('?')[0]}/${id}?${URL.split('?')[1]}`;
        const response = await axios.get(url);
        const data: GameDataAlt = response.data;
        return data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch RAWG data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch RAWG data: Unknown error.');
        }
    }
}

export async function fetchGameScreenshots(id: number) {
    try {
        const url = `${URL.split('?')[0]}/${id}/screenshots?${URL.split('?')[1]}`;
        const response = await axios.get(url);
        const data: ScreenshotsResponse = response.data;
        return data.results;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch RAWG data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch RAWG data: Unknown error.');
        }
    }
}

export async function fetchGameQuery(query: string): Promise<SliderGame[]> {
    try {
        const url = `${URL}&search_precise&page_size=5&search=${query}`;
        const response = await axios.get(url);
        const data: SliderApiResponse = response.data;
        const resultsWPrice = data.results.map((game) => ({
            ...game,
            price: generatePrice(),
        }))
        return resultsWPrice;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch RAWG data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch RAWG data: Unknown error.');
        }
    }
}
