"use client";
import { useState, useEffect } from "react";
import { CheckIcon, CopyIcon } from "@components/icons";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsCompact(window.innerWidth <= 350);
    };

    updateSize(); // inicial
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`bg-primary text-on-primary px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-primary/90 flex items-center justify-center whitespace-nowrap overflow-hidden ${className} ${isCompact ? "copy-button-responsive" : ""}`}
      aria-label="Copiar al portapapeles"
    >
      {copied ? (
        <>
          <CheckIcon className="w-5 h-5 mr-2" />
          Copiado!
        </>
      ) : (
        <>
          <CopyIcon className="w-5 h-5 mr-2" />
          Copiar
        </>
      )}
    </button>
  );
}
