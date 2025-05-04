"use client";

import { putUserReview } from "@/api/reviews/put-user-review";
import { geistMono, titleFont } from "@/config/fonts";
import { UserReview } from "@/interfaces";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
    setOpenModal: (bool: boolean) => void;
    review: UserReview;
}

export const ReviewModalPut = ({ setOpenModal, review }: Props) => {
    const [newScore, setNewScore] = useState<number | null>(
        Number(review.score)
    );
    const [newReview, setNewReview] = useState(review.review);

    const handlePut = async () => {
        await putUserReview(newReview, newScore || 1, review.id);
        setOpenModal(false);
    };
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                aria-hidden="true"
            />

            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative transform overflow-hidden rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl transition-all w-full max-w-2xl">
                    {/* Header con efecto gaming */}
                    <div className="bg-gradient-to-r from-amber-500/60 via-rose-400/70 to-fuchsia-600/60 p-4 ">
                        <h2
                            className={`${titleFont.className} text-3xl font-bold text-center`}
                        >
                            Editar Reseña
                        </h2>

                        <div className="flex items-center gap-3 mt-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden ">
                                <Image
                                    src={
                                        review.videogames.image_url ||
                                        "/default-game.jpg"
                                    }
                                    alt={review.videogames.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {review.videogames.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <Rating
                                        value={newScore}
                                        onChange={(_, value) =>
                                            setNewScore(value)
                                        }
                                    />
                                    <span className="text-amber-400 font-bold">
                                        {newScore}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handlePut} className="p-6">
                        <div className="mb-6">
                            <label
                                htmlFor="review-text"
                                className={`${geistMono.className} block text-sm font-medium text-gray-400 mb-2`}
                            >
                                TU OPINIÓN
                            </label>
                            <textarea
                                id="review-text"
                                className="w-full h-40 p-4 bg-neutral-800 rounded-lg text-gray-300 resize-none"
                                placeholder="Escribe tu reseña detallada..."
                                maxLength={500}
                                required
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                            />
                            <div
                                className={`${geistMono.className} text-xs text-gray-500 text-right mt-1`}
                            >
                                {newReview.length}/500 caracteres
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 border-t border-neutral-700 pt-4">
                            <button
                                type="button"
                                onClick={() => setOpenModal(false)}
                                className={`${geistMono.className}  px-6 py-2 bg-neutral-800 rounded-lg text-gray-300 hover:bg-neutral-700 transition-colors`}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className={`${geistMono.className} px-6 py-2 bg-amber-500/80 font-semibold text-white rounded-lg hover:opacity-80 transition-all flex items-center gap-2`}
                            >
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
