import { Brand } from "@/components/brand";
import { ContactButton } from "@/components/contact-button";
import { MobileMenu } from "@/components/mobile-menu";
import { navigation } from "@/lib/business";

export function Header() {
  const contact = <ContactButton className="button button--outline header-contact"
    whatsappLabel="Pedir orçamento" instagramLabel="Pedir orçamento no Instagram" />;

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="desktop-contact">{contact}</div>
        <MobileMenu contact={contact} />
      </div>
    </header>
  );
}
