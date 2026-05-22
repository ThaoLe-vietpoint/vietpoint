import { cookies } from "next/headers";

export async function getLang(): Promise<"en" | "vi"> {
    const cookieStore = await cookies();
    const langCookie = cookieStore.get("lang")?.value;

    // Cookie is always set by middleware (geo-based on first visit, or user choice)
    if (langCookie === "vi" || langCookie === "en") return langCookie;

    return "en";
}
