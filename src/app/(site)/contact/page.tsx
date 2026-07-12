'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] pt-16">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 text-center">
          <h1 className="mb-3 text-3xl font-bold text-background text-shadow-hero md:text-5xl">{t('যোগাযোগ', 'Contact')}</h1>
          <p className="max-w-xl text-lg text-background/90 text-shadow-hero">{t('আমাদের সাথে যোগাযোগ করুন', 'Get in touch with us')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="mb-6 border-l-4 border-primary pl-4 text-2xl font-bold text-foreground md:text-3xl">
                {t('যোগাযোগের তথ্য', 'Contact Information')}
              </h2>
              <ContactItem icon={<Phone className="size-6" />} title={t('ফোন', 'Phone')}>+880 1XXX-XXXXXX</ContactItem>
              <ContactItem icon={<Mail className="size-6" />} title={t('ইমেইল', 'Email')}>info@multicommunityhall.com</ContactItem>
              <ContactItem icon={<MapPin className="size-6" />} title={t('ঠিকানা', 'Address')}>
                {t('১২৩, প্রধান সড়ক, উপজেলা সদর, জেলা শহর, বাংলাদেশ', '123, Main Road, Upazila Sadar, District Town, Bangladesh')}
              </ContactItem>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80"
                alt="Contact illustration"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <EmbedSection title={t('মানচিত্র', 'Map')}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902756509!2d90.39945!3d23.7508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjAiTiA5MMKwMjMnNTguMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </EmbedSection>
          <EmbedSection title={t('কীভাবে আমাদের খুঁজে পাবেন', 'How to Find Us')}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              title="Direction Video"
            />
          </EmbedSection>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 shrink-0 text-primary">{icon}</span>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

function EmbedSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto mb-12 max-w-4xl last:mb-0">
      <h2 className="mb-4 border-l-4 border-primary pl-4 text-2xl font-bold text-foreground">{title}</h2>
      <div className="aspect-video overflow-hidden rounded-lg border border-border">{children}</div>
    </section>
  );
}
