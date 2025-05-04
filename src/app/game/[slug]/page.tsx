import { getGameDatails, getGameTrailers } from "@/api";
import { GameDatails, Trailer } from "@/interfaces";
import { titleFont } from "@/config/fonts";
import { GameDescription, GamePreview, GameReviews } from "@/components";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function GamePage({ params }: Props) {
    const { slug } = await params;

    const gameData: GameDatails = await getGameDatails(slug);
    const gameTrailers: Trailer = await getGameTrailers(slug);

    const mediaUrl = gameTrailers?.data?.max || gameData.background_image;
    const isVideo = !!gameTrailers?.data?.max;
    return (
        <>
            <div className="flex flex-col items-center justify-center mb-10">
                <h1
                    className={`${titleFont.className} antialiased text-2xl lg:text-6xl text-center font-bold mt-20 px-2`}
                >
                    {gameData.name}
                    <span className="w-full h-1 bg-gradient-to-r from-fuchsia-600 via-rose-400 to-amber-400 block"></span>
                </h1>
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 2xl:px-0">
                <GamePreview
                    isVideo={isVideo}
                    mediaUrl={mediaUrl}
                    preview={gameTrailers?.preview}
                    name={gameData.name}
                />

                <GameDescription
                    description={gameData.description}
                    parentPlatform={gameData.parent_platforms}
                />
            </section>
            <GameReviews slug={slug} gameData={gameData} />
        </>
    );
}
