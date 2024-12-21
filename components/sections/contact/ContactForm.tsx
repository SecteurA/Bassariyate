"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <Card className="w-full">
      <CardContent className="p-4 md:p-6">
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nom</Label>
              <Input id="contact-name" placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="votre@email.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">Téléphone</Label>
            <Input 
              id="contact-phone" 
              type="tel" 
              placeholder="06 12 34 56 78"
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-subject">Sujet</Label>
            <Input id="contact-subject" placeholder="Sujet de votre message" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea 
              id="contact-message" 
              placeholder="Votre message"
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white">
            Envoyer le message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}