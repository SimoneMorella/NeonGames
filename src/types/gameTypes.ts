

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
    "preorder": SliderGame[];
    "bestLastYear": SliderGame[];
}

export type SliderGameProps = {
    sliderGames: SliderPageGames;
}

export type SliderApiResponse = {
    results: SliderGame[];
}

export type ContextGameType = {
    favoriteGames: SliderGame[];
    addFavorite: (game: SliderGame) => void;
    removeFavorite: (gameId: number) => void;
    // then add for cart items
}