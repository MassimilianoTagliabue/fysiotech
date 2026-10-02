import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.04em]">
            <span className="text-orange">{site.brandFysio}</span>
            <span className="text-steel">{site.brandTech}</span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Studio di Fisioterapia e Riabilitazione · {site.city}
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            {site.address.street} · {site.address.city}
          </p>
          <p className="mt-4 text-xs text-ink-muted/80">
            © {year} {site.name}. Tutti i diritti riservati.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-ink-muted">
          <a
            href={`tel:${site.phoneTel}`}
            className="transition-colors hover:text-ink"
          >
            Prenota
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Facebook
          </a>
          <a href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
