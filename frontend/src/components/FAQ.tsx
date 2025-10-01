import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Tutti gli strumenti sono gratuiti?",
    answer:
      "Sì, tutti gli strumenti di CloudOps Tools Hub sono completamente gratuiti e open source. Il nostro obiettivo è fornire strumenti utili alla community senza costi.",
    value: "item-1",
  },
  {
    question: "I miei dati sono sicuri?",
    answer:
      "Assolutamente sì. La privacy e la sicurezza sono le nostre priorità principali. Tutti i dati vengono processati localmente quando possibile, e utilizziamo crittografia end-to-end per proteggere le informazioni sensibili.",
    value: "item-2",
  },
  {
    question: "Posso contribuire al progetto?",
    answer:
      "Certamente! Il progetto è completamente open source su GitHub. Accogliamo contributi di ogni tipo: bug report, feature request, documentazione e codice. Consulta il repository per le linee guida sui contributi.",
    value: "item-3",
  },
  {
    question: "Quali tecnologie vengono utilizzate?",
    answer:
      "Il frontend è sviluppato con React, TypeScript, Tailwind CSS e shadcn/ui. Il backend utilizza Node.js con database PostgreSQL. Alcuni workflow complessi sono gestiti tramite n8n per l'automazione.",
    value: "item-4",
  },
  {
    question: "Ci saranno nuovi strumenti?",
    answer:
      "Sì! Aggiungiamo regolarmente nuovi strumenti basati sui feedback della community e sulle esigenze emergenti nel mondo DevOps e della sicurezza. Puoi suggerire nuovi strumenti attraverso GitHub Issues.",
    value: "item-5",
  },
  {
    question: "Posso usare questi strumenti in produzione?",
    answer:
      "Gli strumenti contrassegnati come 'Disponibili' sono stabili e testati per l'uso in produzione. Quelli 'In sviluppo' o 'Prossimamente' sono ancora in fase di testing. Controlla sempre lo stato di ogni strumento.",
    value: "item-6",
  },
  {
    question: "C'è supporto tecnico disponibile?",
    answer:
      "Il supporto è fornito attraverso la community su GitHub. Puoi aprire issues per bug report o richieste di aiuto. Per esigenze enterprise, stiamo valutando opzioni di supporto dedicato.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Domande{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequenti
        </span>
      </h2>

      <p className="text-xl text-muted-foreground text-center mb-8">
        Risposte alle domande più comuni su CloudOps Tools Hub
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot max-w-4xl mx-auto"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium text-center mt-8">
        Hai altre domande?{" "}
        <a
          rel="noreferrer noopener"
          href="https://github.com/aintnier/security-tools-hub/issues"
          target="_blank"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contattaci su GitHub
        </a>
      </h3>
    </section>
  );
};
