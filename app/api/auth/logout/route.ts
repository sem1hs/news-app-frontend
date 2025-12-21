"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");

  const response = await fetch("http://localhost:9000/api/v1/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(refreshToken),
  });

  const data = await response.json();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  console.log(response);

  return NextResponse.json({ success: true });
}
