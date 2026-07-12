'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const SocialLinks = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          {useLanguage().t('আমাদের সাথে সংযুক্ত থাকুন', 'Stay Connected With Us')}
        </h3>
        <div className="flex justify-center gap-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={Facebook01Icon} className="size-10" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={YoutubeIcon} className="size-10" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={InstagramIcon} className="size-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
