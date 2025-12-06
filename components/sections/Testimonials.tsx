"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonios"
      className="py-20 bg-white relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 section-title inline-block"
          >
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Historias reales de dueños que confían en nosotros
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="default" className="relative">
                <Quote
                  className="absolute top-6 left-6 h-12 w-12 text-[#FFB6C1]"
                  aria-hidden="true"
                />
                <div className="pt-8 px-8 pb-6">
                  <div className="flex items-center gap-1 mb-4" aria-label={`Calificación: ${TESTIMONIALS[currentIndex].rating} de 5 estrellas`}>
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#FFD700] text-[#FFD700]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{TESTIMONIALS[currentIndex].content}"
                  </p>
                  <div className="border-t border-gray-200 pt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FFF8DC] flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">👤</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e]">
                        {TESTIMONIALS[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {TESTIMONIALS[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#FF69B4]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
