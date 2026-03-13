import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { LoginRequest, SignUpRequest } from "@/types/auth";

export async function login(user: LoginRequest) {
  const response = await fetchWithAuth("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Giriş yapılamadı !");
  }

  return response.json();
}

export async function logout() {
  const response = await fetchWithAuth("/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Çıkış yapılamadı !");
  }

  return response.json();
}

export async function signUp(user: SignUpRequest) {
  const response = await fetchWithAuth("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Kayıt Olunamadı !");
  }

  return response.json();
}

export async function refreshToken() {
  const response = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token yenilenemedi");
  }

  return response.json();
}

export async function getMe() {
  const response = await fetchWithAuth("/api/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Kullanıcı Bulunamadı !");
  }

  return response.json();
}
