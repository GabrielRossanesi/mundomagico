import { MapPin, PackageOpen, Sparkle, Sparkles } from "lucide-react";
import { business } from "@/lib/business";

export function Benefits() {
  return (
    <section className="section benefits-section" aria-labelledby="benefits-title">
      <div className="shell benefits-grid">
        <div className="benefit-stat" data-reveal>
          <Sparkle className="stat-star stat-star--top" size={56} aria-hidden="true" strokeWidth={1.1} />
          <p><strong>{business.announcedThemeCount}<span>+</span></strong> temas anunciados</p>
          <Sparkle className="stat-star stat-star--bottom" size={32} aria-hidden="true" strokeWidth={1.2} />
        </div>
        <div className="benefits-copy" data-reveal>
          <h2 id="benefits-title">A magia está em <em>cada detalhe.</em></h2>
          <ul className="benefits-list">
            <li><MapPin aria-hidden="true" /><span><strong>Da Zona Leste de São Paulo</strong>Atendimento na região.</span></li>
            <li><Sparkles aria-hidden="true" /><span><strong>Diferentes estilos de decoração</strong>Inspirações para descobrir o tema que combina com a festa.</span></li>
            <li><PackageOpen aria-hidden="true" /><span><strong>Liberdade para montar</strong>Escolha o kit e monte a decoração no seu espaço.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
