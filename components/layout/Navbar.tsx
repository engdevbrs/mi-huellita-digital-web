"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#caracteristicas", label: "Características" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Header Bar - Estilo Petzen */}
      <div className="bg-[#1a1a2e] text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Bienvenido a Mi Huellita Digital!</span>
          <a
            href="mailto:contacto@mihuellitadigital.cl"
            className="flex items-center gap-2 hover:text-[#FF69B4] transition-colors"
          >
            <span>📧</span>
            <span>contacto@mihuellitadigital.cl</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 rounded-lg"
              aria-label="Ir a inicio"
            >
              <Heart className="h-8 w-8 text-[#FF69B4] fill-[#FF69B4]" aria-hidden="true" />
              <span className="text-2xl font-bold text-[#1a1a2e]">Mi Huellita Digital</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#1a1a2e] hover:text-[#FF69B4] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 rounded-lg px-2 py-1 font-medium uppercase text-sm flex items-center gap-1"
                >
                  <span className="text-[#FF69B4]">+</span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1a1a2e] hover:text-[#FF69B4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 rounded-lg"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
              role="menu"
              aria-label="Menú móvil"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-3 text-[#1a1a2e] hover:text-[#FF69B4] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 rounded-lg px-2 font-medium uppercase text-sm flex items-center gap-1"
                  role="menuitem"
                >
                  <span className="text-[#FF69B4]">+</span>
                  {link.label}
                </a>
              ))}
              <a
                href="https://sistema-veterinario-1757815595-7232578663c4.herokuapp.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button variant="primary" size="md" className="w-full">
                  Comenzar Gratis
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
