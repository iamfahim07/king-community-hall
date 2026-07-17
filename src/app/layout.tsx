import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { siteInfo } from "@/data/siteData";

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
    images: [{ url: "/logo-with-bg.jpg" }],
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
    <html
      lang="bn"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies the saved/OS theme before first paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full font-bangla">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
