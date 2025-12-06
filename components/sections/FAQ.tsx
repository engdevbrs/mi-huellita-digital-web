"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-[#FFFEF0]"
      aria-labelledby="faq-heading"
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
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 section-title inline-block"
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Todo lo que necesitas saber sobre Mi Huellita Digital
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="border border-gray-200 rounded-[20px] overflow-hidden bg-white">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-[#1a1a2e] pr-4">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp
                        className="h-5 w-5 text-[#FF69B4] flex-shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown
                        className="h-5 w-5 text-gray-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
