"use client";

import { StoreBadge } from "@/components/ui/store-badge";
import FadeIn from "@/components/ui/fade-in";

export default function CTADownload() {
  return (
    <section className="bg-white py-24" id="cta-download">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="bg-black text-white rounded-[2.5rem] py-24 px-6 md:px-12 text-center relative overflow-hidden bg-dot-white">
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="font-sans text-5xl md:text-7xl mb-8 leading-tight font-bold tracking-tight">
                Empieza a{" "}
                <span className="font-serif italic font-light">entender</span>.
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed">
                Deja de sonreír y asentir sin saber qué pasa. Descarga Flaiter
                ahora.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <StoreBadge store="apple" variant="white" />
                <StoreBadge store="google" variant="outline" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
