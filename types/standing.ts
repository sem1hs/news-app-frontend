export type StandingResponse = {
    id: number;
    leagueId: number;
    teamId: number;
    leagueName: string;
    teamName: string;
    played: number;
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
    isBreaking: boolean;
};

export type StandingCreateRequest = {
    leagueId: number;
    teamId: number;
    played: number;
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
};

export type StandingUpdateRequest = {
    leagueId: number;
    teamId: number;
    played?: number;
    won?: number;
    draw?: number;
    lost?: number;
    goalsFor?: number;
    goalsAgainst?: number;
};