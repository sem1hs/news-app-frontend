export interface NewsResponse {
  id: number;
  title: string;
  slug: string;
  content: string;
  spot: string;
  category: string;
  tags: string[] | string;
  imageUrl: string;
  views: number;
  createdBy: string;
  createdDate: string;
  leagueName: string;
  teamName: string;
  isBreaking: boolean;
}

export interface NewsCreateRequest {
  title: string;
  slug: string;
  content: string;
  spot: string;
  category: string;
  leagueId: number;
  teamId: number;
  tags: string[] | string;
  imageUrl: string;
  views?: number;
  isBreaking: boolean;
}

export interface UpdateNewsRequest {
  id: number;
  title?: string;
  slug?: string;
  content?: string;
  spot?: string;
  category?: string;
  leagueId?: number;
  teamId?: number;
  tags?: string[] | string;
  imageUrl?: string;
  views?: number;
}

export type FetchNewsParams = {
  leagueName?: string;
  page?: number;
  size?: number;
};
