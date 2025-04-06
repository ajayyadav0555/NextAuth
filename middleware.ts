import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/",req.nextUrl))
  // if(req.nextUrl.pathname.startsWith("/blog")){
  //     return NextResponse.rewrite(new URL("/",req.url))
  // }

  const response = NextResponse.next();
  const theme = req.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "mycutom-header");

  return response
}

export const config = {
  matcher: ["/blog/:path*"],
};
