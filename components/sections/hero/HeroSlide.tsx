"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSlideProps {
  isActive: boolean;
  imageUrl: string;
  content: {
    title: string;
    description: string;
  };
}

export default function HeroSlide({ isActive, imageUrl, content }: HeroSlideProps) {
  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="absolute inset-0"
      initial="enter"
      animate={isActive ? "center" : "exit"}
      variants={slideVariants}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative h-[400px] md:h-[600px] flex items-center">
        <motion.div 
          className="max-w-xl md:max-w-2xl text-white"
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base md:text-lg bg-green-600 hover:bg-green-700">
              <Link href="#contact-appointment">Prendre rendez-vous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base md:text-lg bg-white/10 hover:bg-white/20">
              <Link href="#services">Découvrir nos services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}