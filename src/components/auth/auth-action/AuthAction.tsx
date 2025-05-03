import { geistMono } from "@/config/fonts";

interface Props {
    action: (formData: FormData) => void;
    actionName: string;
}

export const AuthActtion = ({ action, actionName }: Props) => {
    return (
        <button
            className={`${geistMono.className} mt-5 bg-gradient-to-r from-amber-500 via-rose-400 to-fuchsia-600 text-white p-2 rounded-md antialiased font-bold text-xl transition-all duration-300 hover:scale-105 hover:bg-fuchsia-700`}
            formAction={action}
        >
            {actionName}
        </button>
    );
};
