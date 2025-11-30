"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

type NavLink = {
  segment: string; // "", "verein", ...
  labelDe: string;
  labelEn: string;
};

const LINKS: NavLink[] = [
  { segment: "", labelDe: "Start", labelEn: "Home" },
  { segment: "verein", labelDe: "Verein", labelEn: "Club" },
  { segment: "termine", labelDe: "Termine", labelEn: "Events" },
  { segment: "kontakt", labelDe: "Kontakt", labelEn: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const isDe = locale === "de";

  // Menü schließen, wenn Route wechselt
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const buildHref = (segment: string) =>
    segment === "" ? `/${locale}` : `/${locale}/${segment}`;

  const isActive = (segment: string) => {
    if (!pathname) return false;
    const parts = pathname.split("/").filter(Boolean); // ["de","verein",...]
    const currentSegment = parts[1] ?? ""; // "" | "verein" | ...
    return currentSegment === segment;
  };

  const buildPathForLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const parts = pathname.split("/").filter(Boolean); // ["de","verein",...]
    parts[0] = target;
    return "/" + parts.join("/");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Desktop-Navigation */}
      <nav className="hidden md:flex items-center gap-4 text-sm">
        {LINKS.map((link) => (
          <Link
            key={link.segment}
            href={buildHref(link.segment)}
            className={`transition-colors hover:text-brand-red ${
              isActive(link.segment) ? "font-semibold text-brand-red" : ""
            }`}
          >
            {isDe ? link.labelDe : link.labelEn}
          </Link>
        ))}

        {/* Sprache sehr dezent */}
        <div className="ml-2 pl-3 border-l text-[11px] text-brand-muted">
          {isDe ? (
            <>
              <span className="font-semibold text-brand-text">DE</span>
              <span className="mx-1">/</span>
              <Link
                href={buildPathForLocale("en")}
                className="hover:text-brand-red"
              >
                EN
              </Link>
            </>
          ) : (
            <>
              <Link
                href={buildPathForLocale("de")}
                className="hover:text-brand-red"
              >
                DE
              </Link>
              <span className="mx-1">/</span>
              <span className="font-semibold text-brand-text">EN</span>
            </>
          )}
        </div>
      </nav>

      {/* Mobile: Burger-Button */}
      <button
        type="button"
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-brand-text shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-white"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {/* einfache Icon-Variante: drei Linien → X */}
        <div className="relative h-3 w-4">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-full bg-brand-text transition-transform ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-full bg-brand-text transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-3 block h-0.5 w-full bg-brand-text transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile: Dropdown-Menü (weiß, ohne roten Voll-Hintergrund) */}
      {open && (
        <div className="fixed inset-x-0 top-[64px] z-40 md:hidden">
          {/* optional dunkler Backdrop kannst du später ergänzen */}
          <div className="mx-3 rounded-2xl border border-gray-200 bg-white shadow-lg">
            <nav className="flex flex-col gap-1 px-4 py-3 text-sm">
              {LINKS.map((link) => (
                <Link
                  key={link.segment}
                  href={buildHref(link.segment)}
                  className={`rounded-md px-1 py-1.5 transition-colors ${
                    isActive(link.segment)
                      ? "bg-brand-red/5 text-brand-red font-semibold"
                      : "text-brand-text hover:bg-gray-50"
                  }`}
                >
                  {isDe ? link.labelDe : link.labelEn}
                </Link>
              ))}

              {/* Sprachauswahl unten, klein */}
              <div className="mt-2 border-t pt-2 text-[11px] text-brand-muted">
                {isDe ? (
                  <>
                    <span className="font-semibold text-brand-text">DE</span>
                    <span className="mx-1">/</span>
                    <Link
                      href={buildPathForLocale("en")}
                      className="hover:text-brand-red"
                    >
                      EN
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href={buildPathForLocale("de")}
                      className="hover:text-brand-red"
                    >
                      DE
                    </Link>
                    <span className="mx-1">/</span>
                    <span className="font-semibold text-brand-text">EN</span>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
