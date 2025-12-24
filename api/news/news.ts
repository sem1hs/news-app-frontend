import {
  NewsCreateRequest,
  NewsResponse,
  UpdateNewsRequest,
} from "@/types/news";
import { Page } from "@/types/pageable";

export async function fetchNews(): Promise<Page<NewsResponse>> {
  const res = await fetch("/api/news", {
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
