# Fysiotech

Landing page moderna per lo studio di fisioterapia **Fysiotech** (Monza), realizzata con Next.js App Router e Tailwind CSS.

## Avvio

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Form contatti (Nodemailer)

Nessuna API route: l’invio usa una **Server Action** con Nodemailer.

Copia `.env.example` in `.env.local` e configura SMTP:

```env
SMTP_HOST=...
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM="Fysiotech <info@fysiotech.it>"
CONTACT_TO_EMAIL=info@fysiotech.it
```

## Stack

- Next.js (App Router)
- Tailwind CSS
- Nodemailer (Server Action)
