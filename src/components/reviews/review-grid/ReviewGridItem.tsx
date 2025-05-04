"use client";

import { ReviewModalDelete } from "../review-modal/ReviewModalDelete";
import { UserReview } from "@/interfaces";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ReviewModalPut } from "../review-modal/ReviewModalPut";

interface Props {
    review: UserReview;
}

export const ReviewGridItem = ({ review }: Props) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openPutModal, setOpenPutModal] = useState(false);
    return (
        <>
            <article className="relative bg-neutral-900 w-full max-w-xs rounded-xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 border border-neutral-700 hover:border-amber-500/30">
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden">
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

                    <div className="flex-1">
                        <Link href={`/game/${review.videogames.id_api_rawg}`}>
                            <h3 className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
                                {review.videogames.title}
                            </h3>
                        </Link>

                        <div className="flex items-center gap-2 mt-1">
                            <Rating value={Number(review.score)} readOnly />
                            <span className="text-amber-400 font-mono font-bold">
                                {Number(review.score).toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mb-4 max-w-60 overflow-hidden">
                    <p className="text-gray-300 whitespace-pre-line truncate">
                        {review.review}
                    </p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-neutral-700">
                    <span className="text-xs text-gray-500">
                        {new Date(review.review_date).toLocaleDateString(
                            "es-ES",
                            {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            }
                        )}
                    </span>

                    <div className="flex gap-3 p-2">
                        <button
                            className="cursor-pointer hover:scale-125 transition-all duration-300"
                            aria-label="Editar reseña"
                            title="Editar reseña"
                            onClick={() => setOpenPutModal(true)}
                        >
                            <Image
                                src="/reviews/edit.svg"
                                alt="Icono Editar"
                                width={25}
                                height={50}
                            />
                        </button>

                        <button
                            className="cursor-pointer hover:scale-125 transition-all duration-300"
                            aria-label="Eliminar reseña"
                            title="Eliminar reseña"
                            onClick={() => setOpenDeleteModal(true)}
                        >
                            <Image
                                src="/reviews/trash.svg"
                                alt="Icono Borrar"
                                width={25}
                                height={50}
                            />
                        </button>
                    </div>
                </div>
            </article>

            {openDeleteModal && (
                <ReviewModalDelete
                    setOpenModal={setOpenDeleteModal}
                    id={review.id}
                />
            )}
            {openPutModal && (
                <ReviewModalPut
                    setOpenModal={setOpenPutModal}
                    review={review}
                />
            )}
        </>
    );
};
