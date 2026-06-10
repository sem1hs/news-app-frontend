"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const BASE_URL = process.env.API_BASE_URL || "http://localhost:9000";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");

  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(refreshToken),
  });

  const data = await response.json();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ success: true });
}
