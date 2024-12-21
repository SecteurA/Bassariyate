"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Appointment() {
  const [date, setDate] = useState<Date>();

  return (
    <section id="appointment" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prendre Rendez-vous</h2>
            <p className="text-lg text-gray-600">
              Réservez votre créneau en quelques clics
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Votre prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Votre nom" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
            </div>

            <div className="space-y-2">
              <Label>Type de rendez-vous</Label>
              <RadioGroup defaultValue="eye-exam">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eye-exam" id="eye-exam" />
                    <Label htmlFor="eye-exam">Examen de vue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="glasses" id="glasses" />
                    <Label htmlFor="glasses">Choix de lunettes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lenses" id="lenses" />
                    <Label htmlFor="lenses">Lentilles de contact</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Date souhaitée</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit" className="w-full">
              Confirmer le rendez-vous
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}