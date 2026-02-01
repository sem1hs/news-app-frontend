import { StandingResponse } from "@/types/standing";

export async function fetchStandingsByLeagueId(leagueId: number): Promise<StandingResponse[]> {
    const params = new URLSearchParams();

    params.append("leagueId", leagueId.toString());

    const res = await fetch(`/api/standings?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Puan durumu getirilemedi");
    }

    return res.json();
}