import { Hero } from "@/components";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Hero title={false} />
            <div className="absolute inset-0 z-50 flex flex-col px-5 items-center justify-center">
                {children}
            </div>
        </>
    );
}
