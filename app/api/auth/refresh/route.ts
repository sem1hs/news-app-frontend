"use server";
import { verifyJwt } from "@/lib/isTokenValid";
import { User } from "@/types/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("Refresh token çalıştı");
  try {
    const cookieStore = await cookies();
    const currentRefreshToken = cookieStore.get("refreshToken")?.value;

    if (!currentRefreshToken) {
      return NextResponse.json(
        { message: "Refresh token bulunamadı" },
        { status: 401 },
      );
    }

    const backendResponse = await fetch(
      `http://localhost:9000/api/v1/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: currentRefreshToken }),
      },
    );

    if (!backendResponse.ok) {
      return NextResponse.json(
        { message: "Refresh işlemi başarısız" },
        { status: 401 },
      );
    }

    const data = await backendResponse.json();

    const accessToken = data.accessToken;
    const newRefreshToken = data.refreshToken;

    if (!accessToken) {
      return NextResponse.json(
        { message: "Yeni access token alınamadı" },
        { status: 500 },
      );
    }

    const response = NextResponse.json(
      { message: "Token yenilendi" },
      { status: 200 },
    );

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    cookieStore.set("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
