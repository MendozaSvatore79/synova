import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "./i18n/LanguageContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.synovasystems.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Synova Systems | Soluciones técnicas para empresas",
    template: "%s | Synova Systems",
  },
  description:
    "Impulsamos tu operación con soluciones técnicas, desarrollo web y automatización para empresas modernas.",
  keywords: [
    "Synova Systems",
    "soluciones técnicas",
    "desarrollo web",
    "automatización",
    "software empresarial",
    "tecnología para empresas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Synova Systems",
    title: "Synova Systems | Soluciones técnicas para empresas",
    description:
      "Impulsamos tu operación con soluciones técnicas, desarrollo web y automatización para empresas modernas.",
    images: [
      {
        url: "/img/HeroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Synova Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synova Systems | Soluciones técnicas para empresas",
    description:
      "Impulsamos tu operación con soluciones técnicas, desarrollo web y automatización para empresas modernas.",
    images: ["/img/HeroImage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "DxUXqe6Q0O2f-HaaXKiLS2HpxAbQIKOnx2u_x_8WenE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
