type TranslationDict = {
  heroTitle: string;
  heroSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  emailLabel: string;
  copyButton: string;
  // ... otras keys
};

export const translations: Record<"es" | "en", TranslationDict> = {
  es: {
    heroTitle: "Pepito <0>Blockchain</0> Developer",
    heroSubtitle:
      "Especialista en desarrollo Web3 y soluciones descentralizadas",
    projectsTitle: "Proyectos Destacados",
    projectsSubtitle: "Algunos de mis trabajos más relevantes en Web3",
    contactTitle: "Contacto",
    contactSubtitle: "¿Interesado en trabajar juntos? Envíame un mensaje",
    emailLabel: "Email",
    copyButton: "Copiar",
  },
  en: {
    heroTitle: "Pepito <0>Blockchain</0> Developer",
    heroSubtitle: "Specialist in Web3 development and decentralized solutions",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Some of my most relevant work in Web3",
    contactTitle: "Contact",
    contactSubtitle: "Interested in working together? Send me a message",
    emailLabel: "Email",
    copyButton: "Copy",
  },
};
