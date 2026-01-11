import { TeamResponse } from "@/types/teams";

export async function fetchTeams(leagueId: number): Promise<TeamResponse[]> {
  const res = await fetch(`/api/teams?leagueId=${leagueId}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Takımlar getirilemedi");
  }

  return res.json();
}
