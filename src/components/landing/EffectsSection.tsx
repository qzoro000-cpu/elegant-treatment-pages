import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "effects" | "progressInfo">;

export function EffectsSection({ effects, progressInfo }: Props) {
  if (!effects?.length && !progressInfo?.length) return null;

  return (
    <Section
      id="effects"
      eyebrow="Effects & Process"
      title={
        <>
          기대할 수 있는 변화와<br />
          <span className="metal-text">정돈된 진행 흐름</span>
        </>
      }
      description="시술의 흐름을 투명하게 공유합니다. 변화는 강요되지 않고, 회복은 단정합니다."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
        {effects?.length ? (
          <div className="lg:col-span-2">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/40 p-8 shadow-[var(--shadow-card)] sm:p-10 text-card-foreground"
              style={{ background: "var(--gradient-card-frost)" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: "var(--gradient-shine)" }}
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.28em] text-card-foreground/55">
                  Expected Effects
                </p>
                <ul className="mt-8 space-y-5">
                  {effects.map((e, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-2 inline-block h-px w-6 flex-none bg-card-foreground/40" />
                      <span className="font-display text-xl font-light leading-snug">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {progressInfo?.length ? (
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
              {progressInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between bg-card p-6 sm:p-8 min-h-[140px]"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {info.label}
                  </p>
                  <p className="mt-6 font-display text-2xl font-light leading-tight">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
