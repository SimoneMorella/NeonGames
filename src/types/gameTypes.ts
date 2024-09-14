

export type SliderGame = {
    id: number;
    name: string;
    background_image: string;
}

export type SliderGameProps = {
    sliderGames: SliderGame[];
}

export type SliderApiResponse = {
    results: SliderGame[];
}