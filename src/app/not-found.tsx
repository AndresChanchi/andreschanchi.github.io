import Link from "next/link";
import { Button } from "@components/button/Button";

export default function NotFound() {
  return (
    <div className="container-responsive min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="text-heading text-primary mb-2">
            404 - Página no encontrada
          </h1>
          <p className="text-subheading text-on-surface">
            Lo que buscas no está aquí o nunca existió
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button asChild className="w-full">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full">
            <Link href="/#contact">Contactar soporte</Link>
          </Button>
        </div>

        <div className="mt-12 opacity-60">
          <p className="text-sm mb-2">¿Eres desarrollador?</p>
          <div className="text-xs font-mono bg-surface rounded p-3">
            Error: route not matched in manifest
          </div>
        </div>
      </div>
    </div>
  );
}
