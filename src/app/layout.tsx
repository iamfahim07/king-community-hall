import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { categories, siteInfo } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: siteInfo.name.en,
    template: `%s | ${siteInfo.name.en}`,
  },
  description: siteInfo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteInfo.name.en,
    locale: "bn_BD",
    title: siteInfo.name.en,
    description: siteInfo.description,
    url: "/",
    images: [{ url: categories[0].heroImage }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}>
      <body className="min-h-full font-bangla">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
