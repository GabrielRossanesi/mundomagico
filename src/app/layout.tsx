import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { business, siteOrigin } from "@/lib/business";
import { heroPhoto } from "@/lib/content";
import "./globals.css";

const dmSans = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-normal.woff2", weight: "660" },
    { path: "./fonts/fraunces-latin-italic.woff2", weight: "620", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const title = "Mundo Mágico | Decoração Pegue e Monte na Zona Leste de SP";
const description = "Kits de decoração Pegue e Monte na Zona Leste de São Paulo. Conheça a Mundo Mágico, explore ideias para sua festa e consulte seu tema com a equipe.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: siteOrigin,
  alternates: siteOrigin ? { canonical: "/" } : undefined,
  robots: siteOrigin ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    title,
    description,
    siteName: business.name,
    locale: "pt_BR",
    type: "website",
    url: siteOrigin?.href,
    images: siteOrigin ? [{ ...heroPhoto.image, url: heroPhoto.image.src }] : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffdfb",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body id="inicio">{children}</body>
    </html>
  );
}
