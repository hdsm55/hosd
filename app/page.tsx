'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Feature } from '@/components/ui/Feature';
import { CTABanner } from '@/components/ui/CTABanner';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        variant="gradient"
        padding="2xl"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-blue-700/5"></div>
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary mb-8">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
            مطور ومصمم ويب محترف
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 leading-tight">
            أهلاً بك في عالم
            <span className="text-brand-primary block">الإبداع الرقمي</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            أطور حلول ويب مبتكرة ومتجاوبة تساعدك على تحقيق أهدافك الرقمية بأعلى
            معايير الجودة والأداء
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="primary" size="xl">
                ابدأ مشروعك الآن
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="xl">
                شاهد أعمالي
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            لماذا تختارني؟
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            خبرة واسعة في تطوير الحلول الرقمية مع التركيز على الجودة والأداء
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            icon={
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="أداء عالي"
            description="مواقع سريعة ومحسنة للبحث مع أفضل ممارسات الأداء"
            variant="centered"
          />

          <Feature
            icon={
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
            title="تصميم متجاوب"
            description="يعمل بشكل مثالي على جميع الأجهزة والشاشات"
            variant="centered"
          />

          <Feature
            icon={
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="جودة مضمونة"
            description="اختبار شامل وضمان الجودة قبل التسليم"
            variant="centered"
          />
        </div>
      </Section>

      {/* Services Preview */}
      <Section variant="gradient" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">خدماتي</h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            حلول شاملة لتطوير وجودك الرقمي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="elevated" hover className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              تطوير المواقع
            </h3>
            <p className="text-brand-muted mb-6">
              مواقع حديثة وسريعة باستخدام أحدث التقنيات
            </p>
            <div className="text-sm text-brand-muted">
              <div>النطاق: 2-8 أسابيع</div>
              <div>السعر: من $2,000</div>
            </div>
          </Card>

          <Card variant="elevated" hover className="text-center">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              تطبيقات الجوال
            </h3>
            <p className="text-brand-muted mb-6">
              تطبيقات هجينة تعمل على iOS و Android
            </p>
            <div className="text-sm text-brand-muted">
              <div>النطاق: 4-12 أسبوع</div>
              <div>السعر: من $5,000</div>
            </div>
          </Card>

          <Card variant="elevated" hover className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              تصميم UI/UX
            </h3>
            <p className="text-brand-muted mb-6">
              تصاميم جذابة وسهلة الاستخدام
            </p>
            <div className="text-sm text-brand-muted">
              <div>النطاق: 1-4 أسابيع</div>
              <div>السعر: من $1,500</div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg">
              عرض جميع الخدمات
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <CTABanner
          title="مستعد لبدء مشروعك؟"
          description="دعنا نناقش احتياجاتك ونطور لك الحل الأمثل"
          primaryAction={{
            label: 'تواصل معي الآن',
            href: '/contact',
            variant: 'primary',
          }}
          secondaryAction={{
            label: 'شاهد أعمالي',
            href: '/work',
            variant: 'outline',
          }}
          variant="gradient"
        />
      </Section>
    </div>
  );
}
