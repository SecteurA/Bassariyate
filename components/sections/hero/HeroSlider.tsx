"use client";

import { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";
import SlideNavigation from "./SlideNavigation";

const SLIDE_DURATION = 10000; // 10 seconds

const slides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1512099053734-e6767b535838",
    content: {
      title: "Votre vision mérite le meilleur",
      description: "Découvrez notre expertise en optique et notre collection exclusive de montures pour sublimer votre regard."
    }
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    content: {
      title: "Une expertise à votre service",
      description: "Bénéficiez de conseils personnalisés et d'un accompagnement sur-mesure pour votre santé visuelle."
    }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] mt-20">
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.imageUrl}
          imageUrl={slide.imageUrl}
          content={slide.content}
          isActive={currentSlide === index}
        />
      ))}
      <SlideNavigation onPrevious={goToPrevious} onNext={goToNext} />
    </section>
  );
}