import { useLocale } from "@contexts/locale-context";
import { translations } from "@locales/dict";

export function useTranslation() {
  const { locale } = useLocale();
  return (key: keyof (typeof translations)["en"]) => translations[locale][key];
}
