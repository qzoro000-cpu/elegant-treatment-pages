import { createFileRoute } from "@tanstack/react-router";
import { TreatmentLanding } from "@/components/landing/TreatmentLanding";
import { sampleTreatment } from "@/data/treatment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${sampleTreatment.treatmentName} · TATOA Clinic` },
      {
        name: "description",
        content:
          sampleTreatment.summary ??
          "TATOA의 시그니처 트리트먼트. 정제된 기술과 단정한 회복 곡선.",
      },
      { property: "og:title", content: `${sampleTreatment.treatmentName} · TATOA Clinic` },
      {
        property: "og:description",
        content: sampleTreatment.summary ?? "TATOA의 시그니처 트리트먼트.",
      },
      { property: "og:type", content: "website" },
      ...(sampleTreatment.heroImage
        ? [
            { property: "og:image", content: sampleTreatment.heroImage },
            { name: "twitter:image", content: sampleTreatment.heroImage },
          ]
        : []),
    ],
  }),
  component: Index,
});

function Index() {
  return <TreatmentLanding data={sampleTreatment} />;
}
