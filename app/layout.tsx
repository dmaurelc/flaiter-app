import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text, Inter } from "next/font/google"; // Keeping Inter for body backup or specific needs
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"], // User requested italic for serif titles
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Backup/Body
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flaiter.netlify.app"),
  title: {
    default: "Chilenismos: Diccionario y Traductor Chileno | Flaiter",
    template: "%s | Flaiter",
  },
  description:
    "Traductor y guía de supervivencia para el español chileno. Aprende jerga, modismos y chilenismos con nuestra IA experta.",
  keywords: [
    "chilenismos",
    "diccionario chileno",
    "jerga chilena",
    "modismos chilenos",
    "traductor chileno",
    "español de chile",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chilenismos: Diccionario y Traductor Chileno | Flaiter",
    description:
      "Traductor y guía de supervivencia para el español chileno. Aprende chilenismos.",
    url: "https://flaiter.netlify.app",
    siteName: "Flaiter",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Flaiter - Diccionario de Chilenismos",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilenismos: Diccionario y Traductor Chileno | Flaiter",
    description:
      "Traductor y guía de supervivencia para el español chileno. Aprende chilenismos.",
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Flaiter",
              operatingSystem: "iOS, Android, Web",
              applicationCategory: "EducationalApplication",
              description:
                "Traductor y diccionario experto en chilenismos y jerga chilena.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1000",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
