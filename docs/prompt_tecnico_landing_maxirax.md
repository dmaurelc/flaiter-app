# Prompt Técnico para Landing Page Estilo Maxirax

## Descripción General

Crear una landing page moderna y profesional inspirada en el template Maxirax de Framer, utilizando **Next.js**, **Tailwind CSS v4** y **Shadcn**. La página debe tener un diseño limpio, orientado a negocios con fuerte jerarquía visual y llamadas a la acción claras.

---

## Arquitectura y Estructura

### Layout Principal

```typescript
// Estructura de secciones verticales:
// 1. Hero Banner con headline principal y CTAs duales
// 2. Sección de confianza con logos de clientes
// 3. About Us con headlines multinivel
// 4. Showcase de proyectos con cards
// 5. Features/Core Services con cards de imagen + texto
// 6. Testimonial/Founder's quote
// 7. Performance Overview con contadores
// 8. Pricing Section
// 9. Blog/News recientes
// 10. FAQ Accordion
// 11. Contact/Footer
```

### Grid System y Espaciado

```css
/* Usar Tailwind CSS v4 con grid system responsivo */
/* Contenedor principal con max-width y centrado */
/* Espaciado vertical consistente entre secciones (py-24, py-32) */
/* Gutters y margins uniformes usando el spacing scale de Tailwind */
```

---

## Tipografía y Jerarquía Visual

### Fuentes Principales

```css
/* Headlines: Sans-serif bold, impactantes */
/* Ejemplo de jerarquía:
- H1: "Built to power your next level expansion" (text-5xl/6xl font-bold)
- H2: "Brave creativity. Modern marketing." (text-3xl/4xl font-semibold)
- H3: Secciones principales (text-2xl font-medium)
- Body: Texto legible sans-serif (text-base)
- Stats: Números grandes para métricas (text-8xl font-bold)
*/
```

### Configuración Tailwind

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## Paleta de Colores

### Colores Principales

```css
/* Definir en tailwind.config.js */
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6', // Para botones principales y enlaces
    600: '#2563eb',
    700: '#1d4ed8',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    800: '#262626',
    900: '#171717',
  },
  accent: {
    green: '#22c55e', // Para checkmarks y elementos positivos
  }
}
```

---

## Componentes Shadcn Requeridos

### 1. Hero Section

```typescript
// Hero.tsx - Usar shadcn Button y typography
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
  <div className="container mx-auto px-4 text-center">
    <Badge variant="secondary" className="mb-6">Trusted by 10,000+ customers</Badge>
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-600">
      Built to power your next level expansion
    </h1>
    <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
      Brave creativity. Modern marketing. End-to-end, simplified.
    </p>
    <div className="flex gap-4 justify-center">
      <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
        Book Your Call
      </Button>
      <Button variant="outline" size="lg">
        View More
      </Button>
    </div>
  </div>
</div>
```

### 2. Project Cards

```typescript
// ProjectCard.tsx - Usar shadcn Card
import { Card, CardContent } from "@/components/ui/card"

<Card className="group cursor-pointer overflow-hidden">
  <CardContent className="p-0">
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src="/project-image.jpg" 
        alt="Project"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">Project Title</h3>
      <p className="text-neutral-600 mb-4">Project description...</p>
      <Button variant="link" className="p-0">
        View More →
      </Button>
    </div>
  </CardContent>
</Card>
```

### 3. Feature Cards

```typescript
// FeatureCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"

<Card className="text-center">
  <CardHeader>
    <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary-600" />
    </div>
    <h3 className="text-xl font-semibold">Feature Title</h3>
  </CardHeader>
  <CardContent>
    <p className="text-neutral-600">Feature description...</p>
    <Button variant="link" className="mt-4">
      Learn More →
    </Button>
  </CardContent>
</Card>
```

### 4. Stats Counter

```typescript
// StatsCounter.tsx
import { useEffect, useState } from 'react'

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return <span>{count}</span>
}
```

### 5. Testimonial Section

```typescript
// Testimonial.tsx
import { Card, CardContent } from "@/components/ui/card"

<Card className="bg-neutral-50">
  <CardContent className="p-8 text-center">
    <blockquote className="text-2xl font-medium mb-6">
      "Quote from founder or client..."
    </blockquote>
    <div className="flex items-center justify-center gap-4">
      <img 
        src="/avatar.jpg" 
        alt="Speaker"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="text-left">
        <div className="font-semibold">Name</div>
        <div className="text-neutral-600">Title</div>
      </div>
    </div>
  </CardContent>
</Card>
```

### 6. Pricing Card

```typescript
// PricingCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

<Card className="relative">
  <CardHeader className="text-center">
    <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
    <div className="text-4xl font-bold text-primary-600">
      $1,400<span className="text-lg font-normal">/month</span>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-3 mb-6">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full" size="lg">
      Get Started
    </Button>
  </CardContent>
</Card>
```

### 7. FAQ Accordion

```typescript
// FAQ.tsx - Usar shadcn Accordion
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible className="w-full">
  {faqs.map((faq) => (
    <AccordionItem key={faq.id} value={faq.id}>
      <AccordionTrigger className="text-left">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent>
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Animaciones y Transiciones

### Framer Motion (Recomendado)

```typescript
// Instalación: npm install framer-motion
import { motion } from "framer-motion"

// Animaciones de entrada para secciones
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Aplicar a componentes
<motion.div 
  initial="initial" 
  whileInView="animate" 
  variants={fadeInUp}
  className="section"
>
  Content
</motion.div>
```

### Hover Effects

```css
/* Botones con hover suave */
.btn-primary {
  @apply bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5;
}

/* Cards con hover effect */
.card-hover {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
}
```

---

## Layout Responsivo

### Breakpoints y Grid

```typescript
// Usar Tailwind responsive prefixes
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-8
">
  {/* Content */}
</div>
```

---

## Imágenes y Assets

### Optimización con Next.js

```typescript
// Usar Next.js Image component
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  className="w-full h-auto object-cover"
  priority
/>
```

### Iconos con Lucide React

```typescript
// Instalación: npm install lucide-react
import { Check, ArrowRight, Play, Star } from 'lucide-react'
```

---

## Estructura de Archivos Sugerida

```
app/
├── page.tsx (landing page principal)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── FAQ.tsx
│   └── ui/ (componentes shadcn)
├── styles/
│   └── globals.css
└── assets/
    └── images/
```

---

## Configuración Next.js

```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['framerusercontent.com', 'your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  }
}
```

---

## Dependencias Necesarias

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^4.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0",
    "@radix-ui/react-accordion": "^1.1.0",
    "@radix-ui/react-slot": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

---

## Notas de Implementación

- **Componentes Shadcn**: Usar la CLI de shadcn para generar componentes: `npx shadcn-ui@latest init`
- **Escalabilidad**: Diseñar componentes reutilizables y modulares
- **Performance**: Optimizar imágenes con Next.js Image component
- **SEO**: Incluir meta tags apropiados y structured data
- **Accesibilidad**: Asegurar contraste de colores y navegación por teclado
- **Testing**: Implementar testing unitario para componentes críticos

Este prompt técnico proporciona una base sólida para replicar el diseño de Maxirax usando las tecnologías especificadas. Puedes ajustar los valores específicos de espaciado, colores y tipografía según tus necesidades exactas.