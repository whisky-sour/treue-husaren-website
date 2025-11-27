"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales, localeNames, Locale } from "@/i18n/config";

export default function Navigation() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // pathname sieht z.B. so aus: "/de/verein"
  // wir bauen daraus "/en/verein" usw.
  function switchLocaleUrl(targetLocale: Locale) {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean); // ["de","verein"]
    segments[0] = targetLocale; // ["en","verein"]
    return "/" + segments.join("/");
  }

  return (
    <nav className="flex gap-4 items-center text-sm">
      <Link href={`/${locale}`}>{t("home")}</Link>
      <Link href={`/${locale}/verein`}>{t("about")}</Link>
      <Link href={`/${locale}/kontakt`}>{t("contact")}</Link>

      <div className="border-l pl-3 ml-2 flex gap-2 items-center">
        {locales.map((loc) => (
          <Link
            key={loc}
            href={switchLocaleUrl(loc)}
            className={loc === locale ? "font-semibold underline" : ""}
          >
            {localeNames[loc]}
          </Link>
        ))}
      </div>
    </nav>
  );
}
