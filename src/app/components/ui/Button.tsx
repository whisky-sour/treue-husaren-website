type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary:
      "bg-brand-red text-white hover:bg-red-800 focus:ring-brand-red focus:ring-offset-brand-surface",
    outline:
      "border border-brand-red text-brand-red bg-white hover:bg-brand-redLight/40 focus:ring-brand-red focus:ring-offset-brand-surface",
    ghost:
      "text-brand-red hover:bg-brand-redLight/40 focus:ring-brand-red focus:ring-offset-brand-surface",
  };

  const className = `${base} ${variants[variant] ?? variants.primary}`;

  if (href) {
    // in Next kannst du das auch mit next/link wrappen
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
