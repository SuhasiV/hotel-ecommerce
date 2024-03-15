import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/profile/login" || path === "/profile/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile/logout", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/profile/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/profile", "/profile/signup", "/profile/login", "/profile/logout"],
};
