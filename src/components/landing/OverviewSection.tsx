import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "overviewTitle" | "overviewBody" | "overviewImage" | "keyPoints">;

export function OverviewSection({ overviewTitle, overviewBody, overviewImage, keyPoints }: Props) {
  if (!overviewTitle && !overviewBody && !keyPoints?.length) return null;

  return (
    <Section id="overview" eyebrow="Overview" tone="elevated" className="bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 text-center">
          {overviewTitle && (
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {overviewTitle}
            </h2>
          )}
          {overviewBody && (
            <p className="mt-8 text-base leading-relaxed text-foreground/75 sm:text-lg">
              {overviewBody}
            </p>
          )}

          {keyPoints?.length ? (
            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {keyPoints.map((p, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-surface p-6 text-center shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {overviewImage && (
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-card)]">
              <img
                src={overviewImage}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
