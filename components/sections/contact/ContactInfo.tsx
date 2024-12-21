"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "547 Hay el menzeh, CYM, RABAT"
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "0537 28 00 41"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@bassariyate.com"
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven : 09:30–13:00, 15:30–19:30\nSam : 10:00-15:00"
  }
];

export default function ContactInfo() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Nous Contacter</h2>
        <p className="text-lg text-gray-600 mb-8">
          Venez nous rencontrer ou contactez-nous
        </p>
        <ContactForm />
      </div>

    </div>
  );
}