import { Section } from "./Section";
import { cn } from "@/lib/utils";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "pricingPrograms" | "pricingNote" | "ctaPrimary">;

export function PricingSection({ pricingPrograms, pricingNote, ctaPrimary }: Props) {
  if (!pricingPrograms?.length) return null;

  return (
    <Section
      id="pricing"
      eyebrow="Programs & Pricing"
      align="center"
      title={
        <>
          단정한 가격,<br />
          정직한 설계
        </>
      }
      description="필요한 만큼 충분히, 그 이상은 권하지 않습니다."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6 items-stretch">
        {pricingPrograms.map((p) => (
          <div
            key={p.name}
            className={cn(
              "relative flex flex-col overflow-hidden rounded-3xl p-8 sm:p-10 transition-all",
              p.highlight
                ? "glass-ink text-white shadow-[var(--shadow-float)] lg:scale-[1.03]"
                : "glass-light text-card-foreground shadow-[var(--shadow-card)]",
            )}
          >
            {p.tag && (
              <span
                className={cn(
                  "absolute right-6 top-6 inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em]",
                  p.highlight
                    ? "border-white/30 text-white/80"
                    : "border-card-foreground/30 text-card-foreground/70",
                )}
              >
                {p.tag}
              </span>
            )}

            <p
              className={cn(
                "text-center text-[10px] uppercase tracking-[0.28em]",
                p.highlight ? "text-white/60" : "text-card-foreground/55",
              )}
            >
              Program
            </p>
            <h3 className="mt-3 text-center text-xl font-semibold">{p.name}</h3>
            {p.duration && (
              <p
                className={cn(
                  "mt-1 text-center text-sm",
                  p.highlight ? "text-white/60" : "text-card-foreground/60",
                )}
              >
                {p.duration}
              </p>
            )}

            <div className="mt-8 flex flex-col items-center gap-1">
              {p.originalPrice && (
                <span
                  className={cn(
                    "text-sm line-through",
                    p.highlight ? "text-white/50" : "text-card-foreground/50",
                  )}
                >
                  {p.originalPrice}
                </span>
              )}
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl break-all">
                {p.price}
              </span>
            </div>

            <ul
              className={cn(
                "mt-8 space-y-3 border-t pt-8 text-sm",
                p.highlight ? "border-white/15" : "border-card-foreground/15",
              )}
            >
              {p.includes.map((inc, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={cn(
                      "mt-[10px] h-px w-4 flex-none",
                      p.highlight ? "bg-white/40" : "bg-card-foreground/40",
                    )}
                  />
                  <span
                    className={cn(
                      p.highlight ? "text-white/85" : "text-card-foreground/80",
                    )}
                  >
                    {inc}
                  </span>
                </li>
              ))}
            </ul>

            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                className={cn(
                  "mt-10 inline-flex h-12 items-center justify-center rounded-full text-sm font-medium tracking-wide transition-all",
                  p.highlight
                    ? "bg-white text-foreground hover:opacity-90"
                    : "border border-card-foreground bg-transparent text-card-foreground hover:bg-card-foreground hover:text-card",
                )}
              >
                {ctaPrimary.label}
              </a>
            )}
          </div>
        ))}
      </div>

      {pricingNote && (
        <p className="mt-10 text-center text-xs text-muted-foreground">{pricingNote}</p>
      )}
    </Section>
  );
}
