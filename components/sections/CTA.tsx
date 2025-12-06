"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const CTA = () => {
  return (
    <section
      className="relative py-20 text-gray-900 overflow-hidden"
      aria-label="Llamado a la acción"
    >
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0,60 Q360,120 720,60 T1440,60"
            stroke="#FF69B4"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-10">
            ¿Listo para cuidar mejor a tu mascota?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Únete a Mi Huellita Digital hoy y dale a tu compañero el cuidado
            que se merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sistema-veterinario-1757815595-7232578663c4.herokuapp.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[#FF69B4] hover:bg-[#FF1493]"
              >
                Comenzar Gratis - 7 Días
              </Button>
            </a>
            <a href="#precios">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                Ver Planes
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
