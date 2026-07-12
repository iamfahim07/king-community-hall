'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src={logo} alt="Multi Community Hall" className="h-24 w-auto mb-3" />
            <p className="text-background/70 text-sm">
              {t('আপনার যেকোনো অনুষ্ঠানের জন্য আদর্শ স্থান', 'The ideal venue for all your events')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('দ্রুত লিংক', 'Quick Links')}</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <Link href="/" className="hover:text-primary transition-colors">{t('হোম', 'Home')}</Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">{t('গ্যালারি', 'Gallery')}</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">{t('যোগাযোগ', 'Contact')}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('ইভেন্ট সমূহ', 'Events')}</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <Link href="/wedding" className="hover:text-primary transition-colors">{t('বিয়ের অনুষ্ঠান', 'Wedding')}</Link>
              <Link href="/birthday" className="hover:text-primary transition-colors">{t('জন্মদিন', 'Birthday')}</Link>
              <Link href="/workshop" className="hover:text-primary transition-colors">{t('ওয়ার্কশপ', 'Workshop')}</Link>
              <Link href="/corporate" className="hover:text-primary transition-colors">{t('কর্পোরেট', 'Corporate')}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('যোগাযোগ', 'Contact')}</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>info@multicommunityhall.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t('১২৩, প্রধান সড়ক, উপজেলা সদর, জেলা শহর, বাংলাদেশ', '123, Main Road, Upazila Sadar, District Town, Bangladesh')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Multi Community Hall. {t('সর্বস্বত্ব সংরক্ষিত।', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
