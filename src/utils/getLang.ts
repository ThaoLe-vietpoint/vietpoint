import { cookies, headers } from "next/headers";

export async function getLang(): Promise<"en" | "vi"> {
    const cookieStore = await cookies();
    const langCookie = cookieStore.get("lang")?.value;

    // User has manually chosen a language — respect that choice
    if (langCookie === "vi" || langCookie === "en") return langCookie;

    // First visit: detect country from Vercel's geo header
    const headerStore = await headers();
    const country = headerStore.get("x-vercel-ip-country");
    if (country === "VN") return "vi";

    return "en";
}
