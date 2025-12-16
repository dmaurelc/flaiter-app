import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import AppShowcase from "@/components/sections/AppShowcase"; // NUEVO
import Services from "@/components/sections/Services"; // Guía
import UseCases from "@/components/sections/UseCases"; // NUEVO
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features"; // Bento
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ"; // NUEVO
import CTADownload from "@/components/sections/CTADownload";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoCloud />
      <Services />
      <UseCases />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTADownload />
      <Footer />
    </main>
  );
}
