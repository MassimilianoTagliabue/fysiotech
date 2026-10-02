import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Fysiotech",
  description: "Informativa privacy dello studio Fysiotech di Monza.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/"
        className="text-sm font-medium text-orange-deep hover:underline"
      >
        ← Torna al sito
      </Link>
      <h1 className="mt-6 font-display text-3xl tracking-tight text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
        <p>
          {site.name} ({site.address.street}, {site.address.city}) tratta i dati
          personali raccolti tramite il form di contatto esclusivamente per
          rispondere alle richieste di informazioni o prenotazione.
        </p>
        <p>
          I dati (nome, email, telefono e messaggio) non vengono ceduti a terzi
          e sono conservati solo per il tempo necessario alla gestione della
          richiesta, salvo obblighi di legge.
        </p>
        <p>
          Per esercitare i diritti previsti dal Regolamento UE 2016/679 (accesso,
          rettifica, cancellazione, limitazione, opposizione) puoi scrivere a{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            {site.email}
          </a>{" "}
          oppure chiamare {site.phoneDisplay}.
        </p>
        <p>
          Questa pagina ha finalità informative e può essere aggiornata; per
          esigenze specifiche ti invitiamo a contattare direttamente lo studio.
        </p>
      </div>
    </main>
  );
}
