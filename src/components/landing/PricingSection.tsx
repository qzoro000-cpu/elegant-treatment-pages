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
              "relative flex flex-col rounded-3xl border p-8 sm:p-10 transition-all",
              p.highlight
                ? "border-foreground bg-foreground text-background shadow-[var(--shadow-float)] lg:scale-[1.03]"
                : "border-border bg-card shadow-[var(--shadow-soft)]",
            )}
          >
            {p.tag && (
              <span
                className={cn(
                  "absolute right-6 top-6 inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em]",
                  p.highlight
                    ? "border-background/30 text-background/80"
                    : "border-border-strong text-muted-foreground",
                )}
              >
                {p.tag}
              </span>
            )}

            <p
              className={cn(
                "text-[10px] uppercase tracking-[0.28em]",
                p.highlight ? "text-background/60" : "text-muted-foreground",
              )}
            >
              Program
            </p>
            <h3 className="mt-3 font-display text-2xl font-light">{p.name}</h3>
            {p.duration && (
              <p
                className={cn(
                  "mt-1 text-sm",
                  p.highlight ? "text-background/60" : "text-muted-foreground",
                )}
              >
                {p.duration}
              </p>
            )}

            <div className="mt-8 flex items-baseline gap-3">
              {p.originalPrice && (
                <span
                  className={cn(
                    "text-sm line-through",
                    p.highlight ? "text-background/50" : "text-muted-foreground",
                  )}
                >
                  {p.originalPrice}
                </span>
              )}
              <span className="font-display text-4xl font-light tracking-tight sm:text-5xl">
                {p.price}
              </span>
            </div>

            <ul
              className={cn(
                "mt-8 space-y-3 border-t pt-8 text-sm",
                p.highlight ? "border-background/15" : "border-border",
              )}
            >
              {p.includes.map((inc, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={cn(
                      "mt-[10px] h-px w-4 flex-none",
                      p.highlight ? "bg-background/40" : "bg-foreground/40",
                    )}
                  />
                  <span
                    className={cn(
                      p.highlight ? "text-background/85" : "text-foreground/80",
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
                    ? "bg-background text-foreground hover:opacity-90"
                    : "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
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
