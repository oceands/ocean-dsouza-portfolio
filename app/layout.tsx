import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const SITE_URL = "https://ocean-dsouza-portfolio.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#F6F6F3" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ocean D'souza | Platform Product Manager | Consumer & Enterprise AI",
    template: "%s | Ocean D'souza",
  },
  description:
    "Portfolio of Ocean D'souza, Platform Product Manager in Dubai with 5 years scaling core commerce platforms, checkout & payment architectures, omnichannel data, and enterprise AI systems across Barakat Fresh, GMG, and Formcase GMBH.",
  keywords: [
    "Ocean D'souza",
    "Ocean Dsouza",
    "Platform Product Manager",
    "Product Owner Dubai",
    "Digital Product Specialist",
    "Barakat Fresh",
    "GMG Sun and Sand Sports Nike",
    "Formcase GMBH IServ",
    "D2C Commerce Platform",
    "Enterprise AI Product Manager",
    "Checkout.com",
    "SpotDraft CLM",
    "Microsoft Dynamics 365",
    "Procol",
    "University of Wollongong in Dubai",
  ],
  authors: [{ name: "Ocean D'souza", url: SITE_URL }],
  creator: "Ocean D'souza",
  publisher: "Ocean D'souza",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ocean D'souza | Platform Product Manager",
    title:
      "Ocean D'souza | Platform Product Manager | Consumer & Enterprise AI",
    description:
      "Platform Product Manager in Dubai building scalable commerce storefronts, payment & loyalty engines, and AI-powered internal platforms.",
    images: [
      {
        url: "/ocean-portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Ocean D'souza | Platform Product Manager in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ocean D'souza | Platform Product Manager | Consumer & Enterprise AI",
    description:
      "Platform Product Manager in Dubai building scalable commerce storefronts, payment & loyalty engines, and AI-powered internal platforms.",
    images: ["/ocean-portrait.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ocean D'souza",
  alternateName: "Ocean Dsouza",
  jobTitle: "Platform Product Manager",
  url: SITE_URL,
  image: `${SITE_URL}/ocean-portrait.jpg`,
  email: "mailto:oceands06@gmail.com",
  telephone: "+971506989926",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  worksFor: {
    "@type": "Organization",
    name: "Barakat Fresh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Wollongong in Dubai",
  },
  sameAs: [
    "https://www.linkedin.com/in/oceands/",
    "https://topmate.io/ocean_dsouza10",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ocean-theme');
                  var theme = saved === 'light' ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-[100dvh] bg-canvas text-ink font-sans">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
