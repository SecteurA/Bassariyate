"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import { slideUp, staggerChildren } from "@/lib/animations/variants";

const offers = [
  {
    title: "2ème Paire Offerte",
    description: "Pour l'achat d'une paire de lunettes de vue",
    conditions: "Voir conditions en magasin"
  },
  {
    title: "Offre Solaire",
    description: "-30% sur les lunettes de soleil",
    conditions: "Jusqu'au 30 juin"
  },
  {
    title: "Pack Lentilles",
    description: "3 mois de lentilles achetés = 1 mois offert",
    conditions: "Pour tout nouveau client"
  }
];

export default function Promotions() {
  return (
    <section id="promotions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variants={slideUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Offres Spéciales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profitez de nos promotions en cours
          </p>
        </AnimateOnScroll>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <motion.div 
                    className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Tag className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-lg mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {offer.description}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {offer.conditions}
                  </motion.p>
                  <Button 
                    asChild 
                    className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href="#contact-appointment">En profiter</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}