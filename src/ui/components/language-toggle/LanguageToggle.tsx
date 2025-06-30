import { useLocale } from "@contexts/locale-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-surface hover:bg-background transition-colors text-sm font-medium"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
