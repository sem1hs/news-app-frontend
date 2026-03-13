import { refreshToken } from "@/api/auth/auth";

let isRefreshing = false;
let refreshPromise: Promise<any> | null = null;

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  let response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (response.status !== 401) {
    const data = await response
      .clone()
      .json()
      .catch(() => null);

    if (response.status === 401 || data?.user === null) {
      await refreshToken();
    }
    return response;
  }

  try {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = refreshToken();
    }

    await refreshPromise;

    isRefreshing = false;
    refreshPromise = null;

    return fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
  } catch (error) {
    isRefreshing = false;
    refreshPromise = null;

    if (typeof window !== "undefined") {
      window.location.href = "/";
    }

    throw error;
  }
}
