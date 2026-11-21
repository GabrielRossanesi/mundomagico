import { Plus } from "lucide-react";
import { ContactButton } from "@/components/contact-button";
import { business } from "@/lib/business";

const questions = [
  { question: "Como funciona o Pegue e Monte?", answer: "Você escolhe um tema, combina os detalhes com a equipe e monta o kit de decoração no local da festa." },
  { question: "Como consultar datas disponíveis?", answer: "Entre em contato com a equipe e informe a data da festa e o tema de interesse para consultar a disponibilidade." },
  { question: "Qual região vocês atendem?", answer: `A Mundo Mágico atende a ${business.region}. Consulte a equipe sobre o seu bairro.` },
  { question: "Como funciona a retirada e a devolução?", answer: "Consulte a equipe para combinar as opções, os horários e as condições de retirada e devolução do seu kit." },
  { question: "O que acompanha os kits?", answer: "Peça à equipe a lista de itens do tema que você quer. Assim, você consegue planejar a decoração com os itens do kit escolhido." },
];

export function FAQ() {
  return (
    <section className="section faq-section" id="perguntas" aria-labelledby="faq-title" tabIndex={-1}>
      <div className="shell faq-grid">
        <div className="faq-intro" data-reveal>
          <h2 id="faq-title">Perguntas <em>frequentes</em></h2>
          <p>Ficou com outra dúvida sobre o seu kit?</p>
          <ContactButton className="button button--outline" />
        </div>
        <div className="faq-list" data-reveal>
          {questions.map(({ question, answer }) => (
            <details key={question} name="perguntas-frequentes">
              <summary>{question}<span className="faq-icon"><Plus aria-hidden="true" size={19} strokeWidth={1.8} /></span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
