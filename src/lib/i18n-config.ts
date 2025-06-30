export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

// Países hispanohablantes (ISO 3166-1 alpha-2)
export const spanishSpeakingCountries = new Set([
  "ES", // España
  "MX", // México
  "AR", // Argentina
  "CO", // Colombia
  "CL", // Chile
  "PE", // Perú
  "VE", // Venezuela
  "EC", // Ecuador
  "GT", // Guatemala
  "CU", // Cuba
  "DO", // República Dominicana
]);
