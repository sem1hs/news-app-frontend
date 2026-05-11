export type LeagueResponse = {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
};

export type CreateLeagueRequest = {
  name: string;
  country: string;
  logoUrl: string;
}

export type UpdateLeagueRequest = {
  id?: number;
  name?: string;
  country?: string;
  logoUrl?: string;
};

export type League = {
  id: number;
  name: string;
  country: string;
  logoUrl?: string;
  maxWeek?: number;
};

export const LEAGUES: League[] = [
  { id: 10, name: "Premier League", country: "England", maxWeek: 38 },
  { id: 13, name: "Serie A", country: "Italy", maxWeek: 38 },
  { id: 11, name: "Bundesliga", country: "Germany", maxWeek: 34 },
  { id: 12, name: "Ligue 1", country: "France", maxWeek: 34 },
  { id: 9, name: "Süper Lig", country: "Türkiye", maxWeek: 34 },
  { id: 14, name: "La Liga", country: "Spain", maxWeek: 38 },
];
