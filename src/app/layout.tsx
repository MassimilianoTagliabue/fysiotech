import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fysiotech | Fisioterapia e Riabilitazione a Monza",
  description:
    "Studio di masso-fisioterapia e posturologia a Monza. Fisioterapia, osteopatia, terapia manuale, Tecar, Tesla Pulse e percorsi di recupero personalizzati.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Fysiotech | Fisioterapia e Riabilitazione a Monza",
    description:
      "Recupero psicofisico e riabilitazione specializzata a Monza. Prenota una valutazione.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
