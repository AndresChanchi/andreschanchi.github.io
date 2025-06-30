import { defaultLocale, spanishSpeakingCountries } from "./i18n-config";

export function detectLocale(): "es" | "en" {
  // 1. Detectar por URL (para pruebas)
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");

  if (langParam === "es") return "es";
  if (langParam === "en") return "en";

  // 2. Detectar por geolocalización (país)
  try {
    const countryCode = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.split("/")[0]
      ?.toUpperCase();
    if (countryCode && spanishSpeakingCountries.has(countryCode)) {
      return "es";
    }
  } catch (e) {}

  // 3. Detectar por idioma del navegador
  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "es") return "es";

  return "en";
}
