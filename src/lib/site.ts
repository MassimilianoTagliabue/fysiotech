export const site = {
  name: "Fysiotech",
  brandFysio: "FYSIO",
  brandTech: "TECH",
  tagline: "Fisioterapia & Riabilitazione",
  fullName: "Fysiotech | Fisioterapia Monza",
  city: "Monza",
  phoneDisplay: "+39 338 2310289",
  phoneTel: "+393382310289",
  email: "info@fysiotech.it",
  facebook: "https://www.facebook.com/fysiotechmonza/",
  address: {
    street: "Via Gabriele D'Annunzio, 32",
    city: "20900 Monza (MB)",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Via+Gabriele+D%27Annunzio+32,+20900+Monza+MB",
    mapsQuery: "Via Gabriele D'Annunzio 32, Monza",
    embedUrl:
      "https://maps.google.com/maps?q=Via+Gabriele+D'Annunzio+32,+Monza&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  hours: [
    { day: "Lunedì – Venerdì", time: "8.00 – 21.00" },
    { day: "Sabato – Domenica", time: "Chiuso" },
  ],
  hoursNote: "Orario continuato. Ricevono su appuntamento.",
} as const;

export const navLinks = [
  { href: "#metodo", label: "Il Metodo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#perche-noi", label: "Perché noi" },
  { href: "#contatti", label: "Contatti" },
] as const;

export const services = [
  {
    title: "Fisioterapia & Riabilitazione",
    description:
      "Percorsi di recupero funzionale per patologie ortopediche, reumatiche, post-traumatiche e post-chirurgiche, con obiettivi chiari e misurabili.",
    icon: "rehab" as const,
  },
  {
    title: "Osteopatia",
    description:
      "Approccio globale al corpo per ripristinare equilibrio, mobilità e comfort, integrato al percorso fisioterapico quando indicato.",
    icon: "osteo" as const,
  },
  {
    title: "Terapia Manuale",
    description:
      "Tecniche manuali mirate su articolazioni, muscoli e tessuti per ridurre il dolore e migliorare la qualità del movimento.",
    icon: "manual" as const,
  },
  {
    title: "Fisioterapia Sportiva",
    description:
      "Prevenzione e trattamento degli infortuni, riatletizzazione e ritorno progressivo all’attività sportiva in sicurezza.",
    icon: "sport" as const,
  },
  {
    title: "Terapie Fisiche / Strumentali",
    description:
      "Tecar, Tesla Pulse e terapie strumentali all’avanguardia a supporto del recupero tissutale e della riduzione del dolore.",
    icon: "tech" as const,
  },
  {
    title: "Postura & Fysiopilates",
    description:
      "Rieducazione posturale, taping neuromuscolare e Fysiopilates per stabilità, consapevolezza corporea e prevenzione.",
    icon: "posture" as const,
  },
] as const;

export const strengths = [
  {
    title: "Professionalità qualificata",
    description:
      "Personale specializzato in masso-fisioterapia e posturologia, con visite fisiatriche disponibili in loco.",
  },
  {
    title: "Tecnologie all’avanguardia",
    description:
      "Strumentazione moderna — Tecar, Tesla Pulse e terapie fisiche — integrata al lavoro manuale.",
  },
  {
    title: "Percorsi su misura",
    description:
      "Ogni piano terapeutico nasce dalla valutazione del paziente e si adatta a obiettivi, tempi e stile di vita.",
  },
  {
    title: "Ambiente accogliente",
    description:
      "Studio, palestra e spazi dedicati pensati per farti sentire a tuo agio in ogni fase del recupero.",
  },
] as const;
