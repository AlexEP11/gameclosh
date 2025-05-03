import { signOutAction } from "@/app/actions";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const AuthButton = async () => {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    return (
        <>
            {data.user ? (
                <button
                    onClick={signOutAction}
                    className="group text-xl font-semibold relative px-5 py-2 transition-all duration-300 cursor-pointer"
                >
                    Cerrar Sesión
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </button>
            ) : (
                <Link
                    href="/sign-in"
                    className="group text-xl font-semibold relative px-5 py-2 transition-all duration-300"
                >
                    Iniciar Sesión
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </Link>
            )}
        </>
    );
};
