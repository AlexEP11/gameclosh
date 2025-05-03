"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            router.push(`/games/search/${searchQuery.trim()}`);
        }
    };
    return (
        <input
            type="search"
            className="rounded-md w-3/4  p-2 bg-oscuro border-b-2 border-gray-200 text-xl trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
            placeholder="Buscar juegos"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
        />
    );
};
