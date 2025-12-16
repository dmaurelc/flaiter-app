# 🇨🇱 Flaiter Landing Page

> **Tu mapa para el caos.** Una landing page premium para una aplicación imaginaria de traducción y diccionario de jerga chilena.

![Flaiter Banner](https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&fit=crop)

## ✨ Sobre el Proyecto

**Flaiter** es una landing page moderna diseñada para promocionar una app móvil que ayuda a extranjeros a entender y sobrevivir a la "jungla verbal" de Chile. El diseño se enfoca en una estética **editorial y premium**, utilizando una paleta de colores tierra ("Earth/Coffee"), tipografía serif elegante (Georgia) combinada con sans-serif moderna (DM Sans), y animaciones fluidas con **Framer Motion**.

### 🛠️ Tecnologías Utilizadas

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF4154?style=for-the-badge&logo=framer&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-black?style=for-the-badge&logo=shadcnui&logoColor=white)

## 🚀 Características Principales

- **🎨 Diseño UI/UX Premium**: Estilo visual coherente con paleta de colores personalizada, texturas sutiles (puntos, degradados) y tipografía jerárquica.
- **⚡️ Animaciones Globales**: Implementación de un componente `FadeIn` (basado en `framer-motion`) que orquesta la entrada escalonada de elementos al hacer scroll.
- **📱 Phone Mockup Interactivo**: Componente en el Hero que simula un chat en tiempo real con reloj funcional sincronizado.
- **🧩 Secciones Modulares**:
  - **Hero**: Presentación impactante con animación de entrada.
  - **App Showcase**: Vista previa de la interfaz con pestañas animadas.
  - **Services**: Layout con encabezado "sticky" y tarjetas apiladas.
  - **Features**: Grid estilo "Bento" responsivo.
  - **Testimonials**: Marquee infinito (scroll horizontal automático).
  - **Pricing**: Tarjetas de precios con variantes destacadas.
  - **FAQ y Footer**: Secciones informativas con acordeones y enlaces.
- **🕶️ Modo Oscuro/Claro**: Preparado con variables CSS (`globals.css`) para fácil adaptación.
- **🖱️ Smooth Scroll**: Navegación fluida entre secciones.

## 📦 Instalación y Uso

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/flaiter-landing.git
    cd flaiter-landing
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

3.  **Correr el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4.  **Construir para producción**:
    ```bash
    npm run build
    npm start
    ```

## 📂 Estructura del Proyecto

```
/
├── app/
│   ├── globals.css      # Estilos globales, variables de tema, utilidades
│   ├── layout.tsx       # Layout principal, fuentes
│   ├── page.tsx         # Página principal (composición de secciones)
│   └── icon.svg         # Favicon del proyecto
├── components/
│   ├── layout/          # Navbar, etc.
│   ├── sections/        # Secciones individuales (Hero, Features, Pricing...)
│   └── ui/              # Componentes reutilizables (Button, FadeIn, Logo...)
├── public/              # Assets estáticos
└── ...
```

## 🎨 Paleta de Colores

- **Primary**: `#a37764` (Tierra tostada)
- **Background**: `#f1f0e5` (Crema suave)
- **Foreground**: `#56453f` (Café oscuro)
- **Accent**: `#baab92` (Arena)

---

Creado con ❤️ por un anti-desarrollador.
