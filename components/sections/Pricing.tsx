"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";

export const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, SUBSCRIPTION_PLANS.length - cardsToShow);

  const visiblePlans = SUBSCRIPTION_PLANS.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section
      id="precios"
      className="py-20 bg-[#FFFEF0] relative overflow-visible"
      aria-labelledby="pricing-heading"
    >
      {/* Decorative element */}
      <div className="absolute top-20 right-10 opacity-10">
        <Image
          src="/images/home-1-28.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 section-title inline-block"
          >
            Planes que se adaptan a ti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Desde una mascota hasta criaderos. Elige el plan perfecto para tus necesidades.
            <br />
            <span className="font-semibold text-[#FF69B4]">7 días gratis para probar sin compromiso</span>
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto pt-8">
          {/* Carrusel container */}
          <div className="relative overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {visiblePlans.map((plan, index) => (
                  <Card
                    key={plan.id}
                    variant="default"
                    hover={true}
                    className={`text-center h-full flex flex-col ${
                      plan.popular
                        ? "border-2 border-[#FF69B4] relative"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge variant="pink" className="bg-[#FF69B4] text-white px-4 py-1 text-xs font-semibold shadow-lg">
                          Más Popular
                        </Badge>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#1a1a2e]">
                        {plan.priceLabel}
                      </span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                    <ul className="text-left space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2
                            className="h-5 w-5 text-[#7CB342] mr-2 mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-700">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://sistema-veterinario-1757815595-7232578663c4.herokuapp.com/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="md"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border-2 border-gray-300 hover:border-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300"
              aria-label="Plan anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-[#FF69B4]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al plan ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border-2 border-gray-300 hover:border-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300"
              aria-label="Siguiente plan"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
