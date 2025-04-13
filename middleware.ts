import { NextRequest, NextResponse } from "next/server";
import { BASE_URL, AUTH_ROUTES, PUBLIC_ROUTES } from "./constant/route";
import { cookies } from "next/headers";
import { verify } from "./action/sessions";
export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;
    const session = await verify(cookie);

    // 퍼블릭라우터가 아닌곳 접근 + 세션이 유효하지 않은경우
    if (!isPublicRoute && "errorMessage" in session) {
        return NextResponse.redirect(
            new URL(AUTH_ROUTES.LOGIN, request.nextUrl)
        );
    }

    // 퍼블릭라우터에 접근 + 세션이 유효한 경우 -> 로그인or 회원가입을 할 필요가 없음 -> BASE_URL로
    if (isPublicRoute && !("errorMessage" in session) && session.id) {
        return NextResponse.redirect(new URL(BASE_URL, request.nextUrl));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
