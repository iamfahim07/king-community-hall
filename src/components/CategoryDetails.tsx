'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Lightbox from '@/components/Lightbox';
import { useLanguage } from '@/contexts/LanguageContext';
import type { CategoryData } from '@/data/siteData';

export default function CategoryDetails({ category }: { category: CategoryData }) {
  const { t } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      <section className="relative h-[50vh] min-h-[350px] pt-16">
        <Image src={category.heroImage} alt={category.en.name} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-overlay/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 text-center">
          <h1 className="mb-3 text-3xl font-bold text-overlay-foreground text-shadow-hero md:text-5xl">{t(category.bn.name, category.en.name)}</h1>
          <p className="max-w-xl text-lg text-overlay-foreground/90 text-shadow-hero">{t(category.bn.subtitle, category.en.subtitle)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 border-l-4 border-primary pl-4 text-2xl font-bold text-foreground md:text-3xl">{t(category.bn.name, category.en.name)}</h2>
          <p className="mb-10 max-w-3xl leading-relaxed text-muted-foreground">{t(category.bn.description, category.en.description)}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.images.map((image, index) => (
              <button type="button" key={image} onClick={() => setLightboxSrc(image)} className="relative h-56 overflow-hidden rounded-lg transition-opacity hover:opacity-90">
                <Image src={image} alt={`${category.en.name} ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {category.amenities?.length ? (
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 border-l-4 border-primary pl-4 text-2xl font-bold text-foreground md:text-3xl">{t('সুবিধা সমূহ', 'Amenities')}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.amenities.map((amenity) => (
                <div key={amenity.en} className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <Check className="size-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{t(amenity.bn, amenity.en)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
