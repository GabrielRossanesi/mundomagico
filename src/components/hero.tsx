import Image from "next/image";
import { MapPin, Sparkle, Sparkles } from "lucide-react";
import { ContactButton } from "@/components/contact-button";
import { business } from "@/lib/business";
import { heroPhoto } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker" data-hero-copy><Sparkles aria-hidden="true" size={17} /> DECORAÇÃO PEGUE E MONTE</p>
          <h1 id="hero-title" data-hero-copy>Sua festa merece<br className="hero-break" /> <em>um toque de magia!</em></h1>
          <p className="hero-description" data-hero-copy>
            Escolha o tema perfeito e transforme pequenos detalhes em grandes memórias com nossos kits Pegue e Monte.
          </p>
          <div className="hero-actions" data-hero-copy>
            <a className="button button--primary" href="#temas">Conhecer nossos temas</a>
            <ContactButton className="button button--outline" whatsappLabel="Consultar pelo WhatsApp"
              instagramLabel="Consultar no Instagram" />
          </div>
          <p className="hero-location" data-hero-copy><MapPin aria-hidden="true" size={17} /> {business.region}</p>
        </div>
        <figure className="hero-figure">
          <div className="hero-arch">
            <Image {...heroPhoto.image} alt={heroPhoto.image.alt} preload
              sizes="(min-width: 80rem) 470px, (min-width: 48rem) 43vw, (min-width: 32rem) 420px, 88vw"
              data-hero-image />
          </div>
          <Sparkle className="hero-spark hero-spark--top" size={53} strokeWidth={1.25} aria-hidden="true" data-hero-spark />
          <Sparkle className="hero-spark hero-spark--small" size={23} strokeWidth={1.45} aria-hidden="true" data-hero-spark />
          <Sparkle className="hero-spark hero-spark--bottom" size={44} strokeWidth={1.2} aria-hidden="true" data-hero-spark />
          {heroPhoto.illustrative && <figcaption className="hero-caption">Imagem ilustrativa</figcaption>}
        </figure>
      </div>
    </section>
  );
}
