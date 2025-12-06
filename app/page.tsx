import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

// Lazy load sections for better performance
const Welcome = dynamic(() => import("@/components/sections/Welcome").then(mod => ({ default: mod.Welcome })), {
  ssr: true,
});

const Features = dynamic(() => import("@/components/sections/Features").then(mod => ({ default: mod.Features })), {
  ssr: true,
});

const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => ({ default: mod.Stats })), {
  ssr: true,
});

const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })), {
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: true,
});

const ContactForm = dynamic(() => import("@/components/forms/ContactForm").then(mod => ({ default: mod.ContactForm })), {
  ssr: true,
});

const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => ({ default: mod.CTA })), {
  ssr: true,
});

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Welcome />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </Suspense>
      <Footer />
    </main>
  );
}
