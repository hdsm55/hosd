'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';

interface WorkPageProps {
  locale?: 'ar' | 'en' | 'tr';
}

export default function WorkPage({ locale = 'ar' }: WorkPageProps) {
  // For now, we'll use empty projects array
  // In a real app, you'd fetch this data on the client side or use a different approach
  const projects: Project[] = [];

  const content = {
    ar: {
      hero: {
        title: 'أعمالي',
        description:
          'مجموعة من المشاريع التي طورتها بتقنيات حديثة وأفكار إبداعية',
      },
      stats: {
        title: 'إحصائيات المشاريع',
        description: 'نظرة عامة على إنجازاتي في التطوير والتصميم',
      },
    },
    en: {
      hero: {
        title: 'My Work',
        description:
          'A collection of projects I developed with modern technologies and creative ideas',
      },
      stats: {
        title: 'Project Statistics',
        description: 'An overview of my achievements in development and design',
      },
    },
    tr: {
      hero: {
        title: 'Çalışmalarım',
        description:
          'Modern teknolojiler ve yaratıcı fikirlerle geliştirdiğim projeler koleksiyonu',
      },
      stats: {
        title: 'Proje İstatistikleri',
        description:
          'Geliştirme ve tasarım alanındaki başarılarımın genel bakışı',
      },
    },
  };

  const currentContent = content[locale];
  const isRTL = locale === 'ar';

  const getCategoryLabel = (category: string) => {
    const labels = {
      ar: {
        web_development: 'تطوير المواقع',
        mobile_app: 'تطبيقات الجوال',
        ui_ux_design: 'تصميم UI/UX',
        consultation: 'استشارة تقنية',
        other: 'أخرى',
      },
      en: {
        web_development: 'Web Development',
        mobile_app: 'Mobile Apps',
        ui_ux_design: 'UI/UX Design',
        consultation: 'Tech Consultation',
        other: 'Other',
      },
      tr: {
        web_development: 'Web Geliştirme',
        mobile_app: 'Mobil Uygulamalar',
        ui_ux_design: 'UI/UX Tasarım',
        consultation: 'Teknoloji Danışmanlığı',
        other: 'Diğer',
      },
    };
    return (
      labels[locale][category as keyof (typeof labels)[typeof locale]] ||
      category
    );
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      ar: {
        completed: 'مكتمل',
        in_progress: 'قيد التطوير',
        on_hold: 'معلق',
        cancelled: 'ملغي',
      },
      en: {
        completed: 'Completed',
        in_progress: 'In Progress',
        on_hold: 'On Hold',
        cancelled: 'Cancelled',
      },
      tr: {
        completed: 'Tamamlandı',
        in_progress: 'Devam Ediyor',
        on_hold: 'Beklemede',
        cancelled: 'İptal Edildi',
      },
    };
    return (
      labels[locale][status as keyof (typeof labels)[typeof locale]] || status
    );
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      web_development: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      mobile_app: (
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
      ),
      ui_ux_design: (
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      consultation: (
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      other: (
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    };
    return icons[category as keyof typeof icons] || icons.other;
  };

  // Arrow icon that respects RTL direction
  const ArrowIcon = () => (
    <svg
      className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <Section variant="gradient" padding="xl" className="scroll-mt-20 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {currentContent.hero.description}
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section padding="xl">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-surface-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-ink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">
              لا توجد مشاريع متاحة حالياً
            </h3>
            <p className="text-muted-500 text-lg">سيتم إضافة المشاريع قريباً</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm border border-surface-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="aspect-[16/9] rounded-t-2xl overflow-hidden">
                  <Image
                    src="/api/placeholder/800/450"
                    alt={`${project.title} project screenshot`}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Meta */}
                  <div className="mb-3">
                    <span className="text-xs font-medium text-accent-600 uppercase tracking-wide">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink-900 mb-3 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.short_description || project.description}
                  </p>

                  {/* Case Study Button */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium text-sm transition-colors duration-200"
                  >
                    <span>Case Study</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Stats Section */}
      <Section variant="gradient" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ink-900 mb-4">
            إحصائيات المشاريع
          </h2>
          <p className="text-xl text-muted-500 max-w-2xl mx-auto">
            أرقام تعكس جودة العمل والثقة من العملاء
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">50+</div>
            <div className="text-muted-500">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">30+</div>
            <div className="text-muted-500">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">5+</div>
            <div className="text-muted-500">سنوات خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">100%</div>
            <div className="text-muted-500">رضا العملاء</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
