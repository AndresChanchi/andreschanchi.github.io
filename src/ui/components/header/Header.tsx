"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@contexts/locale-context";
import { ThemeToggle } from "@components/theme-toggle/ThemeToggle";
import { LanguageToggle } from "@components/language-toggle/LanguageToggle";
import { MenuIcon, XIcon } from "@components/icons";

export function Header() {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (hash: string) => {
    if (pathname === "/") {
      // Solo hacer scroll suave si estamos en la página de inicio
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página (como /cv), navegar al inicio con el hash
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header className="bg-surface sticky top-0 z-50 shadow-md">
      <div className="container-responsive flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          Andres Chanchi
        </Link>

        {/* Botón para móviles */}
        <button
          className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Menú para desktop */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLinks locale={locale} handleClick={handleLinkClick} />
        </nav>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-on-surface/10">
          <nav className="container-responsive py-4 flex flex-col gap-3">
            <NavLinks locale={locale} handleClick={handleLinkClick} />
          </nav>
        </div>
      )}
    </header>
  );
}

const NavLinks = ({ 
  locale, 
  handleClick 
}: { 
  locale: "es" | "en";
  handleClick: (hash: string) => void;
}) => (
  <>
    <a 
      href="#projects" 
      onClick={(e) => {
        e.preventDefault();
        handleClick("#projects");
      }} 
      className="hover:text-primary transition-colors cursor-pointer"
    >
      {locale === "es" ? "Projects" : "Projects"}
    </a>
    <a 
      href="#contact" 
      onClick={(e) => {
        e.preventDefault();
        handleClick("#contact");
      }} 
      className="hover:text-primary transition-colors cursor-pointer"
    >
      {locale === "es" ? "Contact" : "Contact"}
    </a>
    <Link href="/cv" className="hover:text-primary transition-colors">
      CV
    </Link>
  </>
);