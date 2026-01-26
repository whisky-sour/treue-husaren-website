import { Button } from "@/app/components/ui/Button";

type Props = {
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  href: string;
};

export default function CtaJoinSection({
  ctaTitle,
  ctaButton,
  ctaText,
  href,
}: Props) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-gradient-to-r from-brand-red via-red-700 to-brand-red px-4 py-6 sm:px-6 sm:py-7 text-white shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">{ctaTitle}</h2>
      <p className="text-sm sm:text-base mb-4 max-w-2xl">{ctaText}</p>
      <Button href={href} variant="outline">
        {ctaButton}
      </Button>
    </section>
  );
}
