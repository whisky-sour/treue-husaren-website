import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faschingsverein Treue Husaren Fürth",
  description:
    "Offizielle Website des Faschingsvereins Treue Husaren aus Fürth. Prunksitzungen, Umzüge, Kinderfasching und mehr.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-bold">Faschingsverein Example e.V.</div>
            <nav className="flex gap-4 text-sm">
              <Link href="/">Start</Link>
              <Link href="/verein">Verein</Link>
              <Link href="/termine">Termine</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto px-4 py-6">{children}</main>
        <footer className="border-t mt-8">
          <div className="max-w-5xl mx-auto px-4 py-4 text-sm flex flex-wrap gap-4 justify-between">
            <span>
              © {new Date().getFullYear()} Faschingsverein Example e.V.
            </span>
            <span className="flex gap-3">
              <a href="/impressum">Impressum</a>
              <a href="/datenschutz">Datenschutz</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
