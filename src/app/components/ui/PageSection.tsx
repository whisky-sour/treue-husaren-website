type PageSectionProps = {
  title?: string;
  eyebrow?: string; // z.B. "Veranstaltung", "Unser Verein"
  children: React.ReactNode;
};

export function PageSection({ title, eyebrow, children }: PageSectionProps) {
  return (
    <section className="space-y-4">
      {(eyebrow || title) && (
        <header className="space-y-1">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
