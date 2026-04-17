import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "tatoaReasons">;

export function WhyTatoaSection({ tatoaReasons }: Props) {
  if (!tatoaReasons?.length) return null;

  return (
    <Section
      id="why-tatoa"
      eyebrow="Why Tatoa"
      tone="dark"
      title={
        <>
          왜 이 시술은<br />
          <span className="metal-text">타토아여야 하는가</span>
        </>
      }
      description="장비가 아닌 철학이, 기술이 아닌 태도가 결과를 만듭니다."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {tatoaReasons.map((r, i) => (
          <div
            key={i}
            className="bg-foreground p-8 sm:p-12 text-background"
          >
            <div className="flex items-start gap-5">
              <span className="font-display text-2xl font-light text-background/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-normal sm:text-3xl">{r.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-background/70 sm:text-base">
                  {r.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
