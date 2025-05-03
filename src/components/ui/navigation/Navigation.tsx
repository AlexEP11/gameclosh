import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { AuthButton } from "../auth-button/AuthButton";
import { SearchInput } from "../search-input/SearchInput";

export const Navigation = () => {
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

            <AuthButton />
            <SearchInput />
        </nav>
    );
};
