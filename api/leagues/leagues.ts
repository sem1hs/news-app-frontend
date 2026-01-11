import { LeagueResponse } from "@/types/league";

export async function fetchLeagues(): Promise<LeagueResponse[]> {
  const res = await fetch("/api/leagues", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Ligler getirilemedi");
  }

  return res.json();
}
