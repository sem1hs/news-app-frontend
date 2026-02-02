const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

export async function GET(
    request: Request,
) {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();

    const res = await fetch(`${BASE_URL}/news/popular${queryString ? `?${queryString}` : ""}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!res.ok) {
        return new Response("Son Dakika Haberleri getirilemedi", { status: 500 });
    }

    return Response.json(await res.json());
}
