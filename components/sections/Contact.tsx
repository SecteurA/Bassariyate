import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 rue de la Vue, 75000 Paris"
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@optivision.fr"
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven: 9h30-19h00\nSam: 9h30-18h00"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nous Contacter</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venez nous rencontrer ou contactez-nous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}