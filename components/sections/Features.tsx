"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Shield, QrCode, Bell } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Zap,
  Shield,
  QrCode,
  Bell,
};

export const Features = () => {
  return (
    <section
      id="caracteristicas"
      className="py-20 bg-white relative"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-2 block">
            Nuestros Servicios
          </span>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title inline-block"
          >
            Todo lo que necesitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Ofrecemos servicios rápidos y fáciles para perros y gatos de diversas razas. 
            Sin importar su tamaño o edad, podemos brindar una experiencia positiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="text-center h-full">
                  {/* Icono */}
                  <div className="mb-6 flex justify-center">
                    <Icon className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
          <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
          <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
          <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
          <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
        </div>
      </div>
    </section>
  );
};
