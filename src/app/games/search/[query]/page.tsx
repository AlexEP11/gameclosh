import { getGamesbySearch } from "@/api";
import { GamesGrid } from "@/components/";
import { titleFont } from "@/config/fonts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "GameClosh | Busqueda ",
};

interface Props {
    params: {
        query: string;
    };
}
export default async function QueryPage({ params }: Props) {
    const { query } = await params;

    const games = await getGamesbySearch(query);

    if (games.length === 0) {
        return notFound();
    }

    return (
        <div className="p-6">
            <h1
                className={`${titleFont.className} text-5xl font-bold mb-6 text-center`}
            >
                {`Resultado de ${query}`}
            </h1>

            <GamesGrid games={games} />
        </div>
    );
}
