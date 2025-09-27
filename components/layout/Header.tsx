'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Bygningsakustikk', href: '/bygningsakustikk' },
  { name: 'Støykartlegging', href: '/stoykartlegging' },
  { name: 'Reguleringsplaner', href: '/reguleringsplaner' },
  { name: 'Skytebaner', href: '/skytebaner' },
  { name: 'Kurs', href: '/kurs' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:92486555" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>924 86 555</span>
            </a>
            <a href="mailto:post@rpr.no" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>post@rpr.no</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            NO 911 678 462 MVA
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="relative">
        <div className="container">
          <div className="flex justify-between items-center py-6">
            {/* Logo/Company name */}
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary m-0">
                  Rieber Prosjekt AS
                </h1>
                <p className="text-xs text-secondary mt-1">
                  Rådgivende ingeniører i akustikk
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-text hover:text-primary transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-text hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-t border-border shadow-lg z-50">
            <div className="container py-4">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-text hover:text-primary transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}