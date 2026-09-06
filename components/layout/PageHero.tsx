import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  id?: string;
};

export function PageHero({ title, subtitle, image, id }: PageHeroProps) {
  return (
    <section id={id} className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          sizes="100vw"
          priority
          src={image}
          alt=""
          aria-hidden="true"
          className="object-cover brightness-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark/90" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full pb-16">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4 animate-fade-up">AURA</p>
        <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface animate-fade-up [animation-delay:150ms] opacity-0 fill-mode-forwards">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant animate-fade-up [animation-delay:300ms] opacity-0 fill-mode-forwards">
          {subtitle}
        </p>
      </div>
    </section>
  );
}