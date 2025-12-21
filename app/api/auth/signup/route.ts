"use server";
import { verifyJwt } from "@/lib/isTokenValid";
import { User } from "@/types/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("http://localhost:9000/api/v1/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const tokens = await res.json();

  const cookieStore = await cookies();

  cookieStore.set("accessToken", tokens.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 15,
  });

  cookieStore.set("refreshToken", tokens.refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  const decoded = verifyJwt(tokens.accessToken);

  if (!decoded) {
    return NextResponse.json({ error: "Token doğrulanamadı" }, { status: 401 });
  }

  const user: User = {
    username: decoded.sub,
    role: decoded.roles,
  };

  return NextResponse.json(user);
}
