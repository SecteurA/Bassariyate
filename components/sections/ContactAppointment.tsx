"use client";

import dynamic from "next/dynamic";
import ContactInfo from "./contact/ContactInfo";

const AppointmentForm = dynamic(() => import("./appointment/AppointmentForm"), {
  ssr: false
});

export default function ContactAppointment() {
  return (
    <section id="contact-appointment" className="scroll-mt-20 py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AppointmentForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}