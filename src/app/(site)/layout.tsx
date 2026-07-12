import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <SocialLinks />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
