const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000/api/v1";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const leagueId = Number(searchParams.get("leagueId"));

  const res = await fetch(`${BASE_URL}/teams?leagueId=${leagueId}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    return new Response("Takımlar getirilemedi", { status: 500 });
  }

  return Response.json(await res.json());
}
