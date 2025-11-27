import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Locale, locales } from "@/i18n/config";
import Navigation from "@/app/components/Navigation";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// SEO-Meta depending on locale
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // TODO: Change static strings to translation keys
  // const t = await getTranslations({
  //   locale: locale as Locale,
  //   namespace: 'LocaleLayout'
  // });

  if (locale === "de") {
    return {
      title: "Faschingsverein Example e.V. | Fasching in Musterstadt",
      description:
        "Offizielle Website des Faschingsverein Example e.V. aus Musterstadt. Prunksitzungen, Umzüge und Kinderfasching.",
    };
  }

  return {
    title: "Carnival Club Example | Carnival in Musterstadt",
    description:
      "Official website of Carnival Club Example in Musterstadt. Gala sessions, parades and kids carnival.",
  };
}

async function getMessages(locale: Locale) {
  return (await import(`@/i18n/messages/${locale}.json`)).default;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="border-b">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="font-bold">Treue Husaren Fürth</div>
              <Navigation />
            </div>
          </header>
          <main className="flex-1 max-w-5xl mx-auto px-4 py-6">{children}</main>
          <footer className="border-t mt-8">
            <div className="max-w-5xl mx-auto px-4 py-4 text-sm flex flex-wrap gap-4 justify-between">
              <span>© {new Date().getFullYear()} Treue Husaren Fürth</span>
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
