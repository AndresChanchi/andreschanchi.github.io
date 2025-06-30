"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { detectLocale } from "@lib/detect-locale";

type LocaleContextType = {
  locale: "es" | "en";
  setLocale: (locale: "es" | "en") => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "es",
  setLocale: () => {},
});

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<"es" | "en">("es");

  useEffect(() => {
    // Solo se ejecuta en cliente
    setLocale(detectLocale());
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
