import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contatti" className="section-pad bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
            Dove siamo & contatti
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            Prenota informazioni o una valutazione
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Chiamaci per fissare un appuntamento, scrivici una mail o vieni in
            studio a Monza.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                Indirizzo
              </h3>
              <p className="mt-2 text-lg">
                {site.address.street}
                <br />
                {site.address.city}
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-medium text-orange underline-offset-4 hover:underline"
              >
                Indicazioni stradali
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                Orari
              </h3>
              <ul className="mt-2 space-y-2">
                {site.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex max-w-sm justify-between gap-6 text-[0.95rem] text-white/80"
                  >
                    <span>{row.day}</span>
                    <span className="text-white">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 max-w-sm text-sm text-white/65">
                {site.hoursNote}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/45">
                Contatti diretti
              </h3>
              <div className="mt-3 space-y-2 text-lg">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="block transition-colors hover:text-orange"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-base text-white/75 transition-colors hover:text-orange"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn-primary">
                Chiama ora
              </a>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Apri la mappa
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl">Scrivici</h3>
              <p className="mt-2 text-sm text-white/65">
                Lascia un messaggio: ti ricontattiamo appena possibile.
              </p>
              <div className="mt-5 [&_.field]:border-white/15 [&_.field]:bg-white/8 [&_.field]:text-white [&_.field]:placeholder:text-white/40 [&_label]:text-white/80 [&_button]:w-full">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner">
            <iframe
              title="Mappa dello studio Fysiotech - Monza"
              src={site.address.embedUrl}
              className="h-[320px] w-full border-0 sm:h-full sm:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
