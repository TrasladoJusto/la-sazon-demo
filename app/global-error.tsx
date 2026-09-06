"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="es">
      <body className="bg-background-dark text-on-surface min-h-screen flex items-center justify-center">
        <div className="text-center px-6 space-y-6">
          <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em]">Error inesperado</p>
          <h1 className="font-display-lg text-display-lg text-on-surface">Algo salió mal</h1>
          <p className="text-on-surface-variant font-body-lg max-w-md mx-auto">
            Ha ocurrido un error inesperado en la aplicación. {error.digest && `Código: ${error.digest}`}
          </p>
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary-container text-background-dark font-label-md px-8 py-4 uppercase tracking-widest transition-all duration-300"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}