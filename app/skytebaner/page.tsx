import Link from 'next/link';
import { Target, Activity, FileText, Shield, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skytebaner - Rieber Prosjekt AS',
  description: 'Spesialkompetanse på støy fra skytebaner. Vi utfører støymålinger, beregninger og utarbeider tiltaksplaner for alle typer skyteanlegg.',
};

const services = [
  'Støyberegninger for nye og eksisterende anlegg',
  'Støymålinger med spesialutstyr for impulsstøy',
  'Vurdering av ulike våpentyper og kaliber',
  'Beregning av støysoner og påvirkning på naboer',
  'Tiltaksplaner for støyreduksjon',
  'Nabodialog og konfliktløsning',
  'Dokumentasjon for myndighetsgodkjenning',
  'Oppfølging og kvalitetssikring av tiltak',
];

const expertise = [
  {
    title: 'Riflebaner',
    description: 'Støyvurdering for baner med langdistanse skyting, inkludert 300m baner og jaktskytebaner.',
    icon: Target,
  },
  {
    title: 'Pistolbaner',
    description: 'Analyse av kortdistanse skytebaner, både utendørs og innendørs anlegg.',
    icon: Target,
  },
  {
    title: 'Leirduebaner',
    description: 'Spesialvurdering for sporting, skeet og trap med fokus på varierende skuddretninger.',
    icon: Activity,
  },
  {
    title: 'Militære anlegg',
    description: 'Omfattende analyser for forsvarets øvingsområder med tunge våpen.',
    icon: Shield,
  },
];

export default function SkytebanerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Støy fra skytebaner
            </h1>
            <p className="text-xl text-gray-200">
              Vi har spesialkompetanse på støy fra skytebaner og skyteanlegg.
              Med lang erfaring og spesialutstyr leverer vi presise analyser
              og effektive løsninger for støyutfordringer.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Spesialkompetanse på skytestøy
            </h2>
            <p className="text-lg mb-6">
              Støy fra skytebaner er en spesiell utfordring som krever særskilt
              kompetanse og erfaring. Impulsstøy fra skytevåpen har helt andre
              egenskaper enn vanlig støy, og krever spesielle målemetoder og
              beregningsmodeller.
            </p>
            <p className="text-lg mb-6">
              Rieber Prosjekt AS har gjennom mange år bygget opp solid erfaring
              med alle typer skyteanlegg, fra små pistolbaner til store militære
              øvingsfelt. Vi kjenner regelverket, forstår utfordringene og leverer
              løsninger som fungerer i praksis.
            </p>
            <p className="text-lg">
              Vårt arbeid omfatter alt fra støymålinger og beregninger til
              utarbeidelse av komplette tiltaksplaner og oppfølging av
              gjennomføring.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Typer anlegg vi arbeider med
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
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

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Våre tjenester
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

      {/* Methodology */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Vår metodikk
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Målinger
                </h3>
                <p className="text-secondary">
                  Vi benytter spesialutstyr for impulsstøy som fanger opp de
                  raske trykkendringene fra skudd med høy presisjon.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Beregninger
                </h3>
                <p className="text-secondary">
                  Avanserte beregningsmodeller som tar hensyn til terreng,
                  meteorologi og de spesielle egenskapene ved skytestøy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  Tiltak
                </h3>
                <p className="text-secondary">
                  Praktiske og kostnadseffektive løsninger som støyvoller,
                  skjermer, overdekking eller endring av skyteretning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Spesielle hensyn ved skytestøy
            </h2>
            <div className="card">
              <h3 className="text-xl font-serif font-bold mb-4">
                Impulsstøy krever særbehandling
              </h3>
              <p className="text-lg text-secondary mb-4">
                Støy fra skytevåpen er impulsstøy med svært kort varighet og
                høyt lydtrykk. Dette stiller spesielle krav til måling og
                vurdering:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <strong>Raske trykkendringer:</strong> Skudd varer kun
                    millisekunder og krever spesielt måleutstyr
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <strong>Retningsavhengighet:</strong> Lyden varierer
                    kraftig med retning fra våpenet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <strong>Værfølsomhet:</strong> Vind og temperatur påvirker
                    lydutbredelsen betydelig
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <strong>Subjektiv opplevelse:</strong> Impulsstøy oppleves
                    som mer sjenerende enn kontinuerlig støy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Regelverk og grenseverdier
            </h2>
            <p className="text-lg mb-6">
              Vi følger Miljødirektoratets veileder M-2176/2021 for støy fra
              skytebaner og sikrer at alle vurderinger er i henhold til
              gjeldende regelverk.
            </p>
            <div className="bg-white border border-border rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4">
                Grenseverdier for skytestøy
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Aktivitetsnivåer:</p>
                  <ul className="space-y-2 text-secondary">
                    <li>• Lav aktivitet: &lt; 2 dager/uke</li>
                    <li>• Middels aktivitet: 2-4 dager/uke</li>
                    <li>• Høy aktivitet: &gt; 4 dager/uke</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Tiltaksgrenser varierer med:</p>
                  <ul className="space-y-2 text-secondary">
                    <li>• Type våpen og kaliber</li>
                    <li>• Aktivitetsnivå</li>
                    <li>• Tidspunkt for skyting</li>
                    <li>• Områdetype (by/tettsted/spredtbygd)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Støyutfordringer ved deres skytebane?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Vi hjelper skytterlag, kommuner og Forsvaret med å finne gode
            løsninger som ivaretar både aktiviteten og hensynet til naboer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark border-accent hover:border-accent-dark">
              Få en vurdering
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