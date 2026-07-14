import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import WhatsAppButton from '@/components/WhatsAppButton';
import { categories, siteInfo } from '@/data/siteData';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteInfo.name.en,
  alternateName: siteInfo.name.bn,
  description: siteInfo.description,
  url: siteInfo.url,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  image: categories.map((category) => category.heroImage),
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteInfo.address.en,
    addressCountry: 'BD',
  },
  sameAs: [siteInfo.social.facebook, siteInfo.social.youtube, siteInfo.social.instagram],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Navbar />
      <main>{children}</main>
      <SocialLinks />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
