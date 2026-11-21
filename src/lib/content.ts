export interface DecorationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const categories = [
  "Infantil",
  "Princesas",
  "Super-heróis",
  "Safari",
  "Chá revelação",
  "Outros eventos",
] as const;

export type Category = (typeof categories)[number];

export interface Theme {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: DecorationImage | null;
  illustrative?: boolean;
}

export interface GalleryItem {
  id: string;
  caption: string;
  image: DecorationImage;
}

interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

const princessImage: DecorationImage = {
  src: "/images/princesas.webp",
  alt: "Castelo rosa com balões, flores e pedestais com detalhes dourados",
  width: 1200,
  height: 900,
};

const safariImage: DecorationImage = {
  src: "/images/safari.webp",
  alt: "Cenário em verde e terracota com balões, folhagens e uma girafa de pelúcia",
  width: 1200,
  height: 900,
};

const revealImage: DecorationImage = {
  src: "/images/cha-revelacao.webp",
  alt: "Cenário com urso de pelúcia, arco de madeira e balões em azul e rosa",
  width: 1200,
  height: 900,
};

const castleImage: DecorationImage = {
  src: "/images/castelo-magico.webp",
  alt: "Castelo lilás com balões roxos e dourados, um bolo e uma lua crescente",
  width: 1122,
  height: 1402,
};

export const heroPhoto = { image: castleImage, illustrative: true };

// Cadastre aqui somente temas divulgados pela empresa e fotos autorizadas.
export const themes: Theme[] = [];

export const exampleThemes: Theme[] = [
  {
    id: "princesas",
    name: "Reino das Princesas",
    category: "Princesas",
    description: "Um castelo cor de rosa com detalhes dourados.",
    image: princessImage,
    illustrative: true,
  },
  {
    id: "safari",
    name: "Safari dos Bichinhos",
    category: "Safari",
    description: "Bichinhos, folhagens e uma paleta de tons naturais.",
    image: safariImage,
    illustrative: true,
  },
  {
    id: "revelacao",
    name: "Chá Revelação",
    category: "Chá revelação",
    description: "Um ursinho e balões em rosa e azul para a grande surpresa.",
    image: revealImage,
    illustrative: true,
  },
];

export const galleryPhotos: GalleryItem[] = [];

export const galleryExamples: GalleryItem[] = [
  { id: "castelo", caption: "Castelo rosa e detalhes dourados", image: princessImage },
  { id: "safari", caption: "Folhagens e tons naturais", image: safariImage },
  { id: "revelacao", caption: "Rosa, azul e texturas suaves", image: revealImage },
];

export const testimonials: Testimonial[] = [];
