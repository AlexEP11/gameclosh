import { ParentPlatform } from "@/interfaces";
import { GamePlatforms } from "./GamePlatforms";

interface Props {
    description: string;
    parentPlatform: ParentPlatform[];
}

export const GameDescription = ({ description, parentPlatform }: Props) => {
    return (
        <aside className="col-span-1 mt-6 text-sm text-justify leading-relaxed text-gray-200">
            <h3 className="text-lg font-bold">Descripción:</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
                className="overflow-y-auto max-h-1/2 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-oscuro"
            />
            <h3 className="text-lg font-bold mt-10">Plataformas:</h3>
            <GamePlatforms platforms={parentPlatform} />
        </aside>
    );
};
