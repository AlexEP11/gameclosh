import { Review } from "@/interfaces";
import { Rating } from "@mui/material";

interface Props {
    review: Review;
}

export const GameReview = ({ review }: Props) => {
    return (
        <article className="w-full mt-10 p-6 bg-neutral-800 rounded-lg border-l-4 border-rose-500 shadow-lg hover:shadow-rose-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                    {review.profile?.username.charAt(0).toUpperCase()}
                </div>
                <h4 className="text-lg font-bold text-amber-400">
                    {review.profile?.username}
                </h4>
            </div>

            {/* Contenido y rating */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="text-gray-300 leading-relaxed flex-1">
                    {review.review}
                </p>
                <div className="flex items-center gap-5">
                    <Rating defaultValue={review.score} readOnly />
                    <span className="text-amber-400 font-bold">
                        {review.score.toFixed(1)}
                    </span>
                </div>
            </div>

            {/* Fecha con estilo discreto */}
            <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                    Publicado el{" "}
                    {new Date(review.review_date).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
            </div>
        </article>
    );
};
