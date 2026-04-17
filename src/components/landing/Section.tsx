import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "default" | "elevated" | "dark";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        tone === "elevated" && "bg-surface",
        tone === "dark" && "bg-foreground text-background",
        "py-20 sm:py-28 lg:py-36",
        className,
      )}
    >
      {/* Hairline divider — fades at edges */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: tone === "dark"
            ? "linear-gradient(to right, transparent, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.10) 70%, transparent)"
            : "linear-gradient(to right, transparent, rgba(20,18,15,0.10) 30%, rgba(20,18,15,0.10) 70%, transparent)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-12 sm:mb-16 lg:mb-20 max-w-3xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <div
                className={cn(
                  "mb-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em]",
                  tone === "dark" ? "text-background/60" : "text-muted-foreground",
                  align === "center" && "justify-center",
                )}
              >
                <span className="h-px w-8 bg-current opacity-40" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-6 text-base leading-relaxed text-pretty sm:text-lg",
                  tone === "dark" ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
