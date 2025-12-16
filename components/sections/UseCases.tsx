"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";

const situations = [
  {
    title: "En el Carrete",
    desc: "Entiende cuando te inviten a una 'piscola' o te digan que la fiesta está 'fome'.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&fit=crop", // Party
  },
  {
    title: "En la Vega",
    desc: "Compra frutas y verduras como un local. Regatea y entiende los gritos de los puestos.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=400&fit=crop", // Market
  },
  {
    title: "En la Micro",
    desc: "Pide permiso, paga tu pasaje y entiende las indicaciones del chofer.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&fit=crop", // Bus/Transport
  },
  {
    title: "En la Pega",
    desc: "Domina el arte de 'sacar la vuelta' y entiende los correos pasivo-agresivos.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&fit=crop", // Office
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-background py-32 rounded-[3rem] -mt-12 relative z-10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="font-sans text-5xl md:text-6xl text-foreground font-bold leading-tight mb-6 tracking-tight">
                ¡Somos el mejor país de Chile!
              </h2>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((sit, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-neutral-200">
                <Image
                  src={sit.image}
                  alt={sit.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-white">
                  <h3 className="font-sans text-xl font-bold">{sit.title}</h3>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed pr-4">
                {sit.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
