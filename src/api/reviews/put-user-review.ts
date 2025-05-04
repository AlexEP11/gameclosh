import { createClient } from "@/lib/supabase/client";

export async function putUserReview(
    newReview: string,
    newScore: number,
    reviewId: number
) {
    const supabase = createClient();

    const { error } = await supabase
        .from("reviews")
        .update({ review: newReview, score: newScore })
        .eq("id", reviewId);

    if (error) {
        console.error("Error al actualizar:", error.message);
    }
}
