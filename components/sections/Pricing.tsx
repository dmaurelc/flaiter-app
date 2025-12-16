"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-sans text-4xl md:text-6xl mb-6 text-foreground font-bold tracking-tight">
              Planes{" "}
              <span className="font-serif italic font-light">Simples</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Elige cuánto quieres entender.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Plan 1 */}
          <FadeIn
            delay={0.2}
            className="p-8 rounded-3xl bg-card border-border hover:shadow-xl transition-shadow text-card-foreground"
          >
            <h3 className="text-2xl font-serif mb-2">Turista</h3>
            <div className="text-4xl font-bold mb-6">
              $0{" "}
              <span className="text-base font-normal text-muted-foreground">
                /mes
              </span>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-8">
              Para el que viene de paso y quiere pedir una piscola sin errores.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Traducción básica",
                "Diccionario limitado",
                "Con anuncios",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4" /> {f}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full rounded-full border-foreground text-foreground hover:bg-accent"
            >
              Empezar
            </Button>
          </FadeIn>

          {/* Plan 2 - Highlighted */}
          <FadeIn
            delay={0.3}
            className="p-8 rounded-3xl bg-foreground text-background border-foreground shadow-2xl relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-background text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-foreground">
              Más Popular
            </div>
            <h3 className="text-2xl font-serif mb-2">Inmigrante</h3>
            <div className="text-4xl font-bold mb-6">
              $5k <span className="text-base font-normal text-muted">/mes</span>
            </div>
            <p className="text-muted mb-8 border-b border-muted pb-8">
              Para el que se queda a vivir y necesita entender el 'cahuín' de la
              oficina.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Todo lo de Turista",
                "Modo Offline Completo",
                "Reconocimiento de voz",
                "Sin anuncios",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4" /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full bg-background text-foreground hover:bg-accent">
              Prueba Gratis
            </Button>
          </FadeIn>

          {/* Plan 3 */}
          <FadeIn
            delay={0.4}
            className="p-8 rounded-3xl bg-card border-border hover:shadow-xl transition-shadow text-card-foreground"
          >
            <h3 className="text-2xl font-serif mb-2">Pa' siempre</h3>
            <div className="text-4xl font-bold mb-6">
              $40k{" "}
              <span className="text-base font-normal text-muted-foreground">
                /una vez
              </span>
            </div>
            <p className="text-muted-foreground mb-8 border-b border-border pb-8">
              Te convertiste en chileno. Quieres acceso de por vida.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Acceso Lifetime",
                "Actualizaciones VIP",
                "Guía impresa de regalo",
                "Soporte prioritario",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4" /> {f}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full rounded-full border-black text-black hover:bg-neutral-50"
            >
              Comprar
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
