export function About() {
  return (
    <section id="metodo" className="section-pad bg-surface-elevated">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">Chi siamo</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Il metodo Fysiotech
          </h2>
          <div
            className="mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl bg-steel/10 lg:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Allenamento e recupero funzionale"
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg lg:col-span-7">
          <p>
            Lo studio professionale{" "}
            <span className="font-semibold text-ink">Fysiotech</span> a Monza si
            occupa di masso-fisioterapia e posturologia. Uniamo tecnologie
            all’avanguardia e personale qualificato per trattamenti di
            rieducazione funzionale, sia preventivi che curativi.
          </p>
          <p>
            Affrontiamo patologie ortopediche, reumatiche, post-traumatiche, pre
            e post-chirurgiche e condizioni croniche. Ogni percorso nasce da
            un’attenta valutazione e si costruisce intorno agli obiettivi del
            paziente.
          </p>
          <p>
            Il nostro impegno è la prevenzione e il recupero delle patologie
            motorie legate al trauma e all’invecchiamento — con un unico grande
            scopo: il benessere concreto di chi si affida a noi.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                Approccio
              </dt>
              <dd className="mt-2 font-display text-lg text-ink">
                Personalizzato
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                Focus
              </dt>
              <dd className="mt-2 font-display text-lg text-ink">
                Recupero funzionale
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                Sede
              </dt>
              <dd className="mt-2 font-display text-lg text-ink">Monza</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
