import {
  FetchNewsParams,
  FetchNewsParamsBySearch,
  NewsCategory,
  NewsCreateRequest,
  NewsResponse,
  UpdateNewsRequest,
} from "@/types/news";
import { Page, PageParams } from "@/types/pageable";

export async function fetchNews({
  page = 0,
  size = 16,
}: PageParams): Promise<Page<NewsResponse>> {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("size", size.toString());

  const res = await fetch(`/api/news?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi");
  }

  return res.json();
}

export async function fetchNewsBySlug(slug: string): Promise<NewsResponse> {
  const res = await fetch(`/api/news/slug/${slug}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi");
  }

  return res.json();
}

export async function fetchNewsByLeagueName({
  leagueName,
  page = 0,
  size = 16,
}: FetchNewsParams): Promise<Page<NewsResponse>> {
  const params = new URLSearchParams();

  if (leagueName) params.append("leagueName", leagueName);
  params.append("page", page.toString());
  params.append("size", size.toString());

  const res = await fetch(`/api/news?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi");
  }

  return res.json();
}

export async function fetchBreakingNews(): Promise<NewsResponse[]> {
  const res = await fetch("/api/news/breaking", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Son Dakika Haberleri getirilemedi");
  }

  return res.json();
}

export async function fetchPopularNews(dayRange: number): Promise<NewsResponse[]> {
  const params = new URLSearchParams();
  params.append("dayRange", dayRange.toString());

  const res = await fetch(`/api/news/popular?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Popüler Haberler getirilemedi");
  }

  return res.json();
}

export async function fetchLatestNewsByCategory(category: NewsCategory): Promise<NewsResponse[]> {
  const params = new URLSearchParams();
  params.append("category", category.toString());

  const res = await fetch(`/api/news/latest?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Son Haberler getirilemedi");
  }

  return res.json();
}

export async function fetchNewsBySearchQuery({
  search,
  page = 0,
  size = 16,
}: FetchNewsParamsBySearch): Promise<Page<NewsResponse>> {
  const params = new URLSearchParams();

  params.append("q", search.toString());
  params.append("page", page.toString());
  params.append("size", size.toString());

  const res = await fetch(`/api/news/search?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi");
  }

  return res.json();
}


export async function createNews(
  news: NewsCreateRequest
): Promise<NewsResponse> {
  const res = await fetch("/api/news", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(news),
  });

  if (!res.ok) {
    throw new Error("Haberler Oluşturulamadı");
  }

  return res.json();
}

export async function updateNews(
  news: UpdateNewsRequest
): Promise<NewsResponse> {
  const res = await fetch(`/api/news/${news.id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(news),
  });

  if (!res.ok) {
    throw new Error("Haberler Oluşturulamadı");
  }

  return res.json();
}

export async function deleteNews(id: number): Promise<void> {
  const res = await fetch(`/api/news/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler Silinemedi");
  }

  return res.json();
}
