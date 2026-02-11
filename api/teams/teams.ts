import { TeamCreateRequest, TeamResponse, TeamUpdateRequest } from "@/types/teams";

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

export async function createTeam(
  team: TeamCreateRequest
): Promise<TeamResponse> {
  const res = await fetch("/api/teams", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(team),
  });

  if (!res.ok) {
    throw new Error("Takım Oluşturulamadı");
  }

  return res.json();
}

export async function updateTeam(
  team: TeamUpdateRequest
): Promise<TeamResponse> {
  const res = await fetch(`/api/teams/${team.id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(team),
  });

  if (!res.ok) {
    throw new Error("Takım Güncellenemedi");
  }

  return res.json();
}

export async function deleteTeam(teamId: number): Promise<void> {
  const res = await fetch(`/api/teams/${teamId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Takım Silinemedi");
  }

  return res.json();
}