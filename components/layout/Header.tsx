"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Glasses className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">OptiVision</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Collections</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Témoignages</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <Button className="hidden md:inline-flex">
            Prendre RDV
          </Button>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="py-4 px-4 space-y-4">
            <Link href="#services" className="block text-gray-700 hover:text-primary">Services</Link>
            <Link href="#gallery" className="block text-gray-700 hover:text-primary">Collections</Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-primary">Témoignages</Link>
            <Link href="#contact" className="block text-gray-700 hover:text-primary">Contact</Link>
            <Button className="w-full">Prendre RDV</Button>
          </div>
        </div>
      </div>
    </header>
  );
}