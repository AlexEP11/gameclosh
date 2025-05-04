import { UserReview } from "@/interfaces";
import { SupabaseClient, UserResponse } from "@supabase/supabase-js";

export async function getUserReviews(
    user: Promise<UserResponse>,
    supabase: Promise<SupabaseClient>
) {
    // 1. Obtener reseñas
    const { data: reviewsData, error: reviewsError } = await (
        await supabase
    )
        .from("reviews")
        .select("id, review, score, review_date, id_videogame")
        .eq("id_profile", (await user).data.user?.id)
        .order("review_date", { ascending: false });

    if (reviewsError || !reviewsData) {
        return [];
    }

    // 2. Obtener videojuegos
    const { data: videogamesData, error: gamesError } = await (
        await supabase
    )
        .from("videogames")
        .select("id,id_api_rawg, title, image_url")
        .in(
            "id",
            reviewsData.map((r) => r.id_videogame)
        );

    if (gamesError || !videogamesData) {
        console.error("Error al obtener videojuegos:", gamesError?.message);
        return [];
    }

    // 3. Combinar como en tu ejemplo
    const combinedReviews: UserReview[] = reviewsData.map((review) => {
        const game = videogamesData.find((g) => g.id === review.id_videogame);
        return {
            ...review,
            videogames: game || {
                id: 0,
                id_api_rawg: "",
                title: "Desconocido",
                image_url: "",
            },
        };
    });

    return combinedReviews;
}
