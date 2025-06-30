"use client";
import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const theme = stored === "light" || stored === "dark" ? stored : null;

    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return null;
}
