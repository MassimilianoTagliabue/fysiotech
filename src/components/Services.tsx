import { services } from "@/lib/site";

const icons = {
  rehab: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M8 14v2a4 4 0 0 0 8 0v-2M7 10V7a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 10h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  osteo: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.5v9M8.5 10.5h7M8.5 13.5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  manual: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M8 13.5V8.8a1.3 1.3 0 0 1 2.6 0V12M10.6 12V7.8a1.3 1.3 0 0 1 2.6 0V12M13.2 12V8.5a1.3 1.3 0 0 1 2.6 0v5.2c0 2.4-1.5 4.3-4.1 4.3H11A4.5 4.5 0 0 1 6.5 13.5V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sport: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.8 9.5h14.4M4.8 14.5h14.4M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  tech: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M13 3 5.5 13.5H12l-1 7.5L18.5 10.5H12L13 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  posture: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 8.5v4.5l3.5 2.5M12 13l-3.5 6.5M8.5 10.5c1.2-.8 2.3-1.2 3.5-1.2s2.3.4 3.5 1.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="servizi" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Trattamenti</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Servizi e terapie
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Dalla terapia manuale alle tecnologie strumentali: un’offerta
            completa per il recupero e la prevenzione.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-line bg-surface-elevated p-7 transition duration-300 hover:-translate-y-1 hover:border-orange/35 hover:shadow-[0_18px_40px_rgba(20,21,26,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange-deep transition-colors group-hover:bg-orange group-hover:text-white">
                {icons[service.icon]}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
