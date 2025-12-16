"use client";

import { Ear, BrainCircuit, MessageCircle } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

const steps = [
  {
    icon: Ear,
    title: "Escucha",
    description:
      "Capturamos el audio en tiempo real, filtrando el ruido ambiente del carrete o la calle.",
    id: "01",
  },
  {
    icon: BrainCircuit,
    title: "Procesa",
    description:
      "Nuestra IA identifica modismos, jerga y velocidad ultra-rápida del chileno promedio.",
    id: "02",
  },
  {
    icon: MessageCircle,
    title: "Traduce",
    description:
      "Recibes una traducción al español neutro (o inglés) entendible para mortales.",
    id: "03",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="font-sans text-4xl md:text-6xl text-black font-bold mb-6 tracking-tight">
              Así de <span className="font-serif italic font-light">fácil</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              Tres pasos, cero confusiones.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative group">
              <div className="h-full bg-neutral-50 rounded-3xl p-8 border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-6xl font-serif italic text-neutral-200 mb-8 font-black">
                  {step.id}
                </div>
                <div className="mb-6 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-sans mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
