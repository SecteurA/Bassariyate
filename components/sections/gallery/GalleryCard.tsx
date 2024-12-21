"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils/price";
import { motion } from "framer-motion";

interface GalleryCardProps {
  name: string;
  image: string;
  price: number;
  brand: string;
}

export default function GalleryCard({ name, image, price, brand }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-64">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <motion.div 
          className="p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-600 mb-1">{brand}</p>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">À partir de {formatPrice(price)}</p>
        </motion.div>
      </Card>
    </motion.div>
  );
}