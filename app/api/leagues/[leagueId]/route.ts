import { cookies } from "next/headers";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

type Params = {
    leagueId: number;
};

export async function PATCH(
    request: Request,
    { params }: { params: Promise<Params> }
) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        return new Response("Token Bulunamadı", { status: 401 });
    }

    const { leagueId } = await params;
    const body = await request.json();

    const res = await fetch(`${BASE_URL}/league/${leagueId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
    });

    if (!res.ok) {
        return new Response("Lig güncellenemedi", { status: 500 });
    }

    return Response.json({});
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<Params> }
) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        return new Response("Token Bulunamadı", { status: 401 });
    }

    const { leagueId } = await params;

    const res = await fetch(`${BASE_URL}/league/${leagueId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!res.ok) {
        return new Response("Lig silinemedi", { status: 500 });
    }

    return Response.json({});
}