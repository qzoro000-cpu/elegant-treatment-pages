import { Section } from "./Section";
import type { TreatmentData } from "@/data/treatment";

type Props = Pick<TreatmentData, "galleryImages">;

export function GallerySection({ galleryImages }: Props) {
  if (!galleryImages?.length) return null;

  return (
    <Section id="gallery" eyebrow="Gallery" title="공간과 디테일" tone="elevated">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {galleryImages.map((img, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)]"
          >
            <div className="aspect-[4/5] w-full">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
