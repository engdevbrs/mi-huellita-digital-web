import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mi Huellita Digital - Carnet Digital de Mascotas",
    template: "%s | Mi Huellita Digital",
  },
  description:
    "El carnet digital de tu mascota, siempre contigo. Guarda todo el historial médico en un solo lugar. Acceso instantáneo, seguridad garantizada y conexión directa con veterinarios.",
  keywords: [
    "carnet digital mascota",
    "historial médico veterinario",
    "QR código mascota",
    "app veterinaria",
    "registro mascotas digital",
    "carnet vacunación digital",
    "cuidado mascotas",
    "veterinaria digital",
  ],
  authors: [{ name: "Mi Huellita Digital" }],
  creator: "Mi Huellita Digital",
  publisher: "Mi Huellita Digital",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mihuellitadigital.com"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mihuellitadigital.com",
    title: "Mi Huellita Digital - Carnet Digital de Mascotas",
    description:
      "El carnet digital de tu mascota, siempre contigo. Guarda todo el historial médico en un solo lugar.",
    siteName: "Mi Huellita Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi Huellita Digital - Carnet Digital de Mascotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Huellita Digital - Carnet Digital de Mascotas",
    description:
      "El carnet digital de tu mascota, siempre contigo. Guarda todo el historial médico en un solo lugar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mi Huellita Digital",
              description:
                "Plataforma digital para gestión del historial médico de mascotas",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://mihuellitadigital.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://mihuellitadigital.com"}/logo.png`,
              sameAs: [
                // Agregar redes sociales cuando estén disponibles
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
