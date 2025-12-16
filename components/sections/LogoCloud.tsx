"use client";

import FadeIn from "@/components/ui/fade-in";

export default function LogoCloud() {
  const logos = ["TechChile", "StartUp", "NomadList", "TravelB", "LatamGo"];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-neutral-500 mb-8 uppercase tracking-wider">
          Confían en nosotros
        </p>
        <FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-xl md:text-2xl font-bold font-sans text-neutral-400 flex items-center gap-2"
              >
                {/* Placeholder Icon */}
                <div className="w-8 h-8 rounded-full bg-neutral-300"></div>
                {logo}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
