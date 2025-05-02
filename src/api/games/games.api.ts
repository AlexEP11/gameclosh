export async function getGameDatails(slug: string) {
    const res = await fetch(
        `https://api.rawg.io/api/games/${slug}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
    );
    const data = await res.json();
    return data;
}

export async function getGameTrailers(slug: string) {
    const res = await fetch(
        `https://api.rawg.io/api/games/${slug}/movies?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
    );
    const data = await res.json();
    return data.results?.[0] || null;
}

export async function getGames(page: string) {
    const res = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page=${page}&page_size=20`,
        { next: { revalidate: 3600 } }
    );

    const data = await res.json();
    return data;
}

export async function getGamesbySearch(query: string) {
    const res = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&search=${query}&search_precise=true`
    );

    const data = await res.json();
    return data.results;
}
