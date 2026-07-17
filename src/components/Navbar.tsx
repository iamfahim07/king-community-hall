'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, LayoutGrid } from 'lucide-react';
import { categories, siteInfo } from '@/data/siteData';
import ThemeToggle from '@/components/ThemeToggle';
import logo from '@/assets/logo.png';

type NavItem = { to: string; bn: string; en: string };

function DesktopDropdown({
  label,
  items,
  open,
  setOpen,
  translate,
}: {
  label: string;
  items: NavItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  translate: (bn: string, en: string) => string;
}) {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(false);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
      >
        {label} <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-background border border-border rounded-md shadow-lg min-w-55 py-1 z-50">
          {items.map((item) => (
            <Link key={item.to} href={item.to} className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
              {translate(item.bn, item.en)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close every open menu after navigating to another page
  useEffect(() => {
    setMobileOpen(false);
    setEventOpen(false);
    setServiceOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  const eventItems = [
    { to: '/wedding', bn: 'বিয়ের অনুষ্ঠান', en: 'Wedding' },
    { to: '/birthday', bn: 'জন্মদিনের অনুষ্ঠান', en: 'Birthday Party' },
    { to: '/workshop', bn: 'ওয়ার্কশপ ও সেমিনার', en: 'Workshop & Seminar' },
    { to: '/corporate', bn: 'কর্পোরেট ইভেন্ট', en: 'Corporate Event' },
  ];

  const serviceItems = [
    { to: '/ielts', bn: 'IELTS কোর্স এবং স্পোকেন ইংলিশ', en: 'IELTS & Spoken English' },
    { to: '/computer-training', bn: 'কম্পিউটার প্রশিক্ষণ', en: 'Computer Training' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-background/95 backdrop-blur shadow-md' : 'bg-background shadow-sm'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt={siteInfo.name.en} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
            {t('হোম', 'Home')}
          </Link>
          <DesktopDropdown label={t('ইভেন্ট', 'Events')} items={eventItems} open={eventOpen} setOpen={setEventOpen} translate={t} />
          <DesktopDropdown label={t('সার্ভিস', 'Services')} items={serviceItems} open={serviceOpen} setOpen={setServiceOpen} translate={t} />
          <Link href="/gallery" className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
            {t('গ্যালারি', 'Gallery')}
          </Link>
          <Link href="/contact" className="px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
            {t('যোগাযোগ', 'Contact')}
          </Link>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-4 py-1.5 rounded-full border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {language === 'bn' ? 'English' : 'বাংলা'}
          </button>
          <ThemeToggle className="ml-2" />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          {pathname === '/gallery' && (
            <button
              type="button"
              onClick={() => setDrawerOpen((open) => !open)}
              aria-expanded={drawerOpen}
              className="px-3 py-1.5 rounded-md border border-primary text-primary text-xs font-semibold flex items-center gap-1"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              {t('বিভাগসমূহ', 'Categories')}
            </button>
          )}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border-2 border-primary text-primary text-xs font-semibold"
          >
            {language === 'bn' ? 'EN' : 'বাং'}
          </button>
          <ThemeToggle className="w-7.5 h-7.5" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={t('মেনু', 'Menu')}
            className="text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block px-6 py-3 text-foreground hover:bg-secondary font-medium">{t('হোম', 'Home')}</Link>
          
          <button onClick={() => setEventOpen(!eventOpen)} className="w-full flex items-center justify-between px-6 py-3 text-foreground hover:bg-secondary font-medium">
            {t('ইভেন্ট', 'Events')} <ChevronDown className={`w-4 h-4 transition-transform ${eventOpen ? 'rotate-180' : ''}`} />
          </button>
          {eventOpen && eventItems.map(item => (
            <Link key={item.to} href={item.to} className="block px-10 py-2 text-sm text-muted-foreground hover:text-primary">{t(item.bn, item.en)}</Link>
          ))}

          <button onClick={() => setServiceOpen(!serviceOpen)} className="w-full flex items-center justify-between px-6 py-3 text-foreground hover:bg-secondary font-medium">
            {t('সার্ভিস', 'Services')} <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? 'rotate-180' : ''}`} />
          </button>
          {serviceOpen && serviceItems.map(item => (
            <Link key={item.to} href={item.to} className="block px-10 py-2 text-sm text-muted-foreground hover:text-primary">{t(item.bn, item.en)}</Link>
          ))}

          <Link href="/gallery" className="block px-6 py-3 text-foreground hover:bg-secondary font-medium">{t('গ্যালারি', 'Gallery')}</Link>
          <Link href="/contact" className="block px-6 py-3 text-foreground hover:bg-secondary font-medium">{t('যোগাযোগ', 'Contact')}</Link>
        </div>
      )}
      {drawerOpen && pathname === '/gallery' && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg px-4 py-3">
          <div className="grid grid-cols-2 gap-1">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#gallery-${cat.id}`}
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-secondary"
              >
                {t(cat.bn.name, cat.en.name)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
