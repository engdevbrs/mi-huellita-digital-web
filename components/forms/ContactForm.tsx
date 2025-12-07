"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-white"
      aria-labelledby="contact-heading"
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
            Contáctanos
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title inline-block"
          >
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Envíanos un mensaje y te responderemos lo antes posible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="default" className="bg-primary text-white">
                <h3 className="text-xl font-bold mb-4">¡Escríbenos! Agenda una cita</h3>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="space-y-4">
                    <Input
                      label="Nombre *"
                      {...register("name")}
                      error={errors.name?.message}
                      required
                      autoComplete="name"
                      aria-required="true"
                      placeholder="Ingresa tu nombre completo"
                      className="bg-white text-gray-900"
                    />

                    <Input
                      label="Email *"
                      type="email"
                      {...register("email")}
                      error={errors.email?.message}
                      required
                      autoComplete="email"
                      aria-required="true"
                      placeholder="tu@email.com"
                      className="bg-white text-gray-900"
                    />

                    <Input
                      label="Asunto"
                      {...register("subject")}
                      error={errors.subject?.message}
                      required
                      aria-required="true"
                      placeholder="¿Sobre qué quieres contactarnos?"
                      className="bg-white text-gray-900"
                    />

                    <Textarea
                      label="Tu Mensaje"
                      {...register("message")}
                      error={errors.message?.message}
                      required
                      rows={4}
                      aria-required="true"
                      placeholder="Escribe tu mensaje aquí..."
                      className="bg-white text-gray-900"
                    />

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                        role="alert"
                      >
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                        <span>¡Mensaje enviado con éxito! Te responderemos pronto.</span>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                        role="alert"
                      >
                        <AlertCircle className="h-5 w-5" aria-hidden="true" />
                        <span>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full bg-warning hover:bg-warning-dark"
                    >
                      {!isSubmitting && (
                        <>
                          Enviar Mensaje
                          <Send className="h-5 w-5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Right side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ponte en Contacto</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ofrecemos servicios rápidos y fáciles para perros y gatos de diversas razas. 
                Sin importar su tamaño o edad, podemos brindar una experiencia positiva.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600 text-sm">
                    Santiago, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600 text-sm">
                    +56 9 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">
                    contacto@mihuellitadigital.cl
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
