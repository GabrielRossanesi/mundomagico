import { Sparkle } from "lucide-react";
import { ContactButton } from "@/components/contact-button";

export function FinalCTA() {
  return (
    <section className="final-cta" id="contato" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell final-cta-inner">
        <Sparkle className="contact-star contact-star--left" size={74} strokeWidth={0.9} aria-hidden="true" />
        <Sparkle className="contact-star contact-star--right" size={49} strokeWidth={1.15} aria-hidden="true" />
        <div className="final-copy" data-reveal>
          <h2 id="contact-title">Vamos transformar sua próxima festa em <em>um momento mágico?</em></h2>
          <p>Fale com a Mundo Mágico e encontre o tema ideal para sua comemoração.</p>
          <ContactButton className="button button--gold" />
        </div>
      </div>
    </section>
  );
}
