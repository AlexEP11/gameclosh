"use client";

import { titleFont } from "@/config/fonts";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navigation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            router.push(`/games/search/${searchQuery.trim()}`);
        }
    };

    return (
        <nav
            className={`${titleFont.className} antialiased my-10 mb-20 flex flex-col justify-center gap-6 items-center`}
        >
            <div className="flex gap-5 text-xl font-semibold">
                <Link
                    href="/"
                    className="group relative px-5 py-2 transition-all duration-300"
                >
                    Juegos
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </Link>
                <Link
                    href="/"
                    className="group relative px-5 py-2 transition-all duration-300"
                >
                    Reseñas
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </Link>
            </div>

            <Link
                href="/auth/login"
                className="group text-xl font-semibold relative px-5 py-2 transition-all duration-300"
            >
                Iniciar Sesión
                <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
            </Link>
            <input
                type="search"
                className="rounded-md w-3/4  p-2 bg-oscuro border-b-2 border-gray-200 text-xl trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
                placeholder="Buscar juegos"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
        </nav>
    );
};
