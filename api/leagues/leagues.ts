import { CreateLeagueRequest, LeagueResponse, UpdateLeagueRequest } from "@/types/league";

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

export async function createLeague(
  league: CreateLeagueRequest
): Promise<LeagueResponse> {
  const res = await fetch("/api/leagues", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(league),
  });

  if (!res.ok) {
    throw new Error("Lig Oluşturulamadı");
  }

  return res.json();
}

export async function updateLeague(
  league: UpdateLeagueRequest
): Promise<LeagueResponse> {
  const res = await fetch(`/api/leagues/${league.id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(league),
  });

  if (!res.ok) {
    throw new Error("Lig Güncellenemedi");
  }

  return res.json();
}

export async function deleteLeague(leagueId: number): Promise<void> {
  const res = await fetch(`/api/leagues/${leagueId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Lig Silinemedi");
  }

  return res.json();
}