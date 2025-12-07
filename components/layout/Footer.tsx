"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    producto: [
      { href: "#caracteristicas", label: "Características" },
      { href: "#precios", label: "Precios" },
      { href: "https://sistema-veterinario-1757815595-7232578663c4.herokuapp.com/register", label: "Registrarse", external: true },
    ],
    soporte: [
      { href: "#faq", label: "FAQ" },
      { href: "#contacto", label: "Contacto" },
      { href: "#", label: "Seguridad" },
    ],
    legal: [
      { href: "#", label: "Términos y Condiciones" },
      { href: "#", label: "Política de Privacidad" },
    ],
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer
      className="relative text-gray-700 py-12 md:py-16 overflow-hidden"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Background image - imagen completa como fondo */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/footer-bg-01.png"
            alt=""
            fill
            className="object-cover object-top"
            aria-hidden="true"
            priority={false}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Overlay sutil para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-white/30 z-[1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-lg w-fit"
              aria-label="Ir a inicio"
            >
              <Heart
                className="h-6 w-6 text-primary fill-primary"
                aria-hidden="true"
              />
              <span className="text-xl font-bold text-gray-600">
                Mi Huellita Digital
              </span>
            </Link>
            <p className="text-sm text-gray-500">{SITE_CONFIG.tagline}</p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 mt-4 text-sm text-gray-500 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-lg w-fit"
              aria-label={`Enviar correo a ${SITE_CONFIG.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-gray-600 mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerLinks.producto.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (!link.external) {
                        handleLinkClick(e, link.href);
                      }
                    }}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-lg px-2 py-1 -ml-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-semibold text-gray-600 mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerLinks.soporte.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-lg px-2 py-1 -ml-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-600 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 rounded-lg px-2 py-1 -ml-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black pt-8 text-center text-sm text-gray-600">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
