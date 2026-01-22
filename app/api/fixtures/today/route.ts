const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000/api/v1";

export async function GET() {
    const res = await fetch(`${BASE_URL}/fixture/today`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        return new Response("Fikstür getirilemedi", { status: 500 });
    }

    return Response.json(await res.json());
}
