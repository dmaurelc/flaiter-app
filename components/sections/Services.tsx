"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const guides = [
  {
    title: "Glosario Offline",
    desc: "Más de 5,000 términos en tu bolsillo. ¿Sin señal en el metro? Sin problema. Traduce en cualquier lugar.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&fit=crop",
  },
  {
    title: "Contexto Cultural",
    desc: "Entiende no solo qué significa, sino por qué se dice. Evita malentendidos incómodos en la mesa.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&fit=crop",
  },
  {
    title: "Detector de Sarcasmo",
    desc: "Nuestra IA analiza el tono para decirte si te están tomando el pelo o hablando en serio.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&fit=crop",
  },
  {
    title: "Diccionario de Comida",
    desc: "¿Qué es una 'chorrillana'? ¿Un 'completo'? Descubre la gastronomía local sin miedo.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&fit=crop",
  },
  {
    title: "Guía de Carrete",
    desc: "Aprende los códigos de la fiesta chilena. Desde la 'previa' hasta el 'bajón'.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="guide" className=" bg-card relative py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
          {/* Left Sticky Header */}
          <div className="lg:w-1/3 text-left self-start lg:sticky lg:top-32 h-fit pb-12">
            <FadeIn>
              <Badge
                variant="outline"
                className="w-fit mb-6 border-foreground text-foreground px-3 py-1 rounded-full uppercase tracking-widest text-xs font-semibold bg-background"
              >
                Guía de Supervivencia
              </Badge>
              <h2 className="font-sans text-4xl md:text-6xl text-foreground font-bold leading-[1.1] mb-6 tracking-tight">
                Tu mapa para el{" "}
                <span className="font-serif italic font-light">caos</span>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Navegar Chile es difícil. Flaiter lo hace fácil. Una suite de
                herramientas diseñadas para que entiendas todo, siempre.
              </p>
            </FadeIn>
          </div>

          {/* Right Content Stack */}
          <div className="lg:w-2/3 flex flex-col pb-24">
            {guides.map((item, i) => (
              <CardStack key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardStack({ item, index }: { item: any; index: number }) {
  // Tighter stacking: only 10px difference per card
  // Top starts at 120px to clear header
  const topOffset = 120 + index * 10;
  const rotation = [1, -1, 2, -2, 0.5][index % 5];

  return (
    <motion.div
      className="sticky bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl flex flex-col md:flex-row gap-8 origin-center mb-12"
      style={{
        top: `${topOffset}px`,
        // Minimal margins to allow stacking effect
        zIndex: index,
      }}
      initial={{ opacity: 0, y: 50, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
        <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
        <p className="text-neutral-500 leading-relaxed text-lg">{item.desc}</p>
      </div>
      <div className="order-1 md:order-2 relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
