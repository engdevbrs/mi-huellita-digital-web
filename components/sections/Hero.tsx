"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-8 pb-20 bg-gradient-to-b from-white to-[#FFFEF0] overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background decorative SVG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="/images/home-1-bg.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0,60 Q360,0 720,60 T1440,60"
            stroke="#FF69B4"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Badge variant="orange" className="mb-6 bg-[#FFB6C1] text-[#FF1493]">
              🐾 7 días gratis • Sin tarjeta de crédito
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6 leading-tight">
              Para Tu{" "}
              <span className="block">Mejor Amigo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              El carnet digital de tu mascota, siempre contigo. Guarda todo el historial médico en un solo lugar.
            </p>
            <div className="mb-8">
              <a
                href="https://sistema-veterinario-1757815595-7232578663c4.herokuapp.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Aprender Más
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle2
                  className="h-5 w-5 text-[#7CB342] mr-2"
                  aria-hidden="true"
                />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2
                  className="h-5 w-5 text-[#7CB342] mr-2"
                  aria-hidden="true"
                />
                <span>Cancela cuando quieras</span>
              </div>
            </div>
          </motion.div>

          {/* Visual - Solo imagen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/bg-contact02-700x737.png"
                alt="Persona con mascota - Mi Huellita Digital"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
