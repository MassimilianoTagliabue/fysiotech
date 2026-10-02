"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  ok: boolean;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { ok: true, message: "Messaggio inviato. Ti ricontatteremo presto." };
  }

  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const messaggio = String(formData.get("messaggio") ?? "").trim();

  if (!nome || !email || !messaggio) {
    return { ok: false, message: "Compila nome, email e messaggio." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Inserisci un’email valida." };
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  if (!host || !user || !pass || !to) {
    return {
      ok: false,
      message:
        "Invio non configurato. Imposta le variabili SMTP nel file .env.local.",
    };
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  const inviataIl = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
    dateStyle: "full",
    timeStyle: "short",
  });

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Fysiotech Sito" <${user}>`,
      to,
      replyTo: email,
      subject: `Richiesta da ${nome} — Fysiotech`,
      text: [
        `Nuova richiesta dal sito Fysiotech · ${inviataIl}`,
        "",
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telefono: ${telefono || "—"}`,
        "",
        messaggio,
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; color: #1a1b1e;">
          <p style="margin: 0 0 16px; font-size: 14px; color: #5c6068;">
            Nuova richiesta dal sito Fysiotech · ${escapeHtml(inviataIl)}
          </p>
          <p style="margin: 0 0 8px;"><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 16px;"><strong>Telefono:</strong> ${escapeHtml(telefono || "—")}</p>
          <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(messaggio)}</div>
        </div>
      `,
    });

    return {
      ok: true,
      message: "Messaggio inviato. Ti ricontatteremo il prima possibile.",
    };
  } catch {
    return {
      ok: false,
      message: "Invio non riuscito. Riprova tra poco o chiamaci.",
    };
  }
}
