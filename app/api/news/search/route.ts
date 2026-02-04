import { NextRequest } from "next/server";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();

    const res = await fetch(`${BASE_URL}/news/search${queryString ? `?${queryString}` : ""}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        return new Response("Haberler getirilemedi", { status: 500 });
    }

    return Response.json(await res.json());
}