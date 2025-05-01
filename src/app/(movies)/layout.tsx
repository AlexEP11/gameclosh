export default function MoviesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto">{children}</div>
        </main>
    );
}
