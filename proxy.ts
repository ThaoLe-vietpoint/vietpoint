import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const response = NextResponse.next();

    // Set lang cookie on first visit based on geo (Vercel header)
    // Manual toggle will overwrite this cookie later
    if (!request.cookies.get("lang")) {
        const country = request.headers.get("x-vercel-ip-country");
        const lang = country === "VN" ? "vi" : "en";
        response.cookies.set("lang", lang, {
            path: "/",
            maxAge: 31536000,
            sameSite: "lax",
        });
    }

    return response;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)",],
};
