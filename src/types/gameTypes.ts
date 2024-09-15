

export type SliderGame = {
    id: number;
    name: string;
    background_image: string;
    price?: string;
}

export type GameProp = {
    game: SliderGame;
}

export type SliderPageGames = {
    "hottest": SliderGame[];
    "goat": SliderGame[];
}

export type SliderGameProps = {
    sliderGames: SliderPageGames;
}

export type SliderApiResponse = {
    results: SliderGame[];
}