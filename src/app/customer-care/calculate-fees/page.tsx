import { getLang } from "@/utils/getLang";
import CalculateFeesClient from "./CalculateFeesClient";

export default async function Page() {
  const lang = await getLang();
  return <CalculateFeesClient initialLang={lang} />;
}
