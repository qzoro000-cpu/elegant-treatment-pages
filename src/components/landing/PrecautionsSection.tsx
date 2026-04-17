import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "precautionsBefore" | "precautionsAfter" | "contraindications">;

function PrecautionCard({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] sm:p-10">
      <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <ul className="mt-8 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="text-sm leading-relaxed text-foreground/80">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PrecautionsSection({
  precautionsBefore,
  precautionsAfter,
  contraindications,
}: Props) {
  const cards = [
    precautionsBefore?.length
      ? { label: "Before", title: "시술 전 안내", items: precautionsBefore }
      : null,
    precautionsAfter?.length
      ? { label: "After", title: "시술 후 케어", items: precautionsAfter }
      : null,
    contraindications?.length
      ? { label: "Notice", title: "사전 상담이 필요한 경우", items: contraindications }
      : null,
  ].filter(Boolean) as { label: string; title: string; items: string[] }[];

  if (!cards.length) return null;

  return (
    <Section
      id="precautions"
      eyebrow="Precautions"
      title="안전한 시술을 위한 안내"
      description="시술 전후의 작은 흐름까지 함께 설계합니다. 변화는 안전 위에서 가장 아름답습니다."
      tone="elevated"
      align="center"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {cards.map((c) => (
          <PrecautionCard key={c.label} {...c} />
        ))}
      </div>
    </Section>
  );
}
