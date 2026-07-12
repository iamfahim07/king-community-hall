'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/siteData';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      <section className="relative h-[50vh] min-h-[350px] pt-16">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Gallery"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 text-center">
          <h1 className="mb-3 text-3xl font-bold text-background text-shadow-hero md:text-5xl">
            {t('গ্যালারি', 'Gallery')}
          </h1>
          <p className="max-w-xl text-lg text-background/90 text-shadow-hero">
            {t('আমাদের সকল অনুষ্ঠানের ছবি দেখুন', 'Browse photos from all our events')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex gap-8 px-4">
          <nav className="sticky top-24 hidden w-64 shrink-0 self-start lg:block" aria-label={t('বিভাগসমূহ', 'Categories')}>
            <h2 className="mb-4 text-lg font-bold text-foreground">{t('বিভাগসমূহ', 'Categories')}</h2>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#gallery-${category.id}`}
                  className="border-l-2 border-transparent px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-secondary hover:text-primary"
                >
                  {t(category.bn.name, category.en.name)}
                </a>
              ))}
            </div>
          </nav>

          <div className="min-w-0 flex-1">
            {categories.map((category) => (
              <section key={category.id} id={`gallery-${category.id}`} className="mb-14 scroll-mt-24">
                <h2 className="mb-6 border-l-4 border-primary pl-4 text-2xl font-bold text-foreground">
                  {t(category.bn.name, category.en.name)}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setLightboxSrc(image)}
                      className="relative h-56 overflow-hidden rounded-lg transition-opacity hover:opacity-90"
                    >
                      <Image
                        src={image}
                        alt={`${category.en.name} ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
