"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Promotions from "@/components/sections/Promotions";
import { Toaster } from "@/components/ui/toaster";

// Dynamically import ContactAppointment to avoid hydration issues
const ContactAppointment = dynamic(() => import("@/components/sections/ContactAppointment"), {
  ssr: false
});

export default function Home() {
  return (
    <main>
      <Toaster />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Promotions />
      <ContactAppointment />
    </main>
  );
}