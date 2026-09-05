"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const eventTypes = [
  { title: "Cenas privadas", desc: "Espacios íntimos para encuentros memorables de 2 a 12 personas.", src: "https://lh3.googleusercontent.com/aida/AP1WRLu3wJTukypmLXyutSt_ykoNZW9MFrot0P9dKwxU4GRS3Ccd4TqNhe_uhKan6X_T83zQzwFAJyMaIy-yDCfJx-E2YvFUiXIB4al5wx8n5UT4p4upKPkzPElFCEii9uAtG5Cgc2mhWYBAXHPO8H531FvFD_Ov1uuomm2CBOnH5DiBDdLzdEhf7LMQy2VF51D2prQTuZfbEybqKcCl7U7pwfQ-ohU1F0B-4Yv-_RqMYHF9fdl9XOh-v_K9-UEC" },
  { title: "Corporativos", desc: "Soluciones de alta gama para presentaciones y networking empresarial.", src: "https://lh3.googleusercontent.com/aida/AP1WRLvNGFAhN-uyQfpDPNNVfLJRVz5r1mTlj1uJWMB_8LB3QRcGJoI43LL6lew6APzJ0Mj-yfzVLaL63GclhOwjywdZ1IoIcxB8oQuwZujN_W_OrGabsqytWoSLx11EAiE2WHECFKn_Ox5AHOLUZK2y4dQ00D4szADUB4TxnVcfs8SGc7BcxOrFqQ5LUfKBmHEZQMSHlgFkrUOwEfcChVAZWeb7vh_keNiYZdnIBgwZw_TMUBik18A-Z7hHgbhC" },
  { title: "Buyout completo", desc: "Exclusividad absoluta del restaurante para grandes celebraciones.", src: "https://lh3.googleusercontent.com/aida/AP1WRLsW8JsPFu8d8dKSIJf7iOqaxG32bL4DQbYV71JMGNrTYuXWGvc_iFUpn6xLJNW4ao8h9Udj9D48zJ8ESJeQr1dfh0Hl05cAOFYNxHsPD64pjkThxGMpOqLOpA2donbh1PyXpcjkPkPvZhhkkhJZZJtAeZKEJb7CTGWZYeRDZFubHT6125sM-e1gXA3Os86tq6y3uQMIiYtMWiueedw2pV0W6Br0iMheDFr2nnhh7tlvhaVlwzaG8zrtR0yg" },
  { title: "Experiencias", desc: "Maridajes exclusivos y talleres sensoriales a medida.", src: "https://lh3.googleusercontent.com/aida/AP1WRLsFnllbFSUH9xqiu2d18w1KOpgwRHgtdpT6ciH8mrJP55gyMGc_sZBSLfv8S3UOQO8daNi9xOrlCGQg9uGOeVWNU8JPiuNnrZq7NKRuD-UQv77mylpOC3VfWxwVNWFvidudsUxSnvJJ3_ah8z94AhxDzBFQEztVzg4SySl4uVK5EWb3oYCzxNtjYJqxfMebWDeME1hXl6iBNbz46_5qn0B281odYElRPIbG3FQljNeZ5Gr-eUODonZtSmqI" },
];

export function EventsSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="eventos">
      <div className="text-center mb-16">
        <h2 className="reveal font-headline-lg text-headline-lg text-on-surface">Eventos privados</h2>
        <div className="w-20 h-[1px] bg-primary mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {eventTypes.map((event, index) => (
          <div key={event.title} className="reveal luxury-card p-8 text-center space-y-6">
            <img className="w-16 h-16 mx-auto opacity-80" src={event.src} alt={event.title} />
            <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
            <Button variant="ghost" size="sm" href="#">Solicitar</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
