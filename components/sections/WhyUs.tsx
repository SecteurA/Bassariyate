"use client";

import { Shield, Award, Clock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import { slideUp, staggerChildren, scaleUp } from "@/lib/animations/variants";

const reasons = [
  {
    icon: Shield,
    title: "Garantie Satisfaction",
    description: "Adaptation garantie pendant 30 jours et SAV premium pour votre tranquillité."
  },
  {
    icon: Award,
    title: "Expertise Certifiée",
    description: "Opticiens diplômés et formation continue pour un service d'excellence."
  },
  {
    icon: Clock,
    title: "Disponibilité",
    description: "Horaires étendus et service d'urgence pour vos besoins immédiats."
  },
  {
    icon: HeartHandshake,
    title: "Conseil Personnalisé",
    description: "Accompagnement sur-mesure pour trouver la solution adaptée à vos besoins."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variants={slideUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des engagements concrets pour votre satisfaction
          </p>
        </AnimateOnScroll>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={scaleUp}
            >
              <motion.div 
                className="mx-auto w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <reason.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}