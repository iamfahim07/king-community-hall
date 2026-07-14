import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';
import { siteInfo } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'যোগাযোগ – Contact',
  description: `বুকিং ও যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। ফোন: ${siteInfo.phone}, ইমেইল: ${siteInfo.email}। ${siteInfo.address.bn}`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `যোগাযোগ – Contact | ${siteInfo.name.en}`,
    description: `বুকিং ও যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। ফোন: ${siteInfo.phone}`,
    url: '/contact',
    siteName: siteInfo.name.en,
    images: [{ url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80' }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
