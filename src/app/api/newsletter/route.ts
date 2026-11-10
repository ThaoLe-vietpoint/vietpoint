import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const lang = body?.lang === "vi" ? "vi" : "en";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: lang === "vi" ? "Địa chỉ email không hợp lệ." : "Invalid email address." },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { error: dbError } = await supabase.from("leads").insert({
      name: lang === "vi" ? "Đăng ký nhận tin" : "Newsletter Subscriber",
      email,
      phone: "",
      message:
        lang === "vi"
          ? "Đăng ký nhận mẹo bảo hiểm sức khoẻ qua email (Newsletter)"
          : "Subscribed to health insurance tips newsletter",
      source: "newsletter",
    });

    if (dbError) {
      console.error("Newsletter DB insert error:", dbError.message);
      return NextResponse.json(
        { error: lang === "vi" ? "Không thể lưu thông tin đăng ký." : "Could not save subscription." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Newsletter error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
