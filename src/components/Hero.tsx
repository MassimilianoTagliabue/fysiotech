import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-hero-overlay/92 via-hero-overlay/78 to-hero-overlay/42"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-hero-overlay/75 via-transparent to-hero-overlay/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
            <span className="text-orange">{site.brandFysio}</span>
            <span className="text-white/85">{site.brandTech}</span>
          </p>
          <p className="animate-fade-up-delay mt-2 text-sm uppercase tracking-[0.22em] text-white/65">
            Fisioterapia · Riabilitazione · {site.city}
          </p>

          <h1 className="animate-fade-up-delay mt-6 font-display text-[2.2rem] leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Recupero psicofisico e riabilitazione specializzata
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
            Percorsi personalizzati di fisioterapia, osteopatia e terapie
            strumentali per tornare a muoverti senza dolore, con tecnologia e
            competenza clinica.
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={`tel:${site.phoneTel}`} className="btn-primary">
              Chiama per prenotare
            </a>
            <a href="#servizi" className="btn-secondary">
              Scopri i trattamenti
            </a>
          </div>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <span className="badge-pulse inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              Tecnologie all’avanguardia
            </span>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              Percorsi su misura
            </span>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              Visite fisiatriche in loco
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
