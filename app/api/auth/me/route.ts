import { verifyJwt } from "@/lib/isTokenValid";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) return NextResponse.json({ user: null }, { status: 200 });

  const decoded = verifyJwt(token);

  const user = {
    username: decoded?.sub,
    role: decoded?.roles,
  };

  return NextResponse.json({ user }, { status: 200 });
}
