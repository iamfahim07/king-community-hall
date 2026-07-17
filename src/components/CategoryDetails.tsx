'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  BookOpen,
  CalendarCheck,
  Car,
  Check,
  Clock,
  Landmark,
  Mic,
  Monitor,
  Ruler,
  Users,
  Utensils,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Lightbox from '@/components/Lightbox';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import type { CategoryData, FactId } from '@/data/siteData';

const FACT_ICONS: Record<FactId, LucideIcon> = {
  capacity: Users,
  size: Ruler,
  parking: Car,
  stage: Mic,
  catering: Utensils,
  power: Zap,
  prayer: Landmark,
  booking: CalendarCheck,
  schedule: Clock,
  materials: BookOpen,
  lab: Monitor,
  certificate: Award,
};

export default function CategoryDetails({ category }: { category: CategoryData }) {
  const { t, language } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const localized = language === 'bn' ? category.bn : category.en;

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      <section className="relative h-[50vh] min-h-[350px] pt-16">
        <Image src={category.heroImage} alt={category.en.name} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-hero-scrim" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 text-center">
          <h1 className="mb-3 text-3xl font-bold text-overlay-foreground text-shadow-hero md:text-5xl">{t(category.bn.name, category.en.name)}</h1>
          <p className="max-w-xl text-lg text-overlay-foreground/90 text-shadow-hero">{t(category.bn.subtitle, category.en.subtitle)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading className="mb-4">{t(category.bn.name, category.en.name)}</SectionHeading>
          <div className="mb-12 max-w-3xl space-y-4">
            {localized.details.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">{paragraph}</p>
            ))}
          </div>

          {category.facts?.length ? (
            <>
              <SectionHeading className="mb-6">{t('এক নজরে', 'At a Glance')}</SectionHeading>
              <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.facts.map((fact) => {
                  const Icon = FACT_ICONS[fact.id];
                  const { label, value } = language === 'bn' ? fact.bn : fact.en;
                  return (
                    <div key={fact.id} className="rounded-lg border border-border bg-card p-4">
                      <Icon className="mb-2 size-5 text-primary" />
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="font-semibold text-card-foreground">{value}</p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}

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
            <SectionHeading className="mb-8">{t('সুবিধা সমূহ', 'Amenities')}</SectionHeading>
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
