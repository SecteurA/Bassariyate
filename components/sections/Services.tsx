"use client";

import { Eye, Glasses, Contact2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import { slideUp, staggerChildren, slideInLeft } from "@/lib/animations/variants";
import { motion } from "framer-motion";

const services = [
  {
    icon: Eye,
    title: "Examen de vue",
    description: "Un bilan visuel complet réalisé par nos opticiens diplômés avec des équipements de dernière génération."
  },
  {
    icon: Glasses,
    title: "Lunettes sur mesure",
    description: "Large choix de montures et verres adaptés à vos besoins, votre style et votre budget."
  },
  {
    icon: Contact2,
    title: "Lentilles de contact",
    description: "Adaptation et suivi personnalisé pour vos lentilles de contact avec les meilleures marques."
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variants={slideUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services optiques professionnels
          </p>
        </AnimateOnScroll>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={slideInLeft}>
              <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}