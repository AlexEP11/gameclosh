import { signInAction } from "@/app/actions";
import { AuthActtion, AuthMessage } from "@/components";
import { geistMono, titleFont } from "@/config/fonts";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "GameClosh | Iniciar Sesión",
};

interface Props {
    searchParams: Promise<{
        success?: string;
        error?: string;
    }>;
}

export default async function Login({ searchParams }: Props) {
    const { success, error } = await Promise.resolve(searchParams);

    const successMessage = success ? decodeURIComponent(success) : null;
    const errorMessage = error ? decodeURIComponent(error) : null;
    return (
        <form className="bg-oscuro shadow-xl flex flex-col p-10 rounded-3xl ">
            <h1
                className={`${titleFont.className} antialiased text-5xl font-bold`}
            >
                Iniciar Sesión
            </h1>

            <AuthMessage
                successMessage={successMessage}
                errorMessage={errorMessage}
                countdown
            />

            <p className="text-sm mt-2 flex justify-between">
                ¿Todavía no tienes una cuenta?{" "}
                <Link
                    className="group text-sm font-semibold relative ml-5 transition-all duration-300"
                    href="/sign-up"
                >
                    Registrate
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                </Link>
            </p>
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                <label
                    className={`${geistMono.className} antialiased font-semibold`}
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="rounded-md w-full p-2 bg-oscuro border-b-2 border-gray-200 text-sm trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    required
                />
                <div className="flex justify-between items-center mt-2">
                    <label
                        className={`${geistMono.className} antialiased font-semibold`}
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <Link
                        className="group text-sm font-semibold relative ml-5 transition-all duration-300"
                        href="/forgot-password"
                    >
                        ¿Olvidaste tu contraseña?
                        <span className="absolute left-0 -bottom-1 h-[3px] w-full scale-x-0 transform bg-gradient-to-r from-amber-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-left" />
                    </Link>
                </div>
                <input
                    className="rounded-md w-full p-2 bg-oscuro border-b-2 border-gray-200 text-sm trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
                    type="password"
                    name="password"
                    placeholder="Tu contraseña"
                    required
                />

                <AuthActtion
                    action={signInAction}
                    actionName="Iniciar Sesión"
                />
            </div>
        </form>
    );
}
