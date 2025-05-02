import { getGames } from "@/api";
import { GamesGrid } from "@/components/";
import { geistMono, titleFont } from "@/config/fonts";
import Link from "next/link";

interface Props {
    params: Promise<{ page: string }>;
}

export default async function GamesPage({ params }: Props) {
    const { page } = await params;

    const games = await getGames(page);
    return (
        <div className="p-6">
            <h1
                className={`${titleFont.className} text-5xl font-bold mb-6 text-center`}
            >
                Juegos
            </h1>

            <GamesGrid games={games.results} />

            <div className="flex justify-between mt-8">
                {games.previous && (
                    <Link
                        href={`/games/${Number(page) - 1}`}
                        className={`${geistMono.className} bg-amber-600 text-white px-4 py-2 rounded-md antialiased font-bold transition-all duration-300 hover:scale-105 hover:bg-amber-700`}
                    >
                        Anterior
                    </Link>
                )}
                {games.next && (
                    <Link
                        href={`/games/${Number(page) + 1}`}
                        className={`${geistMono.className} bg-fuchsia-600 text-white px-4 py-2 rounded-md antialiased font-bold transition-all duration-300 hover:scale-105 hover:bg-fuchsia-700`}
                    >
                        Siguiente
                    </Link>
                )}
            </div>
        </div>
    );
}
