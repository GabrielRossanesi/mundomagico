import type { DecorationImage } from "@/lib/content";

interface Business {
  name: string;
  shortName: string;
  service: string;
  slogan: string;
  region: string;
  instagram: string;
  instagramHandle: string;
  announcedThemeCount: number;
  logo: DecorationImage | null;
}

export const business: Business = {
  name: "Mundo Mágico | Pegue e Monte",
  shortName: "Mundo Mágico",
  service: "Pegue e Monte",
  slogan: "Pequenos detalhes, grandes memórias!",
  region: "Zona Leste de São Paulo",
  instagram: "https://www.instagram.com/mm.pegueemonte_/",
  instagramHandle: "@mm.pegueemonte_",
  announcedThemeCount: 150,
  logo: {
    src: "/images/mm%20pegue%20e%20monte%20-%20logo.jpg",
    alt: "Logotipo da Mundo Mágico | Pegue e Monte",
    width: 150,
    height: 150,
  },
};

export const navigation = [
  { label: "Temas", href: "#temas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;

function getSiteOrigin(value: string | undefined): URL | undefined {
  if (!value?.trim()) return undefined;

  try {
    const url = new URL(value.trim());
    if (url.protocol === "https:" && url.hostname.includes(".") && !url.username && !url.password &&
        url.pathname === "/" && !url.search && !url.hash) {
      return new URL(url.origin);
    }
  } catch {
    return undefined;
  }
}

export const siteOrigin = getSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);
