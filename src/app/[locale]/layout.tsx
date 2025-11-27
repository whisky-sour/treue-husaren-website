// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import Navigation from "@/app/components/Navigation";
import "../globals.css";

type Params = { locale: Locale };
type LayoutProps = { children: ReactNode; params: Promise<Params> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Treue Husaren Fürth e.V.",
  description:
    "Offizielle Website der Treuen Husaren Fürth e.V. – Fasching in Fürth und Umgebung.",
};

async function getMessages(locale: Locale) {
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  return messages;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Locale validieren
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-40">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* Optional: Logo/Icon */}
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500" />
                <div className="leading-tight">
                  <div className="font-bold text-sm sm:text-base">
                    Treue Husaren Fürth e.V.
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500">
                    Fasching mit Herz
                  </div>
                </div>
              </div>

              {/* Navigation inkl. Burger-Menü */}
              <Navigation />
            </div>
          </header>

          <main className="flex-1 max-w-5xl mx-auto px-4 py-6 sm:py-8">
            {children}
          </main>

          <footer className="border-t bg-white/90 mt-8">
            <div className="max-w-5xl mx-auto px-4 py-4 text-xs sm:text-sm flex flex-wrap gap-3 justify-between">
              <span>
                © {new Date().getFullYear()} Treue Husaren Fürth e.V.
              </span>
              <span className="flex gap-3">
                <a href={`/${locale}/impressum`}>Impressum</a>
                <a href={`/${locale}/datenschutz`}>Datenschutz</a>
              </span>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
