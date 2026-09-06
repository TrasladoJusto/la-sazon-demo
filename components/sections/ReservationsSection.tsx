"use client";
import Image from "next/image";
import { ReservationForm } from "@/components/sections/ReservationForm";

export function ReservationsSection() {
  return (
    <section id="reservas" className="relative py-xxl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          sizes="100vw"
          src="/images/restaurant-interior.jpg"
          alt=""
          aria-hidden="true"
          className="object-cover brightness-[0.2] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/80" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto">
        <div className="reveal glass-morphism backdrop-blur-2xl p-8 md:p-16 border border-white/5 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-on-surface">Reservar una Mesa</h2>
            <p className="text-secondary font-body-lg max-w-xl mx-auto italic">
              Asegure su lugar en nuestra mesa. Recomendamos realizar su reserva con al menos dos semanas de antelación.
            </p>
            <div className="w-20 h-[1px] bg-primary mx-auto" />
          </div>

          <ReservationForm />

          <p className="text-center text-on-surface-variant font-label-sm opacity-60">
            Para eventos privados de más de 12 personas, contáctenos{" "}
            <a href="/contacto" className="text-primary hover:underline">en nuestra página de contacto</a>.
          </p>
        </div>
      </div>
    </section>
  );
}