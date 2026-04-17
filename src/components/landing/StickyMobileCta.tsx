import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "ctaPrimary" | "ctaSecondary" | "priceText">;

export function StickyMobileCta({ ctaPrimary, ctaSecondary, priceText }: Props) {
  if (!ctaPrimary && !ctaSecondary) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden pointer-events-none">
      <div
        className="pointer-events-auto mx-3 mb-3 rounded-2xl border border-border bg-card/95 p-3 shadow-[var(--shadow-float)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          {priceText && (
            <div className="hidden xs:flex flex-col px-2 min-w-0">
              <span className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                From
              </span>
              <span className="font-display text-base font-light truncate">{priceText}</span>
            </div>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="flex h-12 flex-1 items-center justify-center rounded-xl border border-border-strong bg-transparent text-sm font-medium text-foreground"
            >
              {ctaSecondary.label}
            </a>
          )}
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="flex h-12 flex-[1.4] items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background"
            >
              {ctaPrimary.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
