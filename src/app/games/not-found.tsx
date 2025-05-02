import { geistMono, titleFont } from "@/config/fonts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "GameClosh | 404 ",
};

export default function NotFoundPage() {
    return (
        <div className="my-20 flex flex-col items-center justify-center gap-10">
            <h1
                className={`${titleFont.className} antialiased text-5xl text-center `}
            >
                ¡Game Over!
            </h1>
            <h2
                className={`${titleFont.className} antialiased text-3xl text-center `}
            >
                La página o juego que buscas no existe. ¿Quizás escribiste mal
                el nombre?
            </h2>
            <Image
                src="/not-found/page-not-found.png"
                alt="Imagen de pagina no encontrada"
                width={800}
                height={500}
            />
            <Link
                href="/"
                className={`${geistMono.className} bg-gradient-to-r from-amber-500 via-rose-400 to-fuchsia-600 text-white px-4 py-2 rounded-md antialiased font-bold text-2xl transition-all duration-300 hover:scale-105 hover:bg-fuchsia-700`}
            >
                Inicio
            </Link>
        </div>
    );
}
