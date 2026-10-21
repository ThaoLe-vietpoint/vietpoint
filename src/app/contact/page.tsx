import { getLang } from "@/utils/getLang";
import ContactClient from "./ContactClient";

export default async function Page() {
  const lang = await getLang();
  return <ContactClient initialLang={lang} />;
}
