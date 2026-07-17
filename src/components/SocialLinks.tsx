'use client';

import AuroraBackground from '@/components/AuroraBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteInfo } from '@/data/siteData';
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const SocialLinks = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate py-12 bg-secondary">
      <AuroraBackground />
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          {t('আমাদের সাথে সংযুক্ত থাকুন', 'Stay Connected With Us')}
        </h3>
        <div className="flex justify-center gap-8">
          <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={Facebook01Icon} className="size-10" />
          </a>
          <a href={siteInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={YoutubeIcon} className="size-10" />
          </a>
          <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
            <HugeiconsIcon icon={InstagramIcon} className="size-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
