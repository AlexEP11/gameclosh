import Image from "next/image";

interface Props {
    isVideo: boolean;
    mediaUrl: string;
    preview: string | null;
    name: string;
}

export const GamePreview = ({ isVideo, mediaUrl, preview, name }: Props) => {
    return (
        <div className="col-span-1 lg:col-span-2">
            <div className="relative w-full max-w-5xl mx-auto my-8 overflow-hidden rounded-lg shadow-2xl aspect-video">
                {isVideo ? (
                    <video
                        muted
                        loop
                        controls
                        className="w-full h-full object-cover"
                        poster={preview || "/placeholder/video-placeholder.png"}
                    >
                        <source src={mediaUrl} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>
                ) : (
                    <Image
                        src={mediaUrl || "/not-found/image-not-found.png"}
                        alt={`Imagen de ${name}`}
                        fill
                        className="object-cover"
                        quality={85}
                        priority
                    />
                )}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
            </div>
        </div>
    );
};
