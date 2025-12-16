import { StoreBadge } from "@/components/ui/store-badge";
import Logo from "@/components/ui/logo";
import FadeIn from "@/components/ui/fade-in";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <a href="/" className="flex items-center gap-2 group">
                <Logo className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-serif font-bold text-2xl text-foreground tracking-tight">
                  Flaiter.
                </span>
              </a>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                Estamos aquí para ayudarte a sobrevivir la jungla verbal
                chilena. No más caras de pregunta en el carrete.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2025 Flaiter No-App. Sin derechos reservados.
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-foreground mb-8 text-lg">Índice</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Planes
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-foreground transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-8 text-lg">Legal</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Términos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Store Badges Column */}
            <div className="flex flex-col items-start md:items-end">
              <h4 className="font-bold text-foreground mb-8 text-lg text-left md:text-right w-full">
                Descargar
              </h4>
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <StoreBadge store="apple" variant="black" />
                <StoreBadge store="google" variant="black" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
