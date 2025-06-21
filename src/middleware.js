import { NextResponse } from "next/server";

const userData = {
  name: "John Doe",
  email: "doe@gmail.com",
  role: "admin",
};
let isAdmin = userData.role === "admin";

export function middleware(request) {
  if (isAdmin && request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL("/login", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
