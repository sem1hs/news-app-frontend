import { Params } from "next/dist/server/request/params";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000/api/v1";

export async function GET(request: Request,
    { params }: { params: Promise<Params> }) {

    const { leagueName } = await params;

    const res = await fetch(`${BASE_URL}/league/${leagueName}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        return new Response("Lig getirilemedi", { status: 500 });
    }

    return Response.json(await res.json());
}