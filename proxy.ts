import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "./lib/isTokenValid";

const protectedRoutes = ["/admin"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    if (!token) {
      const baseUrl = new URL("/", request.url);
      return NextResponse.redirect(baseUrl);
    }

    if (token && verifyJwt(token) === null) {
      const baseUrl = new URL("/", request.url);
      return NextResponse.redirect(baseUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
