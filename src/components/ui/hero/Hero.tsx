"use client";

import { titleFont } from "@/config/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

const imagesHero = [
    "/hero/nier-automata.webp",
    "/hero/elden-ring.webp",
    "/hero/bioshock.webp",
    "/hero/dishonored.webp",
];

interface Props {
    title?: boolean;
}

export const Hero = ({ title = true }: Props) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === imagesHero.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-[850px] relative overflow-hidden">
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-oscuro/70 to-oscuro" />

            <div className="absolute top-0 left-0 h-full w-full ">
                {title && (
                    <h1
                        className={`${titleFont.className} antialiased absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold`}
                    >
                        GameClosh
                    </h1>
                )}
                <div
                    className="flex transition-transform duration-1000 ease-in-out h-full "
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {imagesHero.map((src, index) => (
                        <div
                            key={index}
                            className="min-w-full h-full relative "
                        >
                            <Image
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
