import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { groups } from "@/data/groups";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { GroupType } from "@/domain/group.types";

type Params = { locale: string; slug: string };
type Props = { params: Promise<Params> };

function getGroup(slug: string) {
  return groups.find((g) => g.slug === slug);
}

export function generateStaticParams() {
  const locales: Locale[] = ["de", "en"];
  return groups.flatMap((g) =>
    locales.map((locale) => ({ locale, slug: g.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;

  const group = getGroup(slug);
  if (!group) return {};

  const isDe = locale === "de";
  const title = isDe ? group.titleDe : group.titleEn;
  const description = isDe ? group.descriptionDe : group.descriptionEn;

  return {
    title: `${title} | Treue Husaren Fürth e.V.`,
    description,
  };
}

export default async function GroupDetailPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const isDe = locale === "de";

  const group = getGroup(slug);
  if (!group) notFound();

  const title = isDe ? group!.titleDe : group!.titleEn;
  const desc = isDe ? group!.descriptionDe : group!.descriptionEn;
  const showJoin = group.type === GroupType.DANCING && group.joinable;

  return (
    <article className="space-y-6">
      {/* Breadcrumb zurück */}
      <div className="text-xs text-brand-muted">
        <Link className="hover:underline" href={`/${locale}/verein`}>
          {isDe ? "← Zurück zum Verein" : "← Back to club"}
        </Link>
      </div>

      {/* Hero */}
      <header className="space-y-3">
        <p className="inline-flex items-center rounded-full bg-brand-red/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
          {group.type === GroupType.DANCING
            ? isDe
              ? "Tanzgruppe"
              : "Dance group"
            : isDe
              ? "Team"
              : "Team"}
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="relative h-48 sm:h-64">
            <Image
              src={group.coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </div>

          <div className="p-4 sm:p-6 space-y-2">
            {group.type === GroupType.DANCING && (
              <div className="flex flex-wrap items-center gap-2">
                {group.age && (
                  <Badge>
                    {isDe
                      ? `Alter: ${group.age} Jahre`
                      : `Age: ${group.age} years`}
                  </Badge>
                )}
                {group.joinable && (
                  <span className="text-xs text-brand-muted">
                    {isDe
                      ? "Mitmachen jederzeit möglich"
                      : "New members welcome"}
                  </span>
                )}
              </div>
            )}

            <p className="text-sm sm:text-base leading-relaxed text-brand-muted max-w-3xl">
              {desc}
            </p>

            {showJoin && (
              <div className="pt-2">
                <Button href={`/${locale}/kontakt`} variant="primary">
                  {isDe ? "Jetzt mitmachen" : "Join us"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {group.type === GroupType.DANCING ? (
        <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
          <Card className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {isDe ? "Trainingszeiten" : "Training schedule"}
            </h2>

            <div className="space-y-2">
              <span className="font-medium">
                {isDe ? group.training.dayDe : group.training.dayEn} ·{" "}
                {group.training.time}
              </span>
              <span className="text-sm text-brand-muted">
                {" "}
                {group.training.location}
              </span>
            </div>
          </Card>

          <Card className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {isDe ? "Trainerteam" : "Coaches"}
            </h2>

            <ul className="space-y-3">
              {group.trainers.map((tr) => (
                <li key={tr.name} className="flex items-start gap-3">
                  {tr.image ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                      <Image
                        src={tr.image}
                        alt={tr.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-brand-green/10 border border-gray-200" />
                  )}

                  <div className="font-semibold">{tr.name}</div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {isDe ? "Aufgaben" : "Tasks"}
            </h2>
            <ul className="space-y-2 text-sm text-brand-muted">
              {(isDe ? group.tasksDe : group.tasksEn).map((task) => (
                <li key={task} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-red" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {isDe ? "Mitglieder" : "Members"}
            </h2>
            <ul className="space-y-2 text-sm text-brand-muted">
              {group.members.map((member) => (
                <li key={member.name}>{member.name}</li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* Galerie */}
      {group.gallery.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-semibold">
            {isDe ? "Impressionen" : "Gallery"}
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.gallery.slice(0, 6).map((src) => (
              <div
                key={src}
                className="relative h-40 overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <Image src={src} alt={title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
