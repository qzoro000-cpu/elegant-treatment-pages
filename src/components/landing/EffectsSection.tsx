import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "effects" | "progressInfo">;

export function EffectsSection({ effects, progressInfo }: Props) {
  if (!effects?.length && !progressInfo?.length) return null;

  return (
    <Section
      id="effects"
      eyebrow="Effects & Process"
      tone="dark"
      className="bg-black"
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
              className="glass-silver relative overflow-hidden rounded-3xl p-8 sm:p-10 text-white"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: "var(--gradient-shine)" }}
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                  Expected Effects
                </p>
                <ul className="mt-8 space-y-5">
                  {effects.map((e, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-2 inline-block h-px w-6 flex-none bg-white/40" />
                      <span className="font-display text-xl font-light leading-snug text-white">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {progressInfo?.length ? (
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {progressInfo.map((info, i) => (
                <div
                  key={i}
                  className="glass-silver flex flex-col justify-between rounded-2xl p-6 sm:p-8 min-h-[140px]"
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                    {info.label}
                  </p>
                  <p className="mt-6 font-display text-2xl font-light leading-tight text-white">
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
