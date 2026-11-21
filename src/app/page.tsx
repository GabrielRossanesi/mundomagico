import { Benefits } from "@/components/benefits";
import { ContactButton } from "@/components/contact-button";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PageMotion } from "@/components/page-motion";
import { Testimonials } from "@/components/testimonials";
import { ThemeCard } from "@/components/theme-card";
import { ThemeCatalog } from "@/components/theme-catalog";
import { business, siteOrigin } from "@/lib/business";
import { whatsappConfigured } from "@/lib/contact";
import { exampleThemes, galleryExamples, galleryPhotos, themes } from "@/lib/content";

const hasThemes = themes.length > 0;
const hasGallery = galleryPhotos.length > 0;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: siteOrigin?.href,
  logo: siteOrigin && business.logo ? new URL(business.logo.src, siteOrigin).href : undefined,
  sameAs: [business.instagram],
  areaServed: { "@type": "Place", name: business.region },
  slogan: business.slogan,
};

export default function HomePage() {
  const catalog = (hasThemes ? themes : exampleThemes).map((theme) => ({
    id: theme.id,
    category: theme.category,
    card: <ThemeCard theme={theme} />,
  }));

  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }} />
        <Hero />
        <section className="section catalog-section" id="temas" aria-labelledby="themes-title" tabIndex={-1}>
          <div className="shell">
            <div className="section-heading section-heading--center" data-reveal>
              <h2 id="themes-title">Um mundo de possibilidades <em>para sua festa!</em></h2>
              <p>{hasThemes ? "Explore os temas e consulte a equipe sobre a sua data." : "Inspire-se com as ideias abaixo e consulte a equipe para conhecer os temas disponíveis."}</p>
            </div>
            <ThemeCatalog items={catalog} />
          </div>
        </section>
        <HowItWorks />
        <Benefits />
        <section className="section gallery-section" id="galeria" aria-labelledby="gallery-title" tabIndex={-1}>
          <div className="shell">
            <div className="section-heading gallery-heading" data-reveal>
              <h2 id="gallery-title">Galeria <em>de festas</em></h2>
              <p>{hasGallery ? "Veja de perto os detalhes das decorações." : "Imagens ilustrativas de cores e montagens para inspirar sua festa."}</p>
            </div>
            <Gallery items={hasGallery ? galleryPhotos : galleryExamples} />
          </div>
        </section>
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <PageMotion />
      </main>
      <Footer />
      <aside className="mobile-contact" aria-label="Contato rápido">
        <ContactButton className="button button--primary" />
      </aside>
      {process.env.NODE_ENV === "development" && !whatsappConfigured && (
        <p className="dev-notice">Prévia de desenvolvimento · Defina NEXT_PUBLIC_WHATSAPP_NUMBER em .env.local.</p>
      )}
    </>
  );
}
