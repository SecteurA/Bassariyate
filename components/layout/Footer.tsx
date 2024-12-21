import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sky-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="relative w-[160px] h-[50px] mb-4">
              <Image
                src="https://data.wget.ma/bassariyate/Logo-bassariyate.png"
                alt="Logo"
                fill
                className="object-contain brightness-0 invert"
                sizes="160px"
              />
            </div>
            <p className="text-sm text-white/90">
              Votre vision est notre priorité. Découvrez nos services d'optique professionnels et notre collection exclusive de montures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-white/80 transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-white/80 transition-colors">Collections</Link></li>
              <li><Link href="#testimonials" className="hover:text-white/80 transition-colors">Témoignages</Link></li>
              <li><Link href="#contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li>Lun-Ven : 09:30–13:00, 15:30–19:30</li>
              <li>Sam : 10:00-15:00</li>
              <li>Dim : Fermé</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>547 Hay el menzeh, CYM, RABAT</li>
              <li>Tél: 0537 28 00 41</li>
              <li>Email: contact@bassariyate.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bassariyate. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/mentions-legales" className="hover:text-white/80 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white/80 transition-colors">Politique de confidentialité</Link>
            <Link href="/cgv" className="hover:text-white/80 transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}