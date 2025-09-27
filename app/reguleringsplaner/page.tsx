import Link from 'next/link';
import { FileText, MapPin, Calculator, CheckCircle, ClipboardCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reguleringsplaner - Rieber Prosjekt AS',
  description: 'Støyutredninger for reguleringsplaner. Vi leverer komplette støyanalyser, konsekvensutredninger og tiltaksplaner i henhold til T-1442/2021.',
};

const services = [
  'Støyutredninger for nye boligområder',
  'Konsekvensanalyser for industriområder',
  'Vurdering av eksisterende støykilder',
  'Beregning av fremtidig støysituasjon',
  'Forslag til planbestemmelser',
  'Støysonekart og illustrasjoner',
  'Tiltaksplaner for støyreduksjon',
  'Nabovarsling og informasjon',
];

const deliverables = [
  {
    title: 'Støyutredning',
    description: 'Komplett rapport med vurdering av støyforhold, beregninger og anbefalinger for planområdet.',
    icon: FileText,
  },
  {
    title: 'Støysonekart',
    description: 'Detaljerte kart som viser støysoner i henhold til T-1442/2021 for dagens og fremtidig situasjon.',
    icon: MapPin,
  },
  {
    title: 'Tiltaksplan',
    description: 'Konkrete forslag til støyreduserende tiltak med kostnadsestimater og effektberegninger.',
    icon: ClipboardCheck,
  },
  {
    title: 'Planbestemmelser',
    description: 'Forslag til reguleringsbestemmelser som sikrer akseptable støyforhold i planområdet.',
    icon: Calculator,
  },
];

export default function ReguleringsplanerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Reguleringsplaner
            </h1>
            <p className="text-xl text-gray-200">
              Vi utfører støyutredninger for alle typer reguleringsplaner.
              Våre rapporter sikrer at planforslaget oppfyller kravene i
              T-1442/2021 og gir grunnlag for gode planløsninger.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Støyutredninger som sikrer gode planløsninger
            </h2>
            <p className="text-lg mb-6">
              Støy er ofte en kritisk faktor i reguleringsplanarbeid. Rieber Prosjekt AS
              har lang erfaring med å utarbeide støyutredninger som både tilfredsstiller
              myndighetskrav og muliggjør god arealutnyttelse.
            </p>
            <p className="text-lg mb-6">
              Vi arbeider tett med planleggere, arkitekter og kommuner for å finne
              løsninger som balanserer hensynet til støy med andre planfaglige forhold.
              Våre utredninger gir klare føringer for plassering av bygninger,
              uteområder og nødvendige støytiltak.
            </p>
            <p className="text-lg">
              Alle våre utredninger følger Klima- og miljødepartementets retningslinje
              T-1442/2021 og relevante kommunale bestemmelser.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Våre tjenester omfatter
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Leveranser
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deliverables.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Vår arbeidsprosess
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Innledende vurdering
                  </h3>
                  <p className="text-secondary">
                    Vi gjennomgår planforslaget og identifiserer relevante støykilder.
                    Kartlegging av eksisterende situasjon og fremtidige endringer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Beregninger og analyser
                  </h3>
                  <p className="text-secondary">
                    Detaljerte støyberegninger med 3D-modellering av terreng og
                    bebyggelse. Vurdering mot grenseverdier i T-1442/2021.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Løsningsforslag
                  </h3>
                  <p className="text-secondary">
                    Utarbeidelse av tiltak for å oppnå akseptable støyforhold.
                    Optimalisering av planløsning og bygningsplassering.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    Dokumentasjon
                  </h3>
                  <p className="text-secondary">
                    Komplett rapport med støysonekart, tiltaksplan og forslag til
                    planbestemmelser. Presentasjon for kommune og berørte parter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Regelverk og retningslinjer
            </h2>
            <div className="card">
              <h3 className="text-xl font-serif font-bold mb-4">
                T-1442/2021 - Retningslinje for behandling av støy i arealplanlegging
              </h3>
              <p className="text-lg text-secondary mb-4">
                Alle våre utredninger følger den nasjonale retningslinjen som angir
                grenseverdier og metoder for støyvurderinger i planarbeid.
              </p>
              <div className="bg-surface p-6 rounded-lg">
                <h4 className="font-bold mb-3">Støysoner vi vurderer:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-yellow-600">Gul sone:</span>
                    <span className="text-secondary">Vurderingssone hvor støy bør vurderes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">Rød sone:</span>
                    <span className="text-secondary">Område ikke egnet for støyfølsomme formål</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Planlegger dere et nytt område?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi hjelper dere med støyutredninger som sikrer at planforslaget
            oppfyller alle krav og gir grunnlag for gode bomiljøer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark border-accent hover:border-accent-dark">
              Start en dialog
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