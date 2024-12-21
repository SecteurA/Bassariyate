import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bassariyate.com'),
  title: {
    default: 'Bassariyate - Votre Opticien de Confiance à Rabat',
    template: '%s | Bassariyate'
  },
  description: 'Bassariyate, votre opticien expert à Rabat. Large choix de lunettes, lentilles et services optiques professionnels. Prenez rendez-vous pour un examen de vue personnalisé.',
  keywords: ['opticien rabat', 'lunettes rabat', 'lentilles de contact', 'examen de vue', 'montures optiques', 'bassariyate', 'optique maroc'],
  authors: [{ name: 'Bassariyate' }],
  creator: 'Bassariyate',
  publisher: 'Bassariyate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bassariyate.com',
    title: 'Bassariyate - Votre Opticien de Confiance à Rabat',
    description: 'Découvrez notre collection de lunettes et nos services optiques professionnels. Prenez rendez-vous pour un examen de vue personnalisé.',
    siteName: 'Bassariyate',
    images: [{
      url: 'https://data.wget.ma/bassariyate/Logo-bassariyate.png',
      width: 300,
      height: 60,
      alt: 'Logo Bassariyate'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bassariyate - Votre Opticien de Confiance à Rabat',
    description: 'Découvrez notre collection de lunettes et nos services optiques professionnels. Prenez rendez-vous pour un examen de vue personnalisé.',
    images: ['https://data.wget.ma/bassariyate/Logo-bassariyate.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://bassariyate.com',
  },
  category: 'optique'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="overflow-guard">
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}