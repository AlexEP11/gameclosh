import { getUserReviews } from "@/api";
import { ReviewGrid } from "@/components/reviews/review-grid/ReviewGrid";
import { titleFont } from "@/config/fonts";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ReviewsPage() {
    const supabase = createClient();
    const user = (await supabase).auth.getUser();
    if (!(await user).data.user?.identities) {
        return redirect("/sign-in");
    }

    const reviews = await getUserReviews(user, supabase);

    return (
        <>
            <h1
                className={`${titleFont.className} antialiased text-center mt-10 text-4xl lg:text-6xl font-bold`}
            >
                Mis Reseñas
            </h1>

            <ReviewGrid reviews={reviews} />
        </>
    );
}
