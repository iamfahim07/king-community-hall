'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { CategoryData } from '@/data/siteData';
import Lightbox from './Lightbox';

interface Props {
  category: CategoryData;
  index: number;
}

const CategorySection = ({ category, index }: Props) => {
  const { t } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const isEven = index % 2 === 1;
  const displayImages = category.images.slice(0, 3);

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}>
            {/* Images */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
              {displayImages.map((img, i) => (
                <button
                  type="button"
                  key={img}
                  className={`relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity ${i === 0 ? 'col-span-2 h-48 w-full' : 'h-40 w-full'}`}
                  onClick={() => setLightboxSrc(img)}
                >
                  <Image src={img} alt={category.en.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </button>
              ))}
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                {t(category.bn.name, category.en.name)}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(category.bn.description, category.en.description)}
              </p>
              <Link
                href={category.route}
                className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t('বিস্তারিত দেখুন', 'View Details')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
