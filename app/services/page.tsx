'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Feature } from '@/components/ui/Feature';
import { CTABanner } from '@/components/ui/CTABanner';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'تطوير المواقع',
      description: 'مواقع حديثة وسريعة باستخدام React, Next.js, و TypeScript',
      features: [
        'تصميم متجاوب لجميع الأجهزة',
        'تحسين محركات البحث (SEO)',
        'أداء عالي وسرعة تحميل',
        'أمان متقدم وحماية البيانات',
        'لوحة تحكم سهلة الاستخدام',
        'دعم فني مستمر',
      ],
      duration: '2-8 أسابيع',
      price: 'من $2,000',
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: 'brand-primary',
    },
    {
      title: 'تطبيقات الجوال',
      description: 'تطبيقات هجينة تعمل على iOS و Android باستخدام React Native',
      features: [
        'تطبيق واحد لجميع المنصات',
        'واجهة مستخدم جذابة',
        'تكامل مع APIs خارجية',
        'إشعارات فورية',
        'عمل offline',
        'نشر في متاجر التطبيقات',
      ],
      duration: '4-12 أسبوع',
      price: 'من $5,000',
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: 'brand-accent',
    },
    {
      title: 'تصميم UI/UX',
      description: 'تصاميم جذابة وسهلة الاستخدام تركز على تجربة المستخدم',
      features: [
        'بحث وتصميم تجربة المستخدم',
        'تصميم واجهات تفاعلية',
        'نظام تصميم متسق',
        'اختبار قابلية الاستخدام',
        'تصميم متجاوب',
        'دليل نمط التصميم',
      ],
      duration: '1-4 أسابيع',
      price: 'من $1,500',
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: 'green-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'الاستشارة',
      description:
        'نناقش احتياجاتك وأهدافك لنفهم المشروع بشكل كامل ونحدد المتطلبات التقنية',
      icon: (
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'التخطيط',
      description:
        'نضع خطة عمل مفصلة مع الجدول الزمني والميزانية ونحدد المراحل التنفيذية',
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'التطوير',
      description:
        'نبدأ في تطوير المشروع مع تحديثات دورية على التقدم وضمان الجودة العالية',
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'التسليم',
      description:
        'نسلم المشروع النهائي مع التدريب والدعم الفني المستمر لضمان النجاح',
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section variant="gradient" padding="xl" className="scroll-mt-20 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            خدماتي
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            أقدم حلول تقنية شاملة ومبتكرة تساعدك على تحقيق أهدافك الرقمية بأعلى
            معايير الجودة والاحترافية
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section padding="xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="elevated"
              hover
              className="relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}/5 rounded-full -translate-y-16 translate-x-16`}
              ></div>

              <div
                className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-6`}
              >
                <div className={`text-${service.color}`}>{service.icon}</div>
              </div>

              <h3 className="text-2xl font-bold text-ink-900 mb-4">
                {service.title}
              </h3>
              <p className="text-muted-500 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-muted-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-surface-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-500">المدة الزمنية:</span>
                  <span className="font-semibold text-ink-900">
                    {service.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-500">السعر:</span>
                  <span className="text-xl font-bold text-accent-600">
                    {service.price}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section variant="gradient" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink mb-4">كيف أعمل؟</h2>
          <p className="text-xl text-muted-500 max-w-2xl mx-auto">
            منهجية عمل منظمة تضمن جودة عالية ونتائج متميزة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 h-full flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink mb-4">
            التقنيات التي أستخدمها
          </h2>
          <p className="text-xl text-muted-500 max-w-2xl mx-auto">
            أحدث التقنيات والأدوات لضمان أفضل النتائج
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            title="Frontend"
            description="React, Next.js, TypeScript, Tailwind CSS, Framer Motion"
            variant="centered"
          />

          <Feature
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            }
            title="Backend"
            description="Node.js, Express, PostgreSQL, Supabase, Prisma"
            variant="centered"
          />

          <Feature
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            title="Tools"
            description="Git, Docker, Vercel, Figma, VS Code"
            variant="centered"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <CTABanner
          title="مستعد لبدء مشروعك؟"
          description="دعنا نناقش احتياجاتك ونطور لك الحل الأمثل"
          primaryAction={{
            label: 'احجز استشارة مجانية',
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
