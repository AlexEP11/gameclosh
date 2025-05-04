"use client";

import { FormEvent, useState } from "react";
import { geistMono } from "@/config/fonts";
import { createClient } from "@/lib/supabase/client";
import { Game } from "@/interfaces";
import { Rating } from "@mui/material";
import { redirect } from "next/navigation";

interface Props {
    slug: string;
    gameData: Game;
}

export const GameReviewInput = ({ gameData, slug }: Props) => {
    const [review, setReview] = useState("");
    const [score, setScore] = useState<number | null>(5);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const supabase = createClient();

        const user = (await supabase.auth.getUser()).data.user;
        if (!user) {
            redirect("/sign-in");
        }

        // 1. Insertar juego si no existe
        const { data: videogame } = await supabase
            .from("videogames")
            .select("id")
            .eq("id_api_rawg", slug)
            .single();

        let id_videogame;

        if (videogame) {
            id_videogame = videogame.id;
        } else {
            const { data: newGame, error } = await supabase
                .from("videogames")
                .insert({
                    id_api_rawg: slug,
                    title: gameData.name,
                    released: gameData.released,
                    image_url: gameData.background_image,
                })
                .select()
                .single();

            if (error) {
                console.error("Error insertando juego:", error.message);
                return;
            }

            id_videogame = newGame.id;
        }

        // 2. Insertar reseña
        const { error: errorReview } = await supabase.from("reviews").insert({
            id_profile: user.id,
            id_videogame,
            score: score || 1,
            review,
        });

        setReview("");

        if (errorReview) {
            console.error("Error insertando reseña:", errorReview.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-10 lg:gap-0  lg:flex-row justify-between items-center">
                <input
                    type="text"
                    className="rounded-md w-10/12 p-2 bg-oscuro border-b-2 border-gray-200 text-xl transition-all duration-300  focus:outline-none focus:border-fuchsia-500"
                    placeholder="Escribe tu reseña"
                    maxLength={500}
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <Rating
                    value={score}
                    size="large"
                    className="lg:mt-5"
                    onChange={(event, newValue) => {
                        setScore(newValue);
                    }}
                />
            </div>
            <div className="flex justify-center gap-10 mt-5 lg:justify-between items-center ">
                <input
                    type="reset"
                    value="Cancelar"
                    className={`${geistMono.className} mt-5 bg-neutral-700 text-white p-2 rounded-md antialiased font-bold cursor-pointer transition-all duration-300  hover:bg-neutral-800`}
                    onClick={() => setReview("")}
                />
                <input
                    type="submit"
                    value="Publicar"
                    className={`${geistMono.className} mt-5 bg-fuchsia-600 text-white p-2 rounded-md antialiased font-bold cursor-pointer transition-all duration-300  hover:bg-fuchsia-700`}
                />
            </div>
        </form>
    );
};
