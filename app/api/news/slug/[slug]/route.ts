const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

type Params = {
  slug: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  const res = await fetch(`${BASE_URL}/news/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    return new Response("Haberler silinemedi", { status: 500 });
  }

  return Response.json(await res.json());
}
