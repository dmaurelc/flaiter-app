"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background bg-dot-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] mb-6 font-medium">
                Diccionario • Traductor • Cultura
              </p>
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl text-foreground font-bold leading-none mb-8 tracking-tight">
                Experto en <br />
                <span className="font-serif italic font-light ml-2">
                  Chilenismos
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Somos un equipo de lingüistas callejeros ayudando a extranjeros
                a sobrevivir la jungla verbal de Chile.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Button className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all hover:-translate-y-1">
                  Descargar App
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Ver Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Phone Animation */}
          <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  /* Time State */
  const [time, setTime] = useState("");

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();

    // Update every second to catch minute changes immediately
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const conversationPool = [
    [
      { id: 1, type: "user", text: "¿Qué significa 'al tiro'?", delay: 1000 },
      {
        id: 2,
        type: "app",
        text: "Significa 'inmediatamente' o 'ahora mismo'.",
        delay: 2500,
      },
      { id: 3, type: "user", text: "¡Buena! ¿Y 'pololo'?", delay: 4500 },
      {
        id: 4,
        type: "app",
        text: "Novio o pareja sentimental. 💕",
        delay: 6000,
      },
    ],
    [
      {
        id: 1,
        type: "user",
        text: "Me dijeron 'pásame la luca'.",
        delay: 1000,
      },
      {
        id: 2,
        type: "app",
        text: "'Luca' es el billete de mil pesos. 💸",
        delay: 2500,
      },
      { id: 3, type: "user", text: "¿Y 'gamba'?", delay: 4000 },
      { id: 4, type: "app", text: "'Gamba' son cien pesos.", delay: 5500 },
    ],
    [
      {
        id: 1,
        type: "user",
        text: "¿Qué es 'hacer un perro muerto'?",
        delay: 1000,
      },
      {
        id: 2,
        type: "app",
        text: "Irse de un restaurante sin pagar. 🏃‍♂️💨",
        delay: 2500,
      },
      { id: 3, type: "user", text: "¡Qué flaite!", delay: 4000 },
      {
        id: 4,
        type: "app",
        text: "Exacto. 'Flaite' es de mal gusto o delictivo.",
        delay: 5500,
      },
    ],
    [
      { id: 1, type: "user", text: "¿Qué es un 'copete'?", delay: 1000 },
      {
        id: 2,
        type: "app",
        text: "Cualquier bebida alcohólica. 🍺🍷",
        delay: 2500,
      },
      {
        id: 3,
        type: "user",
        text: "Vamos por un copete entonces.",
        delay: 4000,
      },
      { id: 4, type: "app", text: "¡Salud! 🍻", delay: 5500 },
    ],
    [
      { id: 1, type: "user", text: "¿Qué es 'fome'?", delay: 1000 },
      {
        id: 2,
        type: "app",
        text: "Algo aburrido o sin gracia. 🥱",
        delay: 2500,
      },
      { id: 3, type: "user", text: "Esta fiesta está fome.", delay: 4000 },
      { id: 4, type: "app", text: "¡Vámonos al tiro entonces!", delay: 5500 },
    ],
    [
      { id: 1, type: "user", text: "Me dijeron que soy 'bacán'.", delay: 1000 },
      {
        id: 2,
        type: "app",
        text: "¡Es un cumplido! Significa genial o excelente. 😎",
        delay: 2500,
      },
      { id: 3, type: "user", text: "¿Y 'bacán' con B?", delay: 4000 },
      {
        id: 4,
        type: "app",
        text: "Es lo mismo. Se usa para algo muy bueno.",
        delay: 5500,
      },
    ],
    [
      { id: 1, type: "user", text: "¿Qué es 'taco'?", delay: 1000 },
      {
        id: 2,
        type: "app",
        text: "Congestión vehicular o tráfico. 🚗🚕🚙",
        delay: 2500,
      },
      { id: 3, type: "user", text: "Estoy en un taco terrible.", delay: 4000 },
      {
        id: 4,
        type: "app",
        text: "Paciencia... o toma el metro.",
        delay: 5500,
      },
    ],
    [
      { id: 1, type: "user", text: "Voy a ir a la 'pega'.", delay: 1000 },
      { id: 2, type: "app", text: "Vas al trabajo. 💼", delay: 2500 },
      { id: 3, type: "user", text: "¿Y si me da 'paja'?", delay: 4000 },
      { id: 4, type: "app", text: "Te da pereza. ¡Ánimo!", delay: 5500 },
    ],
  ];

  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Pick a random conversation on mount
    const randomIndex = Math.floor(Math.random() * conversationPool.length);
    setCurrentConversationIndex(randomIndex);
    setMessages(conversationPool[randomIndex]);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    let timeouts: NodeJS.Timeout[] = [];
    setVisibleMessages([]);
    setIsTyping(false);

    // Calculate sequence
    let accumulatedTime = 0;

    messages.forEach((msg, index) => {
      // Typing indicator before App response
      if (msg.type === "app") {
        const typeStart = setTimeout(() => setIsTyping(true), msg.delay - 1000);
        timeouts.push(typeStart);
      }

      const showMsg = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, msg.delay);
      timeouts.push(showMsg);
    });

    // Loop after last message + 3s
    const totalDuration = messages[messages.length - 1].delay + 3000;
    const restart = setTimeout(() => {
      const nextIndex =
        (currentConversationIndex + 1) % conversationPool.length;
      setCurrentConversationIndex(nextIndex);
      setMessages(conversationPool[nextIndex]);
    }, totalDuration);
    timeouts.push(restart);

    return () => timeouts.forEach(clearTimeout);
  }, [messages, currentConversationIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden p-4 flex flex-col font-sans"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

      {/* Status Bar */}
      <div className="flex justify-between text-white/50 text-xs mb-8 px-2 mt-2">
        <span>{time || "9:41"}</span>
        <span>5G</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pb-4 scrollbar-hide px-1">
        <div className="text-center text-neutral-500 text-xs mb-4">Hoy</div>

        <AnimatePresence mode="popLayout">
          {messages.map(
            (msg) =>
              visibleMessages.includes(msg.id) && (
                <motion.div
                  key={`${currentConversationIndex}-${msg.id}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-snug ${
                    msg.type === "user"
                      ? "bg-neutral-800 text-white rounded-br-sm self-end ml-auto"
                      : "bg-neutral-100 text-black rounded-bl-sm self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              )
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-neutral-100 self-start text-black rounded-2xl rounded-bl-sm px-4 py-3 w-16 mr-auto"
            >
              <div className="flex gap-1 justify-center">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area Mockup */}
      <div className="mt-auto pt-4 border-t border-white/10 relative z-10 bg-black">
        <div className="h-10 bg-neutral-800 rounded-full flex items-center px-4">
          <span className="text-neutral-500 text-xs">
            Escribe un chilenismo...
          </span>
          <div className="ml-auto w-6 h-6 bg-white rounded-full flex items-center justify-center">
            {/* Arrow pointing up */}
            <span className="text-black text-[10px] transform -rotate-90">
              ➤
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
