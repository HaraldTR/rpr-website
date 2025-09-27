import Link from 'next/link';
import { CheckCircle, FileText, Building, Volume2, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bygningsakustikk - Rieber Prosjekt AS',
  description: 'Spesialiserte tjenester innen bygningsakustikk. Vi prosjekterer lydforhold i boliger, kontorbygg, kulturbygg og undervisningsbygg med fokus på optimal lydisolasjon og romakustikk.',
};

const services = [
  {
    title: 'Boliger',
    description: 'Prosjektering av lydisolasjon mellom boenheter, fasadeisolasjon mot utendørs støy, og optimale akustiske forhold i fellesarealer.',
    icon: Building,
  },
  {
    title: 'Kontorbygg',
    description: 'Akustisk design for arbeidsplasser med fokus på konsentrasjon og kommunikasjon. Vi sikrer god taleforståelighet og redusert støynivå.',
    icon: Building,
  },
  {
    title: 'Kulturbygg',
    description: 'Spesialisert akustisk design for konsertsaler, teatre og kultursentre. Vi optimaliserer romakustikken for beste lydopplevelse.',
    icon: Volume2,
  },
  {
    title: 'Undervisningsbygg',
    description: 'Akustiske løsninger for skoler og universiteter som fremmer læring med god taletydelighet og minimale forstyrrelser.',
    icon: Building,
  },
];

const expertise = [
  'Lydisolasjon mellom rom og etasjer',
  'Fasadeisolasjon mot utendørs støy',
  'Trinnlydsisolasjon',
  'Romakustikk og etterklangstid',
  'Vibrasjonsisolering',
  'Teknisk rom støydemping',
  'Akustisk regulering i fellesarealer',
  'Lydabsorbenter og diffusorer',
];

const standards = [
  'NS 8175 - Lydforhold i bygninger',
  'TEK17 - Teknisk forskrift',
  'ISO 3382 - Romakustiske målinger',
  'ISO 140 - Lydisolasjonsmålinger',
  'NS 8176 - Vibrasjoner og støt',
];

export default function BygningsakustikkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Bygningsakustikk
            </h1>
            <p className="text-xl text-gray-200">
              Vi leverer helhetlige akustiske løsninger for alle typer bygninger,
              fra boliger til komplekse kulturbygg. Med sentral godkjenning i
              tiltaksklasse 3 sikrer vi at deres prosjekt oppfyller alle krav
              til lydforhold.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ekspertise innen lydforhold i bygninger
            </h2>
            <p className="text-lg mb-6">
              Rieber Prosjekt AS har omfattende erfaring med prosjektering av lydforhold
              i alle typer bygninger. Vi ser akustiske forhold i sammenheng med andre
              tekniske disipliner for å oppnå helhetlige gode løsninger.
            </p>
            <p className="text-lg mb-6">
              Vårt arbeid omfatter alt fra enkle lydisolasjonsberegninger til komplekse
              akustiske analyser for spesialbygg. Vi benytter avanserte måleinstrumenter
              og spesialisert programvare for å sikre presise og pålitelige resultater.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Våre tjenester
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise List */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Våre kompetanseområder
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Standarder og forskrifter
            </h2>
            <p className="text-lg mb-8">
              Vi arbeider etter gjeldende norske og internasjonale standarder for
              å sikre at alle prosjekter oppfyller myndighetskrav og beste praksis:
            </p>
            <div className="bg-white border border-border rounded-lg p-8">
              <ul className="space-y-3">
                {standards.map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Vår arbeidsmetode
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Kartlegging og analyse
                  </h3>
                  <p className="text-secondary">
                    Vi starter med en grundig kartlegging av prosjektets akustiske
                    utfordringer og krav. Dette inkluderer analyse av tegninger,
                    forskriftskrav og brukerens behov.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Prosjektering og beregning
                  </h3>
                  <p className="text-secondary">
                    Vi utfører detaljerte beregninger og simuleringer for å finne
                    optimale løsninger. Alle forslag dokumenteres med tegninger
                    og spesifikasjoner.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Kvalitetssikring og oppfølging
                  </h3>
                  <p className="text-secondary">
                    Vi følger prosjektet gjennom byggefasen og utfører kontrollmålinger
                    for å sikre at de prosjekterte løsningene fungerer som planlagt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield size={32} />
            <h2 className="text-3xl font-serif font-bold text-white">
              Sentral godkjenning tiltaksklasse 3
            </h2>
          </div>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi har den høyeste godkjenningen for prosjektering av lydforhold
            og vibrasjoner. La oss sikre at deres byggeprosjekt får optimale
            akustiske løsninger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark border-accent hover:border-accent-dark">
              Ta kontakt for konsultasjon
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