"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-lg">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em]">Sección no disponible</p>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Ha ocurrido un error</h1>
        <p className="text-on-surface-variant font-body-md">
          No hemos podido cargar esta sección correctamente. {error.digest && `Código: ${error.digest}`}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary-container text-background-dark font-label-md px-8 py-4 uppercase tracking-widest transition-all duration-300"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="border border-outline-variant/30 hover:border-primary text-on-surface font-label-md px-8 py-4 uppercase tracking-widest transition-all duration-300"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}