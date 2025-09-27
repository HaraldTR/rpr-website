import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rieber Prosjekt AS - Rådgivende ingeniører i akustikk",
  description: "Rieber Prosjekt AS er et konsulentfirma som utfører oppdrag innen bygningsakustikk, støykartlegging, reguleringsplaner og skytebaner. Sentral godkjenning tiltaksklasse 3.",
  keywords: "akustikk, bygningsakustikk, støykartlegging, reguleringsplaner, skytebaner, lydforhold, vibrasjoner",
  authors: [{ name: "Rieber Prosjekt AS" }],
  creator: "Rieber Prosjekt AS",
  publisher: "Rieber Prosjekt AS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rieber Prosjekt AS - Rådgivende ingeniører i akustikk",
    description: "Konsulentfirma som utfører oppdrag innen bygningsakustikk, støykartlegging, reguleringsplaner og skytebaner.",
    url: "https://www.rpr.no",
    siteName: "Rieber Prosjekt AS",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb-NO">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}