import { Gift, MessageCircle, PartyPopper, Sparkles } from "lucide-react";

const steps = [
  { title: "Escolha seu tema", description: "Explore as ideias e escolha a que combina com a sua festa.", icon: Sparkles },
  { title: "Consulte sua data", description: "Fale com a equipe para saber a disponibilidade do tema.", icon: MessageCircle },
  { title: "Combine como receber", description: "Confira com a equipe as opções para receber e devolver o kit.", icon: Gift },
  { title: "Monte e celebre", description: "Componha a decoração no seu espaço e aproveite a festa.", icon: PartyPopper },
];

export function HowItWorks() {
  return (
    <section className="section steps-section" id="como-funciona" aria-labelledby="steps-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-heading section-heading--center" data-reveal>
          <h2 id="steps-title">É simples transformar <em>sua festa!</em></h2>
        </div>
        <ol className="steps-grid" data-reveal-group>
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li key={title} className="step" data-group-item>
              <div className="step-icon"><Icon size={25} strokeWidth={1.55} aria-hidden="true" />
                <span aria-hidden="true">{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
