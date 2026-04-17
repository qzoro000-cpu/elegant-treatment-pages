import { Section } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "faqItems">;

export function FaqSection({ faqItems }: Props) {
  if (!faqItems?.length) return null;

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="자주 묻는 질문"
      description="궁금하신 부분을 정리했습니다. 더 깊은 안내가 필요하시다면 언제든 문의해 주세요."
      tone="elevated"
      align="center"
      className="bg-white"
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="py-7 text-left text-base font-semibold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-7 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
