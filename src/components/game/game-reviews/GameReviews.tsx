"use client";

import { titleFont } from "@/config/fonts";
import { GameDatails, Review } from "@/interfaces";
import { GameReviewInput } from "./GameReviewInput";
import { GameReview } from "./GameReview";
import { getGameReviews } from "@/api";
import { useEffect, useState } from "react";

interface Props {
    slug: string;
    gameData: GameDatails;
}

export const GameReviews = ({ slug, gameData }: Props) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getGameReviews(slug);
            setReviews(reviews);
        };

        fetchReviews();
    }, [slug, reviews]);
    return (
        <section className="h-screen px-5">
            <h2
                className={`${titleFont.className} antialiased text-6xl font-bold text-center lg:text-start`}
            >
                Reseñas
            </h2>

            <GameReviewInput gameData={gameData} slug={slug} />

            {reviews.length === 0 ? (
                <h2
                    className={`${titleFont.className} antialiased mt-10 text-center text-xl lg:text-6xl font-semibold`}
                >
                    No hay reseñas de este juego...
                </h2>
            ) : (
                reviews.map((review) => (
                    <GameReview key={review.id} review={review} />
                ))
            )}
        </section>
    );
};
