import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/profile/login" || path === "/profile/signup";

  const token = request.cookies.get("token")?.value || "";
  const googleToken =
    request.cookies.get("next-auth.session-token")?.value || "";

  const finalToken = token || googleToken ? true : false;

  if (isPublicPath && finalToken) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (!isPublicPath && !finalToken) {
    return NextResponse.redirect(new URL("/profile/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/profile", "/profile/signup", "/profile/login", "/profile"],
};
