import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "advantages">;

export function AdvantagesSection({ advantages }: Props) {
  if (!advantages?.length) return null;

  return (
    <Section
      id="advantages"
      eyebrow="Advantages"
      align="center"
      title={
        <>
          섬세함이 만드는<br />
          차이
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {advantages.map((a) => (
          <article
            key={a.index}
            className="glass-light group relative overflow-hidden rounded-3xl p-8 text-center transition-all hover:-translate-y-1 sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: "var(--gradient-metal)" }}
            />
            <span className="text-2xl font-light tabular-nums text-muted-foreground">
              {a.index}
            </span>
            <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
              {a.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {a.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
