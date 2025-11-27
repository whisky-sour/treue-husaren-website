// src/app/components/Navigation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  // Wenn Route wechselt → Menü schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const buildPathForLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/").filter(Boolean); // ["de","verein"]
    segments[0] = target; // ["en","verein"]
    return "/" + segments.join("/");
  };

  const isDe = locale === "de";

  const navLinks = [
    { href: `/${locale}`, labelDe: "Start", labelEn: "Home" },
    { href: `/${locale}/verein`, labelDe: "Verein", labelEn: "Club" },
    { href: `/${locale}/termine`, labelDe: "Termine", labelEn: "Events" },
    { href: `/${locale}/kontakt`, labelDe: "Kontakt", labelEn: "Contact" },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Desktop-Nav */}
      <nav className="hidden md:flex items-center gap-4 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:underline underline-offset-4"
          >
            {isDe ? link.labelDe : link.labelEn}
          </Link>
        ))}

        {/* Sprache sehr dezent */}
        <div className="ml-2 pl-3 border-l text-[11px] text-slate-500">
          {isDe ? (
            <>
              <span className="font-semibold text-slate-800">DE</span>
              <span className="mx-1">/</span>
              <Link
                href={buildPathForLocale("en")}
                className="hover:text-slate-800"
              >
                EN
              </Link>
            </>
          ) : (
            <>
              <Link
                href={buildPathForLocale("de")}
                className="hover:text-slate-800"
              >
                DE
              </Link>
              <span className="mx-1">/</span>
              <span className="font-semibold text-slate-800">EN</span>
            </>
          )}
        </div>
      </nav>

      {/* Mobile: Burger-Button */}
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-slate-700 bg-white/80 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-white"
        aria-label="Menü öffnen"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="space-y-1">
          <span
            className={`block h-0.5 w-4 bg-slate-800 transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-slate-800 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-slate-800 transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile: Dropdown-Menü */}
      {open && (
        <div className="absolute left-0 right-0 top-[56px] z-30 border-b bg-red-600/95 shadow-sm md:hidden">
          <nav className="max-w-5xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1">
                {isDe ? link.labelDe : link.labelEn}
              </Link>
            ))}

            <div className="pt-1 text-[11px] text-slate-500">
              {isDe ? (
                <>
                  <span className="font-semibold text-slate-800">DE</span>
                  <span className="mx-1">/</span>
                  <Link
                    href={buildPathForLocale("en")}
                    className="hover:text-slate-800"
                  >
                    EN
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={buildPathForLocale("de")}
                    className="hover:text-slate-800"
                  >
                    DE
                  </Link>
                  <span className="mx-1">/</span>
                  <span className="font-semibold text-slate-800">EN</span>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
