"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Heart, Star } from "lucide-react";

const stats = [
  {
    number: "730+",
    label: "Clientes Felices",
    icon: Users,
  },
  {
    number: "80+",
    label: "Profesionales",
    icon: Award,
  },
  {
    number: "820+",
    label: "Mascotas Registradas",
    icon: Heart,
  },
  {
    number: "90+",
    label: "Premios",
    icon: Star,
  },
];

export const Stats = () => {
  return (
    <section
      className="relative py-16 md:py-24 text-white overflow-hidden"
      aria-label="Estadísticas"
    >
      {/* Background image - imagen completa como fondo */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/home-1-21.png"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
            priority={false}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Stats content sobre la imagen */}
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 text-primary stroke-[2.5]" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
