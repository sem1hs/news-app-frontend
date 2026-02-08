import { cookies } from "next/headers";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

type Params = {
    leagueId: number;
    teamId: number;
};

export async function DELETE(
    request: Request,
    { params }: { params: Promise<Params> }
) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        return new Response("Token Bulunamadı", { status: 401 });
    }

    const { leagueId, teamId } = await params;

    const res = await fetch(`${BASE_URL}/standing/${leagueId}/${teamId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!res.ok) {
        return new Response("Puan Durumu silinemedi", { status: 500 });
    }

    return Response.json({});
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<Params> }
) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        return new Response("Token Bulunamadı", { status: 401 });
    }

    const { leagueId, teamId } = await params;
    const body = await request.json();

    const res = await fetch(`${BASE_URL}/standing/${leagueId}/${teamId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
    });

    if (!res.ok) {
        return new Response("Puan durumu güncellenemedi", { status: 500 });
    }

    return Response.json({});
}
