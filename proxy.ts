import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "./lib/isTokenValid";

const protectedRoutes = ["/admin"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoute) {
    if (!accessToken && !refreshToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (accessToken) {
      const decoded = verifyJwt(accessToken);

      if (!decoded) {
        if (!refreshToken) {
          return NextResponse.redirect(new URL("/", request.url));
        }

        return NextResponse.next();
      }

      const isAdmin = decoded.roles?.some((role) => role === "ROLE_ADMIN");

      if (!isAdmin) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
