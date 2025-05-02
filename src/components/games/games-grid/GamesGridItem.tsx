import { Game } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
    game: Game;
}

export const GamesGridItem = ({ game }: Props) => {
    return (
        <article
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-900 hover:-translate-y-1 bg-[#1f1f1f]`}
        >
            <Link
                href={`/game/${game.slug}`}
                className="block h-full"
                aria-label={`Ver detalles de ${game.name}`}
            >
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={
                            game.background_image ||
                            "/not-found/image-not-found.png"
                        }
                        alt={
                            game.background_image
                                ? `Portada de ${game.name}`
                                : "Imagen no encotrada"
                        }
                        width={400}
                        height={225}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        priority
                    />

                    <span
                        className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm ${
                            game.metacritic >= 80
                                ? " bg-green-600 "
                                : game.metacritic >= 70
                                ? "bg-amber-600"
                                : game.metacritic >= 60
                                ? "bg-red-600"
                                : "bg-gray-400"
                        }`}
                    >
                        {game.metacritic || "N/A"}
                    </span>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-normal line-clamp-2 text-white mb-1">
                        {game.name}
                    </h3>

                    <div className="flex items-end justify-end gap-1 mt-2">
                        <p className="text-sm rounded-md font-bold bg-oscuro px-2 py-1">
                            Calificaciones:
                            <span> {game.ratings_count}</span>
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    );
};
