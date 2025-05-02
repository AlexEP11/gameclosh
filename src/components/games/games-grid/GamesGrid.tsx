import { Game } from "@/interfaces";
import { GamesGridItem } from "./GamesGridItem";

interface Props {
    games: Game[];
}

export const GamesGrid = async ({ games }: Props) => {
    return (
        <main className="mt-10 px-5 grid grid-cols-1 justify-items-center gap-20 mb-10 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
                <GamesGridItem key={game.id} game={game} />
            ))}
        </main>
    );
};
