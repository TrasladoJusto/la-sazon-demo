export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-lg">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em]">Error 404</p>
        <p className="font-display-lg text-[120px] text-primary/20 select-none">404</p>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Página no encontrada</h1>
        <p className="text-on-surface-variant font-body-md">
          La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar tu experiencia.
        </p>
        <a
          href="/"
          className="inline-block bg-primary hover:bg-primary-container text-background-dark font-label-md px-10 py-4 uppercase tracking-widest transition-all duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}