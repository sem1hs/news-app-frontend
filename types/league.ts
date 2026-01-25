export type LeagueResponse = {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
};

export type League = {
  id: number;
  name: string;
  country: string;
  logoUrl?: string;
};

export const LEAGUES: League[] = [
  { id: 1, name: "Premier League", country: "England" },
  { id: 3, name: "Serie A", country: "Italy" },
  { id: 4, name: "Bundesliga", country: "Germany" },
  { id: 5, name: "Ligue 1", country: "France" },
  { id: 6, name: "Süper Lig", country: "Türkiye" },
  { id: 7, name: "La Liga", country: "Spain" },
];
