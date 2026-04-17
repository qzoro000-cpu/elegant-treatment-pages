import type { TreatmentData } from "@/data/treatment";

type Props = Pick<
  TreatmentData,
  | "category"
  | "treatmentName"
  | "subtitle"
  | "summary"
  | "heroImage"
  | "heroBadge"
  | "durationText"
  | "priceText"
  | "originalPriceText"
  | "ctaPrimary"
  | "ctaSecondary"
>;

export function HeroSection({
  category,
  treatmentName,
  subtitle,
  summary,
  heroImage,
  heroBadge,
  durationText,
  priceText,
  originalPriceText,
  ctaPrimary,
  ctaSecondary,
}: Props) {
  if (!treatmentName) return null;

  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-end">
          {/* Image — large editorial frame */}
          <div className="relative lg:col-span-7 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-float)]">
              {heroImage && (
                <img
                  src={heroImage}
                  alt={treatmentName}
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "var(--gradient-overlay)" }}
              />
              {heroBadge && (
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md">
                    {heroBadge}
                  </span>
                </div>
              )}
            </div>

            {/* Floating premium info card */}
            {(durationText || priceText) && (
              <div className="absolute -bottom-10 left-4 right-4 sm:-bottom-12 sm:left-auto sm:right-8 sm:w-[340px]">
                <div className="glass-light rounded-2xl p-5 shadow-[var(--shadow-card)]">
                  <div className="grid grid-cols-2 gap-4">
                    {durationText && (
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          Duration
                        </p>
                        <p className="mt-2 text-xl font-medium leading-snug truncate">{durationText}</p>
                      </div>
                    )}
                    {priceText && (
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          From
                        </p>
                        <div className="mt-2 flex flex-col gap-0.5">
                          {originalPriceText && (
                            <span className="text-xs text-muted-foreground line-through leading-none">
                              {originalPriceText}
                            </span>
                          )}
                          <span className="text-xl font-semibold leading-snug">{priceText}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="lg:col-span-5 lg:order-1 lg:pb-16 text-center">
            {category && (
              <div className="mb-10 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
                <span className="h-px w-10 bg-foreground/30" />
                {category}
              </div>
            )}
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {treatmentName}
            </h1>
            {subtitle && (
              <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
            )}
            {summary && (
              <p className="mt-8 text-base leading-relaxed text-foreground/75">
                {summary}
              </p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {ctaPrimary && (
                  <a
                    href={ctaPrimary.href}
                    className="group inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium tracking-wide text-background transition-all hover:opacity-90"
                  >
                    {ctaPrimary.label}
                    <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                )}
                {ctaSecondary && (
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex h-14 items-center justify-center rounded-full border border-border-strong bg-transparent px-8 text-sm font-medium tracking-wide text-foreground transition-all hover:bg-surface"
                  >
                    {ctaSecondary.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
