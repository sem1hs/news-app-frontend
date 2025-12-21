import { cookies } from "next/headers";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

type Params = {
  id: string;
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

  const { id } = await params;

  const res = await fetch(`${BASE_URL}/news/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    return new Response("Haberler silinemedi", { status: 500 });
  }

  return Response.json({});
}
