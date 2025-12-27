# Optimización SEO - Flaiter

Este documento detalla las mejoras de SEO on-page implementadas en la landing page para mejorar el posicionamiento orgánico y la accesibilidad.

## Estrategia de Palabras Clave

La palabra clave principal seleccionada es **"Chilenismos"**.

## Cambios Implementados

### 1. Metadatos (Next.js Metadata API)

Se actualizaron los metadatos globales en `app/layout.tsx`:

- **Title Tag:** `Flaiter - Diccionario de Chilenismos` (Agregada palabra clave principal).
- **Meta Description:** "Traductor y guía de supervivencia para el español chileno. Aprende jerga, modismos y chilenismos con nuestra IA experta."
- **Keywords:** `["chilenismos", "diccionario chileno", "jerga chilena", "modismos chilenos", "traductor chileno", "español de chile"]`

### 2. Estructura de Encabezados (H1)

Se optimizó el encabezado principal en `components/sections/Hero.tsx`:

- Etiqueta `H1`: "Experto en Chilenismos" (Incluye palabra clave principal).

### 3. Accesibilidad y SEO de Imágenes

Se mejoró el atributo `alt` en componentes clave:

- `AppShowcase.tsx`: Imágenes de avatar con descripción contextual.
- `Features.tsx`: Imagen de demo con descripción detallada.
- `Testimonials.tsx`: Pantallas de testimonios con nombres y roles descriptivos.

### 4. Configuración Técnica

- `robots.ts`: Configurado para permitir indexación total.
- `sitemap.ts`: Generación dinámica del sitemap para la landing page.
- Semantic HTML: Uso de etiquetas `<main>`, `<section>`, `<nav>` y `<footer>`.
