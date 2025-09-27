import Link from 'next/link';
import { ArrowRight, Shield, Award, Users, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Bygningsakustikk',
    description: 'Prosjektering av lydforhold i bygninger med fokus på lydisolasjon, romakustikk og vibrasjonsdempning.',
    features: ['Boliger', 'Kontorbygg', 'Kulturbygg', 'Undervisningsbygg'],
    href: '/bygningsakustikk',
  },
  {
    title: 'Støykartlegging',
    description: 'Kartlegging og analyse av støy fra industri, veitrafikk, jernbane og andre støykilder.',
    features: ['Industristøy', 'Trafikkstøy', 'Bygge- og anleggsstøy', 'Støymålinger'],
    href: '/stoykartlegging',
  },
  {
    title: 'Reguleringsplaner',
    description: 'Utredninger og rapporter for reguleringsplaner med vurdering av støyforhold og akustiske tiltak.',
    features: ['Støyutredninger', 'Konsekvensanalyser', 'Tiltaksplaner', 'Planbestemmelser'],
    href: '/reguleringsplaner',
  },
  {
    title: 'Skytebaner',
    description: 'Spesialkompetanse på støy fra skytebaner med målinger, beregninger og tiltaksforslag.',
    features: ['Støyberegninger', 'Støymålinger', 'Tiltaksplaner', 'Naboforhold'],
    href: '/skytebaner',
  },
];

const credentials = [
  'Sentral godkjenning tiltaksklasse 3',
  'Prosjektering av lydforhold og vibrasjoner',
  'Medlem av Norsk Akustisk Selskap',
  'Over 30 års erfaring',
];

export default function Home() {
  return (
    <>
      {/* Hero Section with background image */}
      <section
        className="relative bg-cover bg-center text-white py-32"
        style={{
          backgroundImage: 'url(/header-bg.jpg)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Rådgivende ingeniører i akustikk
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Rieber Prosjekt AS leverer spesialiserte konsulenttjenester innen akustikk,
              støykartlegging og vibrasjoner. Med over 30 års erfaring og sentral godkjenning
              i tiltaksklasse 3, sikrer vi optimale lydforhold for deres prosjekter.
            </p>

            {/* Credentials integrated into hero */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>{credential}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn bg-white text-primary hover:bg-gray-100 border-white">
                Ta kontakt
              </Link>
              <Link href="/om-oss" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                Les mer om oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-secondary">
              Vi tilbyr omfattende rådgivningstjenester innen akustikk og støy,
              tilpasset deres spesifikke behov og prosjektkrav.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
                >
                  Les mer <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Hvorfor velge Rieber Prosjekt AS
            </h2>
            <p className="text-lg text-gray-600">
              Vi kombinerer faglig ekspertise med praktisk erfaring for å levere
              løsninger som møter både tekniske krav og praktiske behov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Godkjent kompetanse
              </h3>
              <p className="text-gray-600">
                Sentral godkjenning i tiltaksklasse 3 for prosjektering av lydforhold
                og vibrasjoner sikrer kvalitet og kompetanse.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Lang erfaring
              </h3>
              <p className="text-gray-600">
                Over 30 års erfaring med komplekse akustiske utfordringer gir oss
                unik innsikt og løsningsorientert tilnærming.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Helhetlig tilnærming
              </h3>
              <p className="text-gray-600">
                Vi ser akustiske forhold i sammenheng med andre tekniske disipliner
                for å oppnå helhetlige gode løsninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            La oss hjelpe deg med ditt neste prosjekt
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Kontakt oss for en uforpliktende samtale om hvordan vi kan bidra
            til å sikre optimale akustiske forhold i deres prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-white text-primary hover:bg-gray-100 border-white">
              Kontakt oss
            </Link>
            <a href="tel:92486555" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
              Ring 924 86 555
            </a>
          </div>
        </div>
      </section>
    </>
  );
}