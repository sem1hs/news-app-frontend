export type StandingResponse = {
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
};
