import { Countdown } from "@/components";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "GameClosh | Verificado",
};

export default async function ProtectedPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }

    return (
        <div className="bg-oscuro shadow-xl flex flex-col p-10 rounded-3xl">
            <div className="w-full">
                <div className="text-2xl p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
                    <Countdown
                        message="Email verificado correctamente, redirigiendo en "
                        countdown={5}
                        redirectTo="/"
                    />
                </div>
            </div>
        </div>
    );
}
