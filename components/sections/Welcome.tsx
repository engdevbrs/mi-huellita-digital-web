"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Welcome = () => {
  return (
    <section
      className="py-20 bg-[#FFFEF0]"
      aria-labelledby="welcome-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="blob-shape bg-gradient-to-br from-[#FFB6C1] to-[#FFF8DC] overflow-hidden relative min-h-[400px] md:min-h-[500px]">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/home-1-01.jpg"
                  alt="Profesional cuidando mascota"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-2 block">
              Bienvenido
            </span>
            <h2
              id="welcome-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title inline-block"
            >
              Calidad y Cuidado Profesional
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mi Huellita Digital proporciona servicios de gestión de historial médico para todas las razas de perros y gatos. 
              Estamos completamente comprometidos con la salud e higiene de tus mejores amigos peludos. 
              Ofrecemos estimaciones gratuitas y consultas para ayudar a que tu mascota se vea y se sienta mejor.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">VETERINARIOS CERTIFICADOS</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">20 AÑOS DE EXPERIENCIA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">AMANTES DE LOS ANIMALES</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">PADRES DE MASCOTAS</span>
              </li>
            </ul>
            <Button variant="primary" size="lg">
              Aprender Más
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

