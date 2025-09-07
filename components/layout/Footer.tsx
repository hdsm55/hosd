'use client';

import Link from 'next/link';

interface FooterProps {
  locale?: 'ar' | 'en' | 'tr';
  onLocaleChange?: (locale: 'ar' | 'en' | 'tr') => void;
}

export default function Footer({ locale = 'ar', onLocaleChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content = {
    ar: {
      brand: 'حسام',
      description: 'مطور ومصمم مبدع، أقدم حلول تقنية مبتكرة ومشاريع إبداعية',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات التواصل',
      links: {
        work: 'أعمالي',
        services: 'خدماتي',
        about: 'من أنا',
        contact: 'تواصل',
      },
      copyright: 'جميع الحقوق محفوظة.',
    },
    en: {
      brand: 'Husam',
      description:
        'Creative developer and designer, delivering innovative technical solutions and creative projects',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      links: {
        work: 'Work',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
      },
      copyright: 'All rights reserved.',
    },
    tr: {
      brand: 'Husam',
      description:
        'Yaratıcı geliştirici ve tasarımcı, yenilikçi teknik çözümler ve yaratıcı projeler sunuyorum',
      quickLinks: 'Hızlı Bağlantılar',
      contactInfo: 'İletişim Bilgileri',
      links: {
        work: 'Çalışmalarım',
        services: 'Hizmetler',
        about: 'Hakkımda',
        contact: 'İletişim',
      },
      copyright: 'Tüm hakları saklıdır.',
    },
  };

  const currentContent = content[locale];

  const toggleLocale = () => {
    const locales = ['ar', 'en', 'tr'] as const;
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];
    onLocaleChange?.(newLocale);
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="grid md:grid-cols-4 gap-8"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-brand-accent mb-4">
              {currentContent.brand}
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {currentContent.description}
            </p>

            {/* Language Toggle */}
            <div className="mb-6">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {locale === 'ar'
                    ? 'العربية'
                    : locale === 'en'
                    ? 'English'
                    : 'Türkçe'}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4" dir="ltr">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-accent transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {currentContent.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/work"
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-200"
                >
                  {currentContent.links.work}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-200"
                >
                  {currentContent.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-200"
                >
                  {currentContent.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-brand-accent transition-colors duration-200"
                >
                  {currentContent.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {currentContent.contactInfo}
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                husam@example.com
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +966 50 123 4567
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {locale === 'ar'
                  ? 'الرياض، المملكة العربية السعودية'
                  : locale === 'en'
                  ? 'Riyadh, Saudi Arabia'
                  : 'Riyad, Suudi Arabistan'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {currentContent.brand}.{' '}
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
