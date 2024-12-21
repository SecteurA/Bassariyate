"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        (isScrolled || isMobileMenuOpen) ? "bg-white shadow-md" : "bg-white/90 md:bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="relative z-50 block" 
            onClick={handleMobileMenuClick}
          >
            <div className="relative w-[240px] md:w-[300px] h-[60px]">
              <Image
                src="https://data.wget.ma/bassariyate/Logo-bassariyate.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 240px, 300px"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-sky-blue transition-colors font-bold">Services</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-sky-blue transition-colors font-bold">Collections</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-sky-blue transition-colors font-bold">Témoignages</Link>
            <Link href="#contact-appointment" className="text-gray-700 hover:text-sky-blue transition-colors font-bold">Contact</Link>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="#contact-appointment">Prendre RDV</Link>
            </Button>
          </div>

          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className="h-6 w-6 text-gray-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        <div 
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ top: '80px' }}
        >
          <div className="p-4 space-y-6">
            <Link 
              href="#services" 
              className="block text-gray-700 hover:text-sky-blue font-bold text-lg py-2" 
              onClick={handleMobileMenuClick}
            >
              Services
            </Link>
            <Link 
              href="#gallery" 
              className="block text-gray-700 hover:text-sky-blue font-bold text-lg py-2" 
              onClick={handleMobileMenuClick}
            >
              Collections
            </Link>
            <Link 
              href="#testimonials" 
              className="block text-gray-700 hover:text-sky-blue font-bold text-lg py-2" 
              onClick={handleMobileMenuClick}
            >
              Témoignages
            </Link>
            <Link 
              href="#contact-appointment" 
              className="block text-gray-700 hover:text-sky-blue font-bold text-lg py-2" 
              onClick={handleMobileMenuClick}
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
              onClick={handleMobileMenuClick}
            >
              <Link href="#contact-appointment">Prendre RDV</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}