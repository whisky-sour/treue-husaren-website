import Link from "next/link";
import Image from "next/image";
import { groups } from "@/data/groups";
import { Card } from "@/app/components/ui/Card";

export function GroupCard({
  locale,
  group,
}: {
  locale: string;
  group: (typeof groups)[number];
}) {
  const isDe = locale === "de";
  const title = isDe ? group.titleDe : group.titleEn;
  const desc = isDe ? group.descriptionDe : group.descriptionEn;

  return (
    <Link href={`/${locale}/verein/${group.slug}`} className="block">
      <Card className="overflow-hidden p-0 transition-transform hover:-translate-y-0.5 hover:shadow-lg">
        <div className="relative h-36 sm:h-40">
          <Image
            src={group.coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
            {desc}
          </p>
          <p className="mt-3 text-xs font-semibold text-brand-red underline underline-offset-2">
            {isDe ? "Mehr erfahren" : "Learn more"}
          </p>
        </div>
      </Card>
    </Link>
  );
}
