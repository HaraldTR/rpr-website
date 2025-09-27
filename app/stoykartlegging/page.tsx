import Link from 'next/link';
import { CheckCircle, MapPin, Activity, Factory, Car, Train } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Støykartlegging - Rieber Prosjekt AS',
  description: 'Profesjonell støykartlegging og støymålinger for industri, veitrafikk, jernbane og byggevirksomhet. Vi leverer detaljerte støyrapporter og tiltaksplaner.',
};

const services = [
  {
    title: 'Industristøy',
    description: 'Kartlegging av støy fra industrianlegg, pukkverk, og produksjonsvirksomhet. Vi identifiserer støykilder og foreslår effektive tiltak.',
    icon: Factory,
  },
  {
    title: 'Veitrafikkstøy',
    description: 'Beregning og måling av støy fra veitrafikk. Vi utarbeider støysonekart og vurderer behov for støyskjerming.',
    icon: Car,
  },
  {
    title: 'Jernbanestøy',
    description: 'Støyvurderinger for jernbaneprosjekter inkludert prognoser for fremtidig trafikk og vibrasjonsanalyser.',
    icon: Train,
  },
  {
    title: 'Bygge- og anleggsstøy',
    description: 'Støyberegninger for bygge- og anleggsvirksomhet med utarbeidelse av støyplaner og nabovarsling.',
    icon: Activity,
  },
];

const methodology = [
  'Støymålinger med kalibrerte instrumenter',
  'Beregninger i henhold til nordisk beregningsmetode',
  '3D-modellering av terreng og bygninger',
  'Støysonekart og fasadeberegninger',
  'Innendørs støynivåberegninger',
  'Vibrasjonsanalyser',
  'Prognoser for fremtidig støysituasjon',
  'Kost-nytte vurderinger av tiltak',
];

const regulations = [
  'T-1442/2021 - Retningslinje for støy i arealplanlegging',
  'NS 8175 - Lydforhold i bygninger',
  'Forurensningsforskriften kapittel 5',
  'Arbeidsmiljøloven - støykrav',
  'WHO guidelines for environmental noise',
];

export default function StoykartleggingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Støykartlegging
            </h1>
            <p className="text-xl text-gray-200">
              Vi utfører profesjonell støykartlegging for alle typer støykilder.
              Med avanserte måleinstrumenter og beregningsverktøy leverer vi
              presise støyanalyser og effektive tiltaksplaner.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Omfattende støyanalyser for alle behov
            </h2>
            <p className="text-lg mb-6">
              Støy er en av de mest utbredte miljøutfordringene i moderne samfunn.
              Rieber Prosjekt AS har spesialkompetanse på kartlegging, måling og
              beregning av støy fra alle typer kilder.
            </p>
            <p className="text-lg mb-6">
              Vi benytter state-of-the-art måleutstyr og anerkjente beregningsmetoder
              for å gi våre kunder pålitelige beslutningsgrunnlag. Våre rapporter
              følger nasjonale retningslinjer og internasjonale standarder.
            </p>
            <p className="text-lg">
              Fra enkle støymålinger til komplekse 3D-modelleringer av store
              områder - vi leverer skreddersydde løsninger tilpasset prosjektets
              behov og kompleksitet.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Støykilder vi kartlegger
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

      {/* Methodology */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Vår metodik og verktøy
            </h2>
            <p className="text-lg mb-8">
              Vi kombinerer feltmålinger med avanserte beregninger for å gi et
              komplett bilde av støysituasjonen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {methodology.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Example */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Leveranser og dokumentasjon
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Støysonekart
                </h3>
                <p className="text-secondary">
                  Visualisering av støyutbredelse med fargekodede soner som
                  viser støynivåer i henhold til gjeldende retningslinjer.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Måleresultater
                </h3>
                <p className="text-secondary">
                  Detaljerte rapporter med måleresultater, analyser og
                  sammenligning mot grenseverdier og retningslinjer.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Tiltaksplaner
                </h3>
                <p className="text-secondary">
                  Konkrete forslag til støyreduserende tiltak med
                  kostnadsestimater og effektvurderinger.
                </p>
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
            <p className="text-lg mb-8">
              Vi sikrer at alle våre vurderinger følger gjeldende regelverk:
            </p>
            <div className="bg-white border border-border rounded-lg p-8">
              <ul className="space-y-3">
                {regulations.map((regulation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{regulation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Hvorfor velge oss for støykartlegging
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Erfaring og kompetanse
                </h3>
                <p className="text-secondary">
                  Over 30 års erfaring med støykartlegging av alt fra enkle
                  prosjekter til store industrianlegg og infrastruktur.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Moderne utstyr
                </h3>
                <p className="text-secondary">
                  Vi benytter siste generasjon måleutstyr og programvare for
                  å sikre nøyaktige resultater og effektiv rapportering.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Helhetlig tilnærming
                </h3>
                <p className="text-secondary">
                  Vi ser støyproblematikk i sammenheng med andre miljøfaktorer
                  og tekniske forhold for optimale løsninger.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Kostnadseffektive løsninger
                </h3>
                <p className="text-secondary">
                  Vi fokuserer på praktiske og økonomisk gjennomførbare tiltak
                  som gir best mulig støyreduksjon for investeringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Behov for støykartlegging?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi hjelper deg med alt fra enkle støymålinger til omfattende
            kartlegging av store områder. Kontakt oss for en uforpliktende
            samtale om ditt prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark border-accent hover:border-accent-dark">
              Be om tilbud
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