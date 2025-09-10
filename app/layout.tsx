import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  personStructuredData,
  organizationStructuredData,
  websiteStructuredData,
} from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  preload: false, // Load conditionally
});

export const metadata: Metadata = {
  title: {
    default: 'حسام - مطور ومصمم ويب',
    template: '%s | حسام - مطور ومصمم ويب',
  },
  description:
    'مطور ومصمم ويب محترف متخصص في تطوير المواقع والتطبيقات. أعرض أعمالي وخدماتي التقنية مع دراسات الحالة التفصيلية.',
  keywords: [
    'مطور ويب',
    'مصمم ويب',
    'تطوير مواقع',
    'تطبيقات جوال',
    'UI/UX',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'حسام' }],
  creator: 'حسام',
  publisher: 'حسام',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'en-US': '/en',
      'tr-TR': '/tr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: ['en_US', 'tr_TR'],
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    title: 'حسام - مطور ومصمم ويب',
    description:
      'مطور ومصمم ويب محترف متخصص في تطوير المواقع والتطبيقات. أعرض أعمالي وخدماتي التقنية مع دراسات الحالة التفصيلية.',
    siteName: 'حسام - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'حسام - مطور ومصمم ويب',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حسام - مطور ومصمم ويب',
    description: 'مطور ومصمم ويب محترف متخصص في تطوير المواقع والتطبيقات.',
    images: ['/og-image.jpg'],
    creator: '@husam_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to Arabic, but this should be dynamic based on user preference
  const locale = 'ar';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={`${inter.className} ${cairo.className}`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
