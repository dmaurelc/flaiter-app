"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Es realmente gratis?",
      a: "La versión 'Turista' es 100% gratuita y perfecta para viajes cortos. Incluye el diccionario básico y traducción de texto.",
    },
    {
      q: "¿Funciona sin internet?",
      a: "Sí, los planes 'Inmigrante' y 'Pa' siempre' descargan toda la base de datos a tu dispositivo. Perfecto para cuando andas sin señal en el metro.",
    },
    {
      q: "¿Qué tan precisa es la IA?",
      a: "Nuestra IA ha sido entrenada con audio chileno real (teleseries, noticias, virales), no español neutro. Entiende la velocidad y modismos.",
    },
    {
      q: "¿Está disponible para iOS y Android?",
      a: "Sí, ambas versiones tienen las mismas funciones y se actualizan al mismo tiempo.",
    },
    {
      q: "¿Cómo cancelo mi suscripción?",
      a: "Puedes cancelar en cualquier momento desde los ajustes de tu cuenta en la App Store o Google Play. Sin preguntas raras.",
    },
    {
      q: "¿Sirve para otras variantes del español?",
      a: "No, somos especialistas. Solo hablamos Chileno. Si quieres aprender español de España, busca otra app aburrida.",
    },
    {
      q: "¿Aceptan pagos locales?",
      a: "Sí, aceptamos tarjetas de crédito internacionales y en la web pronto habilitaremos Webpay para pagos con Redcompra.",
    },
    {
      q: "¿Tienen descuentos para estudiantes?",
      a: "Claro, escríbenos a estudiantes@flaiter.cl con tu credencial y te damos un 50% de descuento en el plan anual.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-neutral-200"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:no-underline hover:text-neutral-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-500 text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
