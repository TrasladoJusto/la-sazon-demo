export function ReservationsSection() {
  return (
    <section className="relative flex items-center justify-center py-xxl min-h-[800px]" id="reservas">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Atmospheric dining"
          className="w-full h-full object-cover brightness-[0.2]"
          src="/images/restaurant-interior.jpg"
        />
      </div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-[650px] px-margin-mobile reveal">
        <div className="bg-surface-container-high/80 backdrop-blur-2xl p-xl border border-primary/10 shadow-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-xl">Reserva tu Mesa</h2>
          <form className="space-y-lg">
            <div className="grid grid-cols-2 gap-lg">
              <div className="space-y-sm">
                <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Fecha</label>
                <input className="w-full bg-transparent border-b border-outline text-on-surface py-sm focus:border-primary focus:ring-0 outline-none transition-colors" type="date" />
              </div>
              <div className="space-y-sm">
                <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Hora</label>
                <select className="w-full bg-transparent border-b border-outline text-on-surface py-sm focus:border-primary focus:ring-0 outline-none transition-colors">
                  <option className="bg-surface">20:00</option>
                  <option className="bg-surface">20:30</option>
                  <option className="bg-surface">21:00</option>
                  <option className="bg-surface">21:30</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-lg">
              <div className="space-y-sm">
                <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Comensales</label>
                <input className="w-full bg-transparent border-b border-outline text-on-surface py-sm focus:border-primary focus:ring-0 outline-none transition-colors placeholder:text-text-muted-dark" max="10" min="1" placeholder="2" type="number" />
              </div>
              <div className="space-y-sm">
                <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Ocasión</label>
                <input className="w-full bg-transparent border-b border-outline text-on-surface py-sm focus:border-primary focus:ring-0 outline-none transition-colors placeholder:text-text-muted-dark" placeholder="Aniversario, Cena..." type="text" />
              </div>
            </div>
            <button className="w-full bg-primary py-md text-background-dark font-body-md font-medium tracking-widest uppercase hover:brightness-110 transition-all mt-xl" type="submit">
              Confirmar Disponibilidad
            </button>
          </form>
          <div className="mt-lg text-center">
            <a className="flex items-center justify-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/34912345678" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat</span>
              Consulta rápida vía WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
