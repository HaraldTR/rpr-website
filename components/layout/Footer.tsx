import Link from 'next/link';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

const services = [
  { name: 'Bygningsakustikk', href: '/bygningsakustikk' },
  { name: 'Støykartlegging', href: '/stoykartlegging' },
  { name: 'Reguleringsplaner', href: '/reguleringsplaner' },
  { name: 'Skytebaner', href: '/skytebaner' },
];

const quickLinks = [
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Kurs', href: '/kurs' },
  { name: 'Referanser', href: '/referanser' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Rieber Prosjekt AS
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Rådgivende ingeniører i akustikk med sentral godkjenning i tiltaksklasse 3
              for prosjektering av lydforhold og vibrasjoner.
            </p>
            <p className="text-xs text-gray-500">
              Org.nr: NO 911 678 462 MVA
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              Tjenester
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              Rask tilgang
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gray-500" />
                <div>
                  <p>Billingstadåsen 18b</p>
                  <p>1396 Billingstad</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <a href="tel:92486555" className="hover:text-white transition-colors">
                  924 86 555
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <a href="mailto:post@rpr.no" className="hover:text-white transition-colors">
                  post@rpr.no
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} Rieber Prosjekt AS. Alle rettigheter reservert.</p>
            <div className="flex gap-6">
              <Link href="/personvern" className="hover:text-gray-300 transition-colors">
                Personvernerklæring
              </Link>
              <Link href="/cookies" className="hover:text-gray-300 transition-colors">
                Informasjonskapsler
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}