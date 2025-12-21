export interface NewsResponse {
  id: number;
  title: string;
  slug: string;
  content: string;
  spot: string;
  category: string;
  subCategory: string;
  tags: string[];
  imageUrl: string;
  views: number;
  createdBy: string;
  createdDate: string;
}

export interface NewsCreateRequest {
  title: string;
  slug: string;
  content: string;
  spot: string;
  category: string;
  subCategory: string;
  tags: string[] | string;
  imageUrl: string;
  views?: number;
}
