import { Hero, Navigation } from "@/components";

export default function GamesLayout({
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
