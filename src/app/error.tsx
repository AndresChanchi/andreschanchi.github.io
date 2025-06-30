"use client";
import Link from "next/link";
import { Button } from "@components/button/Button.tsx";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-responsive min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-heading text-primary mb-4">¡Ups! Algo salió mal</h1>

        <div className="bg-surface rounded-xl p-6 mb-8 border border-primary/10">
          <p className="text-subheading mb-4">
            {error.message || "Ocurrió un error inesperado"}
          </p>

          {error.digest && (
            <p className="text-sm text-on-surface/60 mb-4">
              Error ID: {error.digest}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={reset}>Reintentar</Button>
            <Button asChild variant="secondary">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>

        <div className="text-sm text-on-surface/60">
          <p>¿Sigue ocurriendo el error?</p>
          <p className="mt-2">
            Contáctame en{" "}
            <a
              href="mailto:pepito@web3.dev"
              className="text-primary hover:underline"
            >
              pepito@web3.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
