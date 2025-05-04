interface Profile {
    id: string;
    username: string;
}

export interface Review {
    id: number;
    review: string;
    review_date: Date;
    score: number;
    id_profile: string | null;
    profile: Profile | null;
}

export interface UserReview {
    id: number;
    review: string;
    score: string;
    review_date: string;
    videogames: {
        id: number;
        id_api_rawg: string;
        title: string;
        image_url: string;
    };
}
