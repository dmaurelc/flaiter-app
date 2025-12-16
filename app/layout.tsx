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
  metadataBase: new URL("https://flaiter.vercel.app"),
  title: {
    default: "Flaiter - Diccionario Chileno",
    template: "%s | Flaiter",
  },
  description:
    "Traductor y guía de supervivencia para el español chileno. Aprende jerga, modismos y expresiones chilenas.",
  openGraph: {
    title: "Flaiter - Diccionario Chileno",
    description: "Traductor y guía de supervivencia para el español chileno.",
    url: "https://flaiter.vercel.app",
    siteName: "Flaiter",
    images: [
      {
        url: "/logo.svg", // Fallback to logo for now
        width: 800,
        height: 600,
        alt: "Flaiter Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flaiter - Diccionario Chileno",
    description: "Traductor y guía de supervivencia para el español chileno.",
    images: ["/logo.svg"],
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
        {children}
      </body>
    </html>
  );
}
