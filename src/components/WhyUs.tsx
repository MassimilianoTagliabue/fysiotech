import { strengths } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="perche-noi" className="section-pad bg-surface-elevated">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Punti di forza</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Perché scegliere Fysiotech
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Competenza clinica, strumenti moderni e un’attenzione costante alla
            persona — non solo al sintomo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 sm:p-8"
            >
              <span
                className="font-display text-5xl text-orange/20"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
