'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  locale?: 'ar' | 'en' | 'tr';
  onLocaleChange?: (locale: 'ar' | 'en' | 'tr') => void;
}

export default function Navbar({ locale = 'ar', onLocaleChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    ar: [
      { name: 'الرئيسية', href: '/' },
      { name: 'أعمالي', href: '/work' },
      { name: 'خدماتي', href: '/services' },
      { name: 'من أنا', href: '/about' },
      { name: 'تواصل', href: '/contact' },
      { name: 'الآن', href: '/now' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'Work', href: '/work' },
      { name: 'Services', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Now', href: '/now' },
    ],
    tr: [
      { name: 'Ana Sayfa', href: '/' },
      { name: 'Çalışmalarım', href: '/work' },
      { name: 'Hizmetler', href: '/services' },
      { name: 'Hakkımda', href: '/about' },
      { name: 'İletişim', href: '/contact' },
      { name: 'Şimdi', href: '/now' },
    ],
  };

  const toggleLocale = () => {
    const locales = ['ar', 'en', 'tr'] as const;
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];
    onLocaleChange?.(newLocale);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-brand-primary"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            حسام
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-8"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {navigation[locale].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div
            className="hidden md:flex items-center space-x-4"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <button
              onClick={toggleLocale}
              className="text-brand-muted hover:text-brand-primary transition-colors duration-200 font-medium"
            >
              {locale === 'ar' ? 'EN' : locale === 'en' ? 'TR' : 'AR'}
            </button>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                {locale === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-brand-muted hover:text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-gray-200"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex flex-col space-y-4">
              {navigation[locale].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brand-muted hover:text-brand-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLocale}
                  className="text-brand-muted hover:text-brand-primary transition-colors duration-200 font-medium"
                >
                  {locale === 'ar' ? 'EN' : 'AR'}
                </button>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm">
                    {locale === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
