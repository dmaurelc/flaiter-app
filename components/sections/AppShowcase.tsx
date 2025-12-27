"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mic, BookOpen, MapPin, Smile } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";

const tabs = [
  { id: "dictionary", label: "Diccionario", icon: BookOpen },
  { id: "translator", label: "Traductor", icon: Mic },
  { id: "culture", label: "Guía Local", icon: MapPin },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState("dictionary");

  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-sans font-bold tracking-tight text-4xl md:text-6xl text-black mb-6">
              Todo lo que necesitas.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Una suite completa de herramientas para entender, hablar y
              sobrevivir en Chile.
            </p>
          </FadeIn>
        </div>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-1 bg-neutral-100 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Showcase Card */}
          <div className="relative bg-neutral-50 rounded-[3rem] p-8 md:p-12 border border-neutral-200 overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-5xl">
              {/* Text Description */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-sans tracking-tight font-bold mb-4">
                      {activeTab === "dictionary" && "Diccionario Inteligente"}
                      {activeTab === "translator" && "Traductor en Tiempo Real"}
                      {activeTab === "culture" && "Guía de Supervivencia"}
                    </h3>
                    <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                      {activeTab === "dictionary" &&
                        "No es solo una lista. Es un motor de búsqueda que entiende contexto, variaciones regionales y conjugaciones extrañas."}
                      {activeTab === "translator" &&
                        "Graba un audio o escribe texto. Nuestra IA procesa la velocidad y el 'cantadito' chileno para darte una respuesta clara."}
                      {activeTab === "culture" &&
                        "Mapas de lugares seguros, recomendaciones de comida, y tips para no pasar vergüenza en un asado."}
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="flex -space-x-3">
                        {[
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                        ].map((src, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden relative"
                          >
                            <Image
                              src={src}
                              alt="Retrato de usuario satisfecho usando la app de chilenismos"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="text-sm font-medium">
                        Usado por +10k viajeros
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* UI Mockup */}
              <div className="order-1 lg:order-2 flex justify-center">
                <MockupScreen activeTab={activeTab} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MockupScreen({ activeTab }: { activeTab: string }) {
  return (
    <div className="relative w-[300px] h-[580px] bg-white rounded-[2.5rem] border-4 border-neutral-100 shadow-2xl p-4 overflow-hidden flex flex-col">
      {/* Header Mock */}
      <div className="flex items-center justify-between mb-6 pt-2">
        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-neutral-300"></div>
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-neutral-300">
          Flaiter
        </div>
        <div className="w-8 h-8 rounded-full bg-neutral-100"></div>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="popLayout">
          {activeTab === "dictionary" && (
            <motion.div
              key="dict"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-3"
            >
              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 mb-2">
                <Search className="w-4 h-4 text-neutral-400 mb-2" />
                <div className="h-2 w-24 bg-neutral-200 rounded-full"></div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex gap-3 items-center p-2 border-b border-neutral-50 last:border-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-xs font-bold">
                    {i === 1 ? "W" : i === 2 ? "C" : i === 3 ? "P" : "A"}
                  </div>
                  <div>
                    <div className="h-2 w-32 bg-neutral-800 rounded-full mb-1"></div>
                    <div className="h-2 w-20 bg-neutral-200 rounded-full"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "translator" && (
            <motion.div
              key="trans"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <div className="bg-neutral-100 rounded-2xl rounded-bl-sm p-4 mb-4 self-start max-w-[80%]">
                <div className="text-xs text-neutral-500 mb-1">Entrada</div>
                <div className="font-bold text-sm">¿Cachai o no cachai?</div>
              </div>
              <div className="bg-black text-white rounded-2xl rounded-br-sm p-4 mb-4 self-end max-w-[80%]">
                <div className="text-xs text-neutral-400 mb-1">Traducción</div>
                <div className="font-bold text-sm">
                  ¿Entiendes o no entiendes?
                </div>
              </div>
              <div className="mt-auto flex justify-center pb-8">
                <div className="w-16 h-16 rounded-full bg-red-500 shadow-xl shadow-red-200 flex items-center justify-center text-white">
                  <Mic className="w-6 h-6 animate-pulse" />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "culture" && (
            <motion.div
              key="cult"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-4"
            >
              <div className="aspect-video bg-neutral-200 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-neutral-300"></div>
              </div>
              <div className="flex gap-2 mb-2">
                <Badge text="Comida" />
                <Badge text="Seguridad" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-neutral-200 rounded-full"></div>
                <div className="h-2 w-3/4 bg-neutral-200 rounded-full"></div>
                <div className="h-2 w-5/6 bg-neutral-200 rounded-full"></div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 mt-2">
                <div className="flex gap-2 items-center mb-1">
                  <Smile className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-bold text-yellow-700">
                    Tip del Día
                  </span>
                </div>
                <div className="text-[10px] text-yellow-800 leading-tight">
                  Nunca rechaces un pan con palta si te lo ofrecen con cariño.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tab Bar Mock */}
      <div className="h-12 border-t border-neutral-100 flex justify-around items-center text-neutral-300">
        <div className="w-6 h-6 rounded-full bg-neutral-100"></div>
        <div className="w-6 h-6 rounded-full bg-black"></div>
        <div className="w-6 h-6 rounded-full bg-neutral-100"></div>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
      {text}
    </span>
  );
}
