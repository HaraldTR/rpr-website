import Link from 'next/link';
import { Award, Shield, Users, Target, CheckCircle, Building } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss - Rieber Prosjekt AS',
  description: 'Rieber Prosjekt AS - Rådgivende ingeniører i akustikk med over 30 års erfaring. Sentral godkjenning tiltaksklasse 3 for prosjektering av lydforhold og vibrasjoner.',
};

const values = [
  {
    title: 'Faglig integritet',
    description: 'Vi leverer alltid faglig funderte råd basert på vitenskapelige metoder og anerkjente standarder.',
    icon: Shield,
  },
  {
    title: 'Samarbeid',
    description: 'Vi ser vårt fagfelt i sammenheng med andre disipliner og arbeider tett med alle involverte parter.',
    icon: Users,
  },
  {
    title: 'Kvalitet',
    description: 'Vi stiller høye krav til kvalitet i alle ledd, fra første møte til ferdig dokumentasjon.',
    icon: Award,
  },
  {
    title: 'Løsningsfokus',
    description: 'Vi fokuserer på praktiske, gjennomførbare løsninger som møter både tekniske krav og økonomiske rammer.',
    icon: Target,
  },
];

const milestones = [
  { year: '1990', description: 'Etablering av Rieber Prosjekt AS' },
  { year: '1995', description: 'Første store industriprosjekt' },
  { year: '2000', description: 'Utvidelse av tjenester til skytebaner' },
  { year: '2005', description: 'Sentral godkjenning tiltaksklasse 2' },
  { year: '2010', description: 'Spesialisering innen komplekse kulturbygg' },
  { year: '2015', description: 'Oppgradering til tiltaksklasse 3' },
  { year: '2020', description: 'Digitalisering av arbeidsprosesser' },
  { year: '2024', description: 'Over 1000 gjennomførte prosjekter' },
];

const certifications = [
  'Sentral godkjenning for ansvarsrett - Tiltaksklasse 3',
  'Prosjektering av lydforhold og vibrasjoner',
  'Medlem av Norsk Akustisk Selskap',
  'Sertifisert for støymålinger etter NS-EN ISO/IEC 17025',
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Om Rieber Prosjekt AS
            </h1>
            <p className="text-xl text-gray-200">
              Vi er et etablert konsulentfirma med over 30 års erfaring innen
              akustikk og støy. Vår ekspertise og dedikasjon til kvalitet har
              gjort oss til en trusted partner for komplekse akustiske utfordringer.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ledende ekspertise siden 1990
            </h2>
            <p className="text-lg mb-6">
              Rieber Prosjekt AS ble etablert i 1990 med en visjon om å levere
              førsteklasses rådgivningstjenester innen akustikk. Gjennom tre tiår
              har vi bygget opp solid kompetanse og erfaring som gjør oss til en
              foretrukken partner for arkitekter, entreprenører og byggherrer.
            </p>
            <p className="text-lg mb-6">
              Vi arbeider for å utvikle gode løsninger i samarbeid med oppdragsgiver
              og øvrige rådgivere. Vår styrke ligger i evnen til å se våre fagfelt
              i sammenheng med andre fagområder og rammebetingelsene for det arbeidet
              som skal utføres.
            </p>
            <p className="text-lg">
              Med sentral godkjenning i tiltaksklasse 3 har vi kvalifikasjoner til
              å påta oss de mest krevende oppdragene innen prosjektering av lydforhold
              og vibrasjoner.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Våre verdier
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              Vår historie
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Godkjenninger og medlemskap
            </h2>
            <div className="bg-white border border-border rounded-lg p-8">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-accent flex-shrink-0" />
                    <span className="text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Hvorfor velge Rieber Prosjekt AS
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Dokumentert kompetanse
                </h3>
                <p className="text-lg text-secondary">
                  Med sentral godkjenning i tiltaksklasse 3 og over 30 års erfaring
                  har vi bevist vår evne til å levere på de mest krevende prosjektene.
                  Våre referanser spenner fra enkle boligprosjekter til komplekse
                  kulturbygg og industrianlegg.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Helhetlig perspektiv
                </h3>
                <p className="text-lg text-secondary">
                  Vi forstår at akustikk ikke eksisterer i et vakuum. Våre løsninger
                  tar hensyn til arkitektur, konstruksjon, økonomi og brukerbehov.
                  Dette sikrer at våre anbefalinger er både teknisk solide og
                  praktisk gjennomførbare.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Personlig oppfølging
                </h3>
                <p className="text-lg text-secondary">
                  Som et kompakt firma kan vi tilby tett oppfølging og direkte
                  kommunikasjon gjennom hele prosjektet. Du får en dedikert
                  kontaktperson som kjenner ditt prosjekt i detalj.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building size={48} className="text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Våre kontorer
            </h2>
            <p className="text-lg mb-4">
              Vi holder til i moderne lokaler på Billingstad, sentralt plassert
              i Stor-Oslo området med god tilgang til hele Østlandet.
            </p>
            <address className="text-lg not-italic text-secondary">
              Billingstadåsen 18b<br />
              1396 Billingstad<br />
              Norge
            </address>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            La oss bli kjent
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi ser frem til å høre om ditt prosjekt og hvordan vi kan bidra
            med vår ekspertise. Ta kontakt for en uforpliktende samtale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark border-accent hover:border-accent-dark">
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