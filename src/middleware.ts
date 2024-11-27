import { auth } from "@/auth.config";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnLoginPage = req.nextUrl.pathname === "/auth/login";
  const isOnRootPage = req.nextUrl.pathname === "/";

  if (isOnRootPage) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isOnLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/auth/login", "/dashboard/:path*"],
};
