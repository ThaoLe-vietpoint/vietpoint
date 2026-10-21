import { getLang } from "@/utils/getLang";
import BlogClient from "./BlogClient";

export default async function Page() {
  const lang = await getLang();
  return <BlogClient initialLang={lang} />;
}
