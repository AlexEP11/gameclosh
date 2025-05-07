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
    openGraph: {
        title: "GameClosh | Juegos y Reseñas",
        description:
            "Reseñas imparciales, análisis detallados y calificaciones de videojuegos. Únete a la comunidad gamer.",
        url: "https://gameclosh.vercel.app/",
        siteName: "GameClosh",
        images: [
            {
                url: "https://gameclosh.vercel.app/logos/gameclosh.jpg",
                width: 1200,
                height: 630,
                alt: "GameClosh - Reseñas de videojuegos",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GameClosh | Juegos y Reseñas",
        description:
            "Descubre análisis y reseñas imparciales sobre videojuegos. Publica tus opiniones.",
        images: ["https://gameclosh.vercel.app/logos/gameclosh.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    metadataBase: new URL("https://gameclosh.vercel.app/"),
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
