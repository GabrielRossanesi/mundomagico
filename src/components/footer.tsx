import { Instagram, MapPin } from "lucide-react";
import { Brand } from "@/components/brand";
import { ContactButton } from "@/components/contact-button";
import { business, navigation } from "@/lib/business";
import { whatsappConfigured } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div><Brand inverse /><p className="footer-slogan">{business.slogan}</p></div>
          <nav className="footer-links" aria-label="Navegação no rodapé">
            {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="footer-socials">
            <a href={business.instagram} rel="noreferrer" target="_blank">
              <Instagram aria-hidden="true" size={18} /> {business.instagramHandle}
            </a>
            {whatsappConfigured && <ContactButton className="footer-whatsapp" whatsappLabel="WhatsApp" />}
            <p><MapPin aria-hidden="true" size={18} /> {business.region}</p>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
