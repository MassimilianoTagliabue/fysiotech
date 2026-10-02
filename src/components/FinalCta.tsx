import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="border-y border-line bg-orange-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center sm:px-8 sm:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Pronto a iniziare il tuo percorso di recupero?
          </h2>
          <p className="mt-2 text-ink-muted">
            Chiama Fysiotech per prenotazioni e informazioni: ti rispondiamo
            rapidamente.
          </p>
        </div>
        <a href={`tel:${site.phoneTel}`} className="btn-primary shrink-0">
          Contattaci / Prenota
        </a>
      </div>
    </section>
  );
}
