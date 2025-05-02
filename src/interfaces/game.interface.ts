export interface Game {
    id: number;
    slug: string;
    name: string;
    released: Date;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: JSON;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: JSON;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: Date;
    esrb_rating: EsrbRating;
    platforms: Platform[];
}

export interface EsrbRating {
    id: number;
    slug: string;
    name: string;
}

export interface Platform {
    platform: EsrbRating;
    released_at: string;
    requirements: Requirements;
}

export interface Requirements {
    minimum: string;
    recommended: string;
}

export interface GameDatails {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: MetacriticPlatform[];
    released: Date;
    tba: boolean;
    updated: Date;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: JSON;
    reactions: JSON;
    added: number;
    added_by_status: JSON;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: string;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: string;
    youtube_count: string;
    reviews_text_count: string;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    esrb_rating: EsrbRating;
    platforms: Platform[];
    parent_platforms: ParentPlatform[];
}

export interface ParentPlatform {
    platform: {
        id: number;
        name: string;
    };
}

export interface MetacriticPlatform {
    metascore: number;
    url: string;
}
export interface TrailersResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Trailer[];
}

export interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: {
        max: string;
    };
}
