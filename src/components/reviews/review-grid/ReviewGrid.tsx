import { titleFont } from "@/config/fonts";
import { UserReview } from "@/interfaces";
import { ReviewGridItem } from "./ReviewGridItem";

interface Props {
    reviews: UserReview[];
}

export const ReviewGrid = ({ reviews }: Props) => {
    return (
        <div>
            {reviews.length === 0 ? (
                <h2
                    className={`${titleFont.className} antialiased text-center my-20 text-2xl lg:text-4xl font-bold`}
                >
                    Todavía no has hecho ninguna reseña
                </h2>
            ) : (
                <section className="mt-10 grid grid-cols-1 justify-items-center gap-10 mb-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {reviews.map((review) => (
                        <ReviewGridItem key={review.id} review={review} />
                    ))}
                </section>
            )}
        </div>
    );
};
