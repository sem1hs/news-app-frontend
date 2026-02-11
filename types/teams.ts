export type TeamResponse = {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  leagueId: number;
};

export type TeamCreateRequest = {
  name: string;
  shortName: string;
  logoUrl: string;
  leagueId: number;
};


export type TeamUpdateRequest = {
  id?: number;
  name?: string;
  shortName?: string;
  logoUrl?: string;
  leagueId?: number;
};