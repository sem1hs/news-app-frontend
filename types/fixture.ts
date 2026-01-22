export type Fixture = {
    id: number;
    leagueId: number;
    week: number;
    matchDate: string;
    homeTeamId: number;
    awayTeamId: number;
    homeScore: number | null;
    awayScore: number | null;
    stadium: string | null;
    season: string | null;
    status: "SCHEDULED" | "LIVE" | "FINISHED";
}


export type FixtureResponse = {
    id: number;
    leagueName: string;
    week: number;
    matchDate: string;
    homeTeamName: string;
    awayTeamName: string;
    homeScore: number | null;
    awayScore: number | null;
    stadium: string | null;
    season: string;
    status: "SCHEDULED" | "LIVE" | "FINISHED";
}

export type TodayFixtureResponse = Record<string, FixtureResponse[]>;

export type FixtureStatus = "SCHEDULED" | "LIVE" | "FINISHED";

export const FIXTURE_STATUS_LABEL: Record<FixtureStatus, string> = {
    SCHEDULED: "Planlandı",
    LIVE: "Canlı",
    FINISHED: "Bitti"
};