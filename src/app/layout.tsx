import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";

export const metadata: Metadata = {
    title: "GameClosh | Juegos y Reseñas",
    description:
        "Descubre reseñas imparciales, análisis detallados y calificaciones de los últimos videojuegos. Comparte tus opiniones y debate con la comunidad gamer.",
    keywords: [
        "reseñas de videojuegos",
        "análisis de juegos",
        "calificaciones de videojuegos",
        "comunidad gamer",
        "GameClosh",
        "críticas de juegos",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
