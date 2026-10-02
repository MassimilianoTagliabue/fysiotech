"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.ok) {
    return (
      <div
        className="rounded-2xl border border-orange/25 bg-orange-soft p-8 text-center"
        aria-live="polite"
      >
        <p className="font-display text-xl text-ink">Messaggio inviato</p>
        <p className="mt-2 text-ink-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Sito web</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="field"
          placeholder="Il tuo nome"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="field"
          placeholder="latua@email.it"
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Telefono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className="field"
          placeholder="Opzionale"
          autoComplete="tel"
        />
      </div>

      <div>
        <label
          htmlFor="messaggio"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={4}
          className="field resize-y"
          placeholder="Come possiamo aiutarti?"
        />
      </div>

      {state.message ? (
        <p className="text-sm text-[#ffb4a8]" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={pending}
      >
        {pending ? "Invio in corso…" : "Invia messaggio"}
      </button>
    </form>
  );
}
