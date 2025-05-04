import { Hero, Navigation } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GameClosh | Mis reseñas",
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <Hero />

            <div className="container mx-auto">
                <Navigation />
                {children}
            </div>
        </main>
    );
}
