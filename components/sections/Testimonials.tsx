"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";

const testimonials = [
  {
    name: "Thomas Mueller",
    role: "Alemania",
    quote:
      "No entendía nada cuando decían 'cachai'. Esta app fue mi salvación.",
    image:
      "https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=200&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "USA",
    quote: "The interface is beautiful. I actually understand jokes now.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&fit=crop",
  },
  {
    name: "Joao Silva",
    role: "Brasil",
    quote: "Muito bom! Me ayudó mucho a hacer amigos en la universidad.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&fit=crop",
  },
  {
    name: "Emily Wang",
    role: "Canadá",
    quote: "Chilean Spanish is another language. This app bridges the gap.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&fit=crop",
  },
  {
    name: "Pierre Dubois",
    role: "Francia",
    quote: "Increíble para entender las jergas en las reuniones.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&fit=crop",
  },
  {
    name: "Anna Petrova",
    role: "Rusia",
    quote: "Ahora puedo pedir 'completos' e 'italianos' sin miedo.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mb-16">
        <FadeIn>
          <h2 className="font-sans text-3xl md:text-5xl text-center text-foreground font-bold tracking-tight">
            Lo que dicen nuestros{" "}
            <span className="font-serif italic font-light">usuarios</span>
          </h2>
        </FadeIn>
      </div>

      <div className="relative w-full mask-linear-fade">
        {/* Marquee Container */}
        <div className="flex w-max gap-6">
          <MarqueeTrack items={testimonials} direction="left" />
          <MarqueeTrack items={testimonials} direction="left" />
        </div>
      </div>
    </section>
  );
}

function MarqueeTrack({
  items,
  direction = "left",
}: {
  items: any[];
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      className="flex gap-6 py-4"
      animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {items.map((t, i) => (
        <div
          key={i}
          className="flex flex-col gap-6 p-8 rounded-2xl bg-neutral-50 border border-neutral-100 w-[350px] flex-shrink-0"
        >
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-black fill-black" />
            ))}
          </div>
          <blockquote className="text-sm text-neutral-800 leading-relaxed italic flex-1">
            "{t.quote}"
          </blockquote>
          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-200/50">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm text-black font-sans">
                {t.name}
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-sans">
                {t.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
