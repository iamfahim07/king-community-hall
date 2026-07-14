import type { Metadata } from 'next';
import GalleryContent from '@/components/GalleryContent';
import { siteInfo } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'গ্যালারি – Gallery',
  description:
    'আমাদের হলে আয়োজিত বিয়ে, জন্মদিন, ওয়ার্কশপ, সেমিনার ও কর্পোরেট ইভেন্টের ছবি দেখুন।',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: `গ্যালারি – Gallery | ${siteInfo.name.en}`,
    description: 'আমাদের হলে আয়োজিত বিয়ে, জন্মদিন, ওয়ার্কশপ, সেমিনার ও কর্পোরেট ইভেন্টের ছবি দেখুন।',
    url: '/gallery',
    siteName: siteInfo.name.en,
    images: [{ url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80' }],
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
