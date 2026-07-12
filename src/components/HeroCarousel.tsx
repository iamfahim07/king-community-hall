'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/siteData';

const HeroCarousel = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const router = useRouter();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % categories.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCTA = () => {
    router.push('/contact');
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {categories.map((cat, i) => (
        <div
          key={cat.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={cat.heroImage} alt={cat.en.name} fill sizes="100vw" className="object-cover" priority={i === 0} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background text-shadow-hero mb-4 transition-all duration-500">
          {t(categories[current].bn.headline, categories[current].en.headline)}
        </h1>
        <p className="text-lg md:text-xl text-background/90 text-shadow-hero mb-8 max-w-2xl">
          {t(categories[current].bn.subtitle, categories[current].en.subtitle)}
        </p>
        <button
          onClick={handleCTA}
          className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
        >
          {t('ইভেন্ট বুক করুন', 'Book an Event')}
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-background/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
