import { testimonials } from "@/lib/content";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-heading section-heading--center" data-reveal>
          <h2 id="testimonials-title">Quem celebrou <em>com a gente</em></h2>
        </div>
        <ul className="testimonials-grid" data-reveal-group>
          {testimonials.map(({ id, name, quote }) => (
            <li key={id} data-group-item>
              <figure><blockquote><p>{quote}</p></blockquote><figcaption>{name}</figcaption></figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
