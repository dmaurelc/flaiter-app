"use client";

import { Card } from "@/components/ui/card";
import { Mic, Search, WifiOff } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 bg-background rounded-[3rem] -mt-12 relative z-10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-sans text-5xl md:text-6xl mb-6 font-bold tracking-tight text-foreground">
              IA con <span className="font-serif italic font-light">Calle</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnología de punta entrenada con la jerga más difícil del mundo.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* 1. Large Feature (2x2) */}
          <FadeIn
            delay={0.2}
            className="md:col-span-2 md:row-span-2 bg-card text-card-foreground rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between transition-all hover:shadow-md overflow-hidden relative group hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-8">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif mb-4">
                Reconocimiento de Voz
              </h3>
              <p className="text-neutral-500 max-w-xs leading-relaxed">
                Deja tu celular en la mesa. Flaiter escuchará y traducirá la
                conversación en tiempo real, ignorando el ruido ambiente del
                bar.
              </p>
            </div>

            {/* Improved Waveform Graphic */}
            <div className="absolute right-0 bottom-0 w-full h-[60%] flex items-end justify-center px-8 pb-8 gap-[3px] pointer-events-none opacity-40 mask-linear-fade">
              {Array.from({ length: 40 }).map((_, i) => (
                <WaveBar key={i} index={i} />
              ))}
            </div>
          </FadeIn>

          {/* 2. Top Right Horizontal (2x1) */}
          <FadeIn
            delay={0.3}
            className="md:col-span-2 md:row-span-1 bg-black text-white p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between overflow-hidden relative group"
          >
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-serif mb-2">Base de Datos Viva</h3>
              <p className="text-neutral-400 text-sm">
                Actualizada a diario por la comunidad.
              </p>
            </div>
            <div className="relative z-10 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
              <Search className="w-6 h-6" />
            </div>
          </FadeIn>

          {/* 3. Bottom Left Small (1x1) */}
          <FadeIn
            delay={0.4}
            className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-[2rem] border border-neutral-200 flex flex-col justify-center items-center text-center hover:bg-neutral-100 transition-colors"
          >
            <WifiOff className="w-10 h-10 mb-6 text-neutral-800" />
            <h3 className="text-xl font-serif">Offline</h3>
            <p className="text-neutral-500 text-xs mt-2">
              Funciona 100% sin internet
            </p>
          </FadeIn>

          {/* 4. Bottom Right Small (1x1) */}
          <FadeIn
            delay={0.5}
            className="md:col-span-1 md:row-span-1 relative rounded-4xl overflow-hidden group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=500&fit=crop"
              alt="Social Gathering"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="text-white font-serif text-lg border border-white/50 px-5 py-2 rounded-full backdrop-blur-md">
                Ver Demo
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WaveBar({ index }: { index: number }) {
  // Generate random heights for a "sound wave" look
  // Higher bars in default state, animating to random others
  return (
    <motion.div
      className="w-1.5 md:w-2 bg-black rounded-t-sm"
      initial={{ height: "10%" }}
      animate={{
        height: ["10%", `${Math.random() * 80 + 20}%`, "10%"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: index * 0.05,
        ease: "easeInOut",
      }}
    />
  );
}
