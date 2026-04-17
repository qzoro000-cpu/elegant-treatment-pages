import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "finalCta" | "clinicInfo">;

export function FinalCtaSection({ finalCta, clinicInfo }: Props) {
  if (!finalCta) return null;

  return (
    <section
      id="reserve"
      className="relative w-full overflow-hidden text-card-foreground"
      style={{ background: "var(--gradient-card-frost)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-shine)" }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-card-foreground/55">
          Begin Your Journey
        </p>
        <h2 className="mt-6 font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {finalCta.headline}
        </h2>
        {finalCta.body && (
          <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-card-foreground/70 sm:text-lg">
            {finalCta.body}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={finalCta.primary.href}
            className="inline-flex h-14 items-center justify-center rounded-full bg-card-foreground px-10 text-sm font-medium tracking-wide text-card transition-all hover:opacity-90"
          >
            {finalCta.primary.label}
          </a>
          {finalCta.secondary && (
            <a
              href={finalCta.secondary.href}
              className="inline-flex h-14 items-center justify-center rounded-full border border-card-foreground/30 bg-transparent px-10 text-sm font-medium tracking-wide text-card-foreground transition-all hover:bg-card-foreground/10"
            >
              {finalCta.secondary.label}
            </a>
          )}
        </div>

        {clinicInfo && (
          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-card-foreground/10 pt-12 text-left sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-card-foreground/50">
                Clinic
              </p>
              <p className="mt-3 font-display text-lg">{clinicInfo.name}</p>
              {clinicInfo.address && (
                <p className="mt-2 text-sm text-card-foreground/65">{clinicInfo.address}</p>
              )}
            </div>
            {clinicInfo.hours?.length ? (
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-card-foreground/50">
                  Hours
                </p>
                <ul className="mt-3 space-y-1 text-sm text-card-foreground/70">
                  {clinicInfo.hours.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {clinicInfo.phone && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-card-foreground/50">
                  Contact
                </p>
                <a
                  href={`tel:${clinicInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="mt-3 block font-display text-lg hover:opacity-80"
                >
                  {clinicInfo.phone}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
