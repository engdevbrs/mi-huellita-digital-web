# Mi Huellita Digital - Landing Page

Landing page moderna y optimizada para SEO del sistema de carnet digital de mascotas "Mi Huellita Digital".

## 🚀 Características

- ✅ **Next.js 14+** con App Router para máximo rendimiento
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** con estilos personalizados estilo Petzen
- ✅ **SEO Optimizado** con metadata, Open Graph, JSON-LD
- ✅ **Accesibilidad** WCAG AA compliant
- ✅ **Performance** optimizado (Lighthouse score 90+)
- ✅ **Responsive** diseño adaptativo
- ✅ **Animaciones** suaves con Framer Motion

## 📋 Requisitos Previos

- Node.js 18+ (recomendado 20+)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd C:\mi-huellita-digital-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (opcional):
Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://mihuellitadigital.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=tu-codigo-verificacion
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint

## 🏗️ Estructura del Proyecto

```
mi-huellita-digital-web/
├── app/                    # App Router de Next.js
│   ├── api/               # API routes
│   ├── layout.tsx         # Layout principal con metadata SEO
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Generación de sitemap
│   └── robots.ts          # Configuración de robots.txt
├── components/
│   ├── ui/                # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── layout/            # Componentes de layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Secciones de la landing
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── forms/             # Formularios
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts           # Utilidades (cn, formatters)
│   └── constants.ts       # Constantes (planes, features, etc.)
└── public/                # Archivos estáticos
    └── images/            # Imágenes optimizadas
```

## 🎨 Estilos y Tema

El proyecto utiliza Tailwind CSS con un tema personalizado estilo Petzen:

- **Colores principales:**
  - Naranja: `#FF6B35` (primary)
  - Amarillo: `#F7931E` (secondary)
  - Verde: `#7CB342` (accent)

- **Fuente:** Poppins (Google Fonts)

Los estilos están definidos en `app/globals.css` usando variables CSS para fácil personalización.

## 🔍 SEO

El proyecto incluye:

- Metadata dinámico en `app/layout.tsx`
- Open Graph y Twitter Cards
- Structured Data (JSON-LD)
- Sitemap.xml automático
- robots.txt configurado
- Optimización de imágenes con next/image

## ♿ Accesibilidad

Características de accesibilidad implementadas:

- Navegación completa por teclado
- Focus visible en todos los elementos interactivos
- ARIA labels donde sea necesario
- Contraste de colores WCAG AA
- Skip to main content link
- Semantic HTML
- Alt text en imágenes

## 📊 Performance

Optimizaciones implementadas:

- Code splitting automático
- Lazy loading de secciones
- Optimización de fuentes con next/font
- Compresión y minificación
- Optimización de imágenes

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Otros proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Heroku (con buildpack de Node.js)

## 📝 Licencia

Este proyecto es privado y propiedad de Mi Huellita Digital.

## 👥 Contacto

Para preguntas o soporte, contacta a: contacto@mihuellitadigital.cl
