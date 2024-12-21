"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { Variants } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
}

export default function AnimateOnScroll({ children, variants, className }: AnimateOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}