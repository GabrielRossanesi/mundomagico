import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { ContactButton } from "@/components/contact-button";
import type { Theme } from "@/lib/content";

export function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <article className="theme-card">
      <div className="theme-image">
        {theme.image ? (
          <Image {...theme.image} alt={theme.image.alt}
            sizes="(min-width: 75rem) 350px, (min-width: 56rem) 30vw, (min-width: 36rem) 45vw, 90vw" />
        ) : <span className="theme-image-empty"><ImageIcon aria-hidden="true" size={23} /> Foto indisponível</span>}
        {theme.illustrative && <span className="image-note">Imagem ilustrativa</span>}
      </div>
      <div className="theme-card-copy">
        <h3>{theme.name}</h3>
        <p>{theme.description}</p>
        <ContactButton showIcon={false} className="button button--theme" theme={theme.illustrative ? undefined : theme.name}
          whatsappLabel={theme.illustrative ? "Consultar temas" : "Quero esse tema"}
          instagramLabel={theme.illustrative ? "Consultar no Instagram" : "Quero esse tema no Instagram"} />
      </div>
    </article>
  );
}
