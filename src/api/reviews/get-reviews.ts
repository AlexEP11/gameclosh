import { createClient } from "@/lib/supabase/client";

export async function getGameReviews(slug: string) {
    const supabase = createClient();

    // 1. Obtener el videojuego
    const { data: game, error: gameError } = await supabase
        .from("videogames")
        .select("id")
        .eq("id_api_rawg", slug)
        .single();

    if (gameError || !game) return [];

    // 2. Obtener solo las reviews (sin perfiles)
    const { data: reviews, error: reviewsError } = await supabase
        .from("reviews")
        .select("id, score, review, review_date, id_profile")
        .eq("id_videogame", game.id)
        .order("review_date", { ascending: false });

    if (reviewsError || !reviews) return [];

    // 3. Obtener todos los perfiles necesarios en una sola consulta
    const profileIds = reviews.map((r) => r.id_profile).filter(Boolean);

    const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("id, username")
        .in("id", profileIds);

    if (profilesError) return [];

    // 4. Combinar los datos
    return reviews.map((review) => {
        const profile = profiles.find((p) => p.id === review.id_profile);
        return {
            ...review,
            profile: profile || null,
        };
    });
}
