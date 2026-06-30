import type { Metadata } from "next";
import "./globals.css";

const englishTitle = "Talent Nexus Taiwan | Executive Search and Recruitment Services";
const englishDescription = "Talent Nexus Taiwan provides executive search and professional recruitment services across technology, semiconductors, software, electronics and specialist functions, helping companies find suitable talent and professionals explore career opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://talentnexus.com.tw"),
  title: englishTitle,
  description: englishDescription,
  keywords: ["Talent Nexus", "Talent Nexus Taiwan", "英鏈人才顧問有限公司", "executive search", "recruitment", "semiconductor recruitment", "technology recruitment", "獵頭", "人才招募"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    url: "https://talentnexus.com.tw/",
    siteName: "Talent Nexus Taiwan",
    title: englishTitle,
    description: englishDescription,
    images: [{ url: "/logo.png", width: 1240, height: 832, alt: "Talent Nexus" }]
  },
  twitter: { card: "summary_large_image", title: englishTitle, description: englishDescription, images: ["/logo.png"] },
  icons: { icon: "/logo.png", apple: "/logo.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "英鏈人才顧問有限公司",
    alternateName: "Talent Nexus Taiwan",
    url: "https://talentnexus.com.tw/",
    logo: "https://talentnexus.com.tw/logo.png",
    email: "HR@talentnexus.com.tw",
    telephone: "+886-2-7735-4467",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11F., No. 335, Ruiguang Rd.",
      addressLocality: "Neihu Dist., Taipei City",
      addressCountry: "TW"
    }
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Talent Nexus Taiwan",
    alternateName: "英鏈人才顧問有限公司",
    url: "https://talentnexus.com.tw/"
  };

  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} /></body></html>;
}
