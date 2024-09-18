

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

type PlatformsObj = {
    "platform": {
        id: number,
        name: string,
    }
}

type Developer = {
    id: number,
    name: string,
}

type Genre = {
    id: number,
    name: string,
}

type Publisher = {
    id: number,
    name: string,
}

export type GameDataAlt = {
    id: number;
    name: string;
    description: string;
    metacritic: number | null;
    released: string;
    background_image: string;
    background_image_additional?: string;
    parent_platforms: PlatformsObj[];
    developers: Developer[];
    genres: Genre[];
    publishers: Publisher[];
}

export type Screenshots = {
    id: number;
    image: string;
    width: number;
    height: number;
}

export type ScreenshotsResponse = {
    results: Screenshots[];
}

export type GamePageData = {
    game: GameDataAlt;
    screenshots: Screenshots[];
}

