"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import GalleryCard from "./gallery/GalleryCard";
import { collections } from "./gallery/collections";

type Category = "femme" | "homme" | "enfant";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("femme");

  return (
    <section id="gallery" className="scroll-mt-20 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Nos Collections</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de montures haut de gamme
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {[
            { id: "femme", label: "Femme" },
            { id: "homme", label: "Homme" },
            { id: "enfant", label: "Enfant" }
          ].map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id as Category)}
              className="capitalize text-sm md:text-base"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {collections[activeCategory].map((item) => (
            <GalleryCard
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}