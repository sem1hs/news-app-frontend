import { cookies } from "next/headers";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000/api/v1";

export async function GET() {
  const res = await fetch(`${BASE_URL}/league`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return new Response("Ligler getirilemedi", { status: 500 });
  }

  return Response.json(await res.json());
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return new Response("Token Bulunamadı", { status: 401 });
  }

  const body = await request.json();

  const res = await fetch(`${BASE_URL}/league`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!res.ok) {
    return new Response("Lig Oluşturulamadı", { status: 500 });
  }

  return Response.json(await res.json());
}