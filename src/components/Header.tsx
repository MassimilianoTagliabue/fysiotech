"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-surface-elevated/95 shadow-[0_8px_30px_rgba(20,21,26,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Fysiotech"
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="font-display text-[1.05rem] tracking-[0.04em] sm:text-lg">
            <span className="text-orange">{site.brandFysio}</span>
            <span className={scrolled || open ? "text-steel" : "text-white/90"}>
              {site.brandTech}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink-muted hover:text-ink"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${site.phoneTel}`} className="btn-primary">
            Contattaci / Prenota
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`border-t border-line bg-surface-elevated md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="btn-primary mt-2 justify-center"
            onClick={() => setOpen(false)}
          >
            Contattaci / Prenota
          </a>
        </nav>
      </div>
    </header>
  );
}
