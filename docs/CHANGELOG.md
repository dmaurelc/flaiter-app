# Changelog - Flaiter

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2025-12-27

### Fixed

- **SEO:** Eliminadas etiquetas `<title>` internas de los SVGs para evitar duplicidad de títulos en herramientas de auditoría.
- **Favicon:** Configuración explícita de iconos en metadatos para resolver errores 404 en servicios de indexación.

## [0.2.1] - 2025-12-27

### Added

- Generador dinámico de imágenes OpenGraph (`opengraph-image.tsx`).
- Marcado de esquema (JSON-LD) para `SoftwareApplication`.
- Configuración de URL canónica automática.

### Changed

- **SEO:** Optimizado el título para priorizar la palabra clave "Chilenismos".
- **Metadata:** Actualizada `metadataBase` a la URL de producción en Netlify.
- **Accesibilidad:** Agregado título descriptivo al SVG del Logo.

## [0.2.0] - 2025-12-27

### Added

- Nuevo documento de Roadmap (`ROADMAP.md`).
- Documentación técnica de SEO en `/docs/seo-optimization.md`.
- Soporte para etiquetas de palabras clave (keywords) en metadatos globales.

### Changed

- **SEO:** Actualizado Title Tag y Meta Description con palabras clave principales ("Chilenismos").
- **Accesibilidad:** Mejorados los atributos `alt` en imágenes de `AppShowcase`, `Features` y `Testimonials`.
- **UI:** Mejorada la estructura de clases en `Features.tsx` y `Testimonials.tsx` para evitar advertencias de lint.
- **README:** Actualizada la documentación con secciones de Roadmap y Changelog.

## [0.1.0] - 2025-12-16

### Added

- Configuración inicial del proyecto con Next.js 16 y Tailwind CSS 4.
- Estructura de secciones de la landing page (Hero, Features, Pricing, etc.).
- Componente `FadeIn` para animaciones de entrada.
- Diseño premium "Coffee/Earth".
- Robots.txt y Sitemap básicos.
