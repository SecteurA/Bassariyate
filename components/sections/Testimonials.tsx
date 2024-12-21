"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { slideInRight, staggerChildren } from "@/lib/animations/variants";
import AnimateOnScroll from "@/components/animations/AnimateOnScroll";

const testimonials = [
  {
    name: "Fatima B.",
    avatar: "FB",
    rating: 5,
    text: "Service exceptionnel ! L'équipe a pris le temps de me conseiller pour trouver la monture parfaite."
  },
  {
    name: "Karim M.",
    avatar: "KM",
    rating: 5,
    text: "Très satisfait de mes nouvelles lunettes. Le rapport qualité-prix est excellent."
  },
  {
    name: "Yasmine A.",
    avatar: "YA",
    rating: 5,
    text: "Je recommande vivement ! Des professionnels à l'écoute et des produits de qualité."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variants={slideInRight} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Avis Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ce que nos clients pensent de nous
          </p>
        </AnimateOnScroll>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonial.text}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}