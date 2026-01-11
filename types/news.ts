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
