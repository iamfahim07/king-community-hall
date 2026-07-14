'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/siteData';

const HeroCarousel = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const router = useRouter();

  // Re-created whenever `current` changes, so manual navigation
  // (dots, arrows, swipe) restarts the full 5s delay.
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, paused]);

  const goPrev = () => setCurrent(prev => (prev - 1 + categories.length) % categories.length);
  const goNext = () => setCurrent(prev => (prev + 1) % categories.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  const handleCTA = () => {
    router.push('/contact');
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('হিরো স্লাইডশো', 'Hero slideshow')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
      {/* Arrows */}
      <button
        type="button"
        onClick={goPrev}
        aria-label={t('পূর্ববর্তী স্লাইড', 'Previous slide')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label={t('পরবর্তী স্লাইড', 'Next slide')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setCurrent(i)}
            aria-label={t(cat.bn.name, cat.en.name)}
            aria-current={i === current}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-background/50 hover:bg-background/80'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
