import { StandingCreateRequest, StandingResponse, StandingUpdateRequest } from "@/types/standing";

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

export async function createStanding(
    standing: StandingCreateRequest
): Promise<StandingResponse> {
    const res = await fetch("/api/standings", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(standing),
    });

    if (!res.ok) {
        throw new Error("Puan Durumu Oluşturulamadı");
    }

    return res.json();
}

export async function updateStanding(
    standing: StandingUpdateRequest
): Promise<StandingResponse> {
    const res = await fetch(`/api/standings/${standing.leagueId}/${standing.teamId}`, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(standing),
    });

    if (!res.ok) {
        throw new Error("Puan Durumu Güncellenemedi");
    }

    return res.json();
}


export async function deleteStanding({ leagueId, teamId }: { leagueId: number, teamId: number }): Promise<void> {
    const res = await fetch(`/api/standings/${leagueId}/${teamId}`, {
        method: "DELETE",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Puan Durumu Silinemedi");
    }

    return res.json();
}
