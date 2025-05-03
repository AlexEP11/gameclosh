import { resetPasswordAction } from "@/app/actions";
import { AuthActtion, AuthMessage } from "@/components";
import { geistMono, titleFont } from "@/config/fonts";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "GameClosh | Actualizar Contraseña",
};

interface Props {
    searchParams: Promise<{
        success?: string;
        error?: string;
    }>;
}

export default async function ResetPassword({ searchParams }: Props) {
    const { success, error } = await Promise.resolve(searchParams);

    const successMessage = success ? decodeURIComponent(success) : null;
    const errorMessage = error ? decodeURIComponent(error) : null;

    return (
        <form className="bg-oscuro shadow-xl flex flex-col p-10 rounded-3xl ">
            <h1
                className={`${titleFont.className} antialiased text-5xl font-bold`}
            >
                Restablecer Contraseña
            </h1>

            <AuthMessage
                successMessage={successMessage}
                errorMessage={errorMessage}
                countdown
            />

            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-5">
                <label
                    className={`${geistMono.className} antialiased font-semibold`}
                    htmlFor="password"
                >
                    Nueva Contraseña
                </label>
                <input
                    className="rounded-md w-full p-2 bg-oscuro border-b-2 border-gray-200 text-sm trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
                    type="password"
                    name="password"
                    placeholder="Nueva contraseña"
                    required
                />
                <label
                    className={`${geistMono.className} antialiased font-semibold`}
                    htmlFor="confirmPassword"
                >
                    Confirma la contraseña
                </label>
                <input
                    className="rounded-md w-full p-2 bg-oscuro border-b-2 border-gray-200 text-sm trasniton-all duration-300  focus:outline-none focus:border-fuchsia-500"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                />
            </div>

            <AuthActtion
                action={resetPasswordAction}
                actionName="Restablecer Contraseña"
            />
        </form>
    );
}
