'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import type { Metadata } from 'next';

// Note: Metadata export doesn't work with 'use client', so we'll handle SEO differently
// export const metadata: Metadata = {
//   title: 'Kontakt - Rieber Prosjekt AS',
//   description: 'Kontakt Rieber Prosjekt AS for konsultasjon innen akustikk og støy. Tlf: 924 86 555, E-post: post@rpr.no',
// };

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    details: '924 86 555',
    link: 'tel:92486555',
  },
  {
    icon: Mail,
    title: 'E-post',
    details: 'post@rpr.no',
    link: 'mailto:post@rpr.no',
  },
  {
    icon: MapPin,
    title: 'Besøksadresse',
    details: ['Billingstadåsen 18b', '1396 Billingstad'],
    link: null,
  },
  {
    icon: Clock,
    title: 'Kontortid',
    details: ['Mandag - Fredag', '08:00 - 16:00'],
    link: null,
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Takk for din henvendelse. Vi tar kontakt snarest mulig.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Kontakt oss
            </h1>
            <p className="text-xl text-gray-200">
              Vi ser frem til å høre fra deg. Ta kontakt for en uforpliktende
              samtale om hvordan vi kan hjelpe deg med ditt prosjekt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-serif font-bold mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-primary hover:text-primary-dark">
                    {item.details}
                  </a>
                ) : (
                  <div className="text-secondary">
                    {Array.isArray(item.details) ? (
                      item.details.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))
                    ) : (
                      <p>{item.details}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Send oss en melding
            </h2>
            <form onSubmit={handleSubmit} className="card">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Emne *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Velg emne</option>
                    <option value="bygningsakustikk">Bygningsakustikk</option>
                    <option value="stoykartlegging">Støykartlegging</option>
                    <option value="reguleringsplan">Reguleringsplan</option>
                    <option value="skytebane">Skytebane</option>
                    <option value="kurs">Kurs</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Beskriv ditt prosjekt eller spørsmål..."
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Send melding
                </button>
              </div>
              <p className="text-sm text-secondary mt-4">
                * Obligatoriske felt
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Rask respons
                </h3>
                <p className="text-lg text-secondary mb-4">
                  Vi besvarer alle henvendelser innen én virkedag. For hastesaker
                  anbefaler vi å ta kontakt på telefon.
                </p>
                <p className="text-lg text-secondary">
                  Våre konsulenter er tilgjengelige for møter både hos oss,
                  hos dere eller via videomøte.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Fakturainformasjon
                </h3>
                <div className="bg-white border border-border rounded-lg p-6">
                  <p className="font-medium mb-2">Rieber Prosjekt AS</p>
                  <p className="text-secondary">Org.nr: NO 911 678 462 MVA</p>
                  <p className="text-secondary">Billingstadåsen 18b</p>
                  <p className="text-secondary">1396 Billingstad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Finn oss
            </h3>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Billingstadåsen 18b, 1396 Billingstad
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Kart implementeres ved behov)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}