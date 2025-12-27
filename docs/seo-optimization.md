# Optimización SEO - Flaiter

Este documento detalla las mejoras de SEO on-page implementadas en la landing page para mejorar el posicionamiento orgánico y la accesibilidad.

## Estrategia de Palabras Clave

La palabra clave principal seleccionada es **"Chilenismos"**.

## Cambios Implementados

### 1. Metadatos (Next.js Metadata API)

Se actualizaron los metadatos globales en `app/layout.tsx`:

- **Title Tag:** `Chilenismos: Diccionario y Traductor Chileno | Flaiter` (Palabra clave al inicio).
- **Meta Description:** "Traductor y guía de supervivencia para el español chileno. Aprende jerga, modismos y chilenismos con nuestra IA experta."
- **Canonical URL:** Configurada automáticamente para `https://flaiter.netlify.app/`.
- **OpenGraph Dynamic Images:** Implementada generación dinámica en `app/opengraph-image.tsx` con la paleta de colores del proyecto.

### 2. Estructura de Encabezados (H1)

Se optimizó el encabezado principal en `components/sections/Hero.tsx`:

- Etiqueta `H1`: "Experto en Chilenismos" (Incluye palabra clave principal).

### 3. Marcado de Esquema (JSON-LD)

Se integró el esquema `SoftwareApplication` para ayudar a los motores de búsqueda a entender que Flaiter es una aplicación educativa/diccionario.

### 4. Accesibilidad y SEO de Imágenes

Se mejoró el atributo `alt` en componentes clave. Para el Logo SVG, se utiliza `aria-label` y `role="img"` en lugar de `<title>` para evitar que los motores de búsqueda lo confundan con el título principal de la página.

### 5. Configuración Técnica

- `robots.ts`: Configurado para permitir indexación total.
- `sitemap.ts`: Generación dinámica del sitemap para la landing page.
- Semantic HTML: Uso de etiquetas `<main>`, `<section>`, `<nav>` y `<footer>`.
