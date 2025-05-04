import { createClient } from "@/lib/supabase/client";

export async function deleteUserReview(reviewId: number) {
    const supabase = createClient();

    const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", reviewId);

    if (error) {
        console.error("Error deleting review:", error);
        throw error;
    }
    window.location.reload();
}
