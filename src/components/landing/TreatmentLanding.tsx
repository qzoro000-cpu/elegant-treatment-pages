import type { TreatmentData } from "@/data/treatment";
import { SiteHeader } from "./SiteHeader";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { EffectsSection } from "./EffectsSection";
import { AdvantagesSection } from "./AdvantagesSection";
import { PrecautionsSection } from "./PrecautionsSection";
import { WhyTatoaSection } from "./WhyTatoaSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { StickyMobileCta } from "./StickyMobileCta";

export function TreatmentLanding({ data }: { data: TreatmentData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <HeroSection
          category={data.category}
          treatmentName={data.treatmentName}
          subtitle={data.subtitle}
          summary={data.summary}
          heroImage={data.heroImage}
          heroBadge={data.heroBadge}
          durationText={data.durationText}
          priceText={data.priceText}
          originalPriceText={data.originalPriceText}
          ctaPrimary={data.ctaPrimary}
          ctaSecondary={data.ctaSecondary}
        />
        <OverviewSection
          overviewTitle={data.overviewTitle}
          overviewBody={data.overviewBody}
          overviewImage={data.overviewImage}
          keyPoints={data.keyPoints}
        />
        <EffectsSection effects={data.effects} progressInfo={data.progressInfo} />
        <AdvantagesSection advantages={data.advantages} />
        <PrecautionsSection
          precautionsBefore={data.precautionsBefore}
          precautionsAfter={data.precautionsAfter}
          contraindications={data.contraindications}
        />
        <WhyTatoaSection tatoaReasons={data.tatoaReasons} />
        <PricingSection
          pricingPrograms={data.pricingPrograms}
          pricingNote={data.pricingNote}
          ctaPrimary={data.ctaPrimary}
        />
        <FaqSection faqItems={data.faqItems} />
        <FinalCtaSection finalCta={data.finalCta} clinicInfo={data.clinicInfo} />
      </main>
      <StickyMobileCta
        ctaPrimary={data.ctaPrimary}
        ctaSecondary={data.ctaSecondary}
        priceText={data.priceText}
      />
    </div>
  );
}
