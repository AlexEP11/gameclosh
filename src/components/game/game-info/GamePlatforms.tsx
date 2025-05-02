import { ParentPlatform } from "@/interfaces";
import Image from "next/image";
interface Props {
    platforms: ParentPlatform[];
}
export const GamePlatforms = ({ platforms }: Props) => {
    return (
        <div className="flex items-center justify-evenly mt-5 ">
            {platforms.map((platform) => (
                <Image
                    key={platform.platform.id}
                    src={`/platforms/${platform.platform.id}.svg`}
                    alt={`Plataforma ${platform.platform.name}`}
                    width={25}
                    height={50}
                    className="transition-all duration-300 hover:scale-150"
                />
            ))}
        </div>
    );
};
