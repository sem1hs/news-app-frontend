import { LoginRequest, SignUpRequest } from "@/types/auth";

export async function login(user: LoginRequest) {
  const response = await fetch("/api/auth/login", {
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
  const response = await fetch("/api/auth/logout", {
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
  const response = await fetch("/api/auth/signup", {
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

export async function getMe() {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Kullanıcı Bulunamadı !");
  }

  return response.json();
}
