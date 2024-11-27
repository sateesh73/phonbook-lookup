import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What information can I get about a phone number?",
    answer: "Our service provides detailed information including carrier name, line type (mobile, landline, VoIP), location data, and number validation status.",
  },
  {
    question: "Is the phone lookup service free?",
    answer: "We offer both free and premium lookups. Basic validation is free, while detailed information requires a premium account.",
  },
  {
    question: "How accurate is the phone number information?",
    answer: "Our data is regularly updated and verified through multiple sources to ensure high accuracy. However, some information may vary based on the number's region.",
  },
  {
    question: "Is my search history private?",
    answer: "Yes, we take privacy seriously. Your search history is encrypted and only visible to you. We never share personal information with third parties.",
  },
];

export function FAQ() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}