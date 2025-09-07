'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import type { Project } from '@/lib/types';

export default function WorkPage() {
  // For now, we'll use empty projects array
  // In a real app, you'd fetch this data on the client side or use a different approach
  const projects: Project[] = [];

  const getCategoryLabel = (category: string) => {
    const labels = {
      web_development: 'تطوير المواقع',
      mobile_app: 'تطبيقات الجوال',
      ui_ux_design: 'تصميم UI/UX',
      consultation: 'استشارة تقنية',
      other: 'أخرى',
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      completed: 'مكتمل',
      in_progress: 'قيد التطوير',
      on_hold: 'معلق',
      cancelled: 'ملغي',
    };
    return labels[status as keyof typeof labels] || status;
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section variant="gradient" padding="xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">أعمالي</h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            مجموعة من المشاريع التي عملت عليها، تظهر مهاراتي وخبراتي في التطوير
            والتصميم مع التركيز على الجودة والابتكار
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section padding="xl">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
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
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              لا توجد مشاريع متاحة حالياً
            </h3>
            <p className="text-brand-muted text-lg">
              سيتم إضافة المشاريع قريباً
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                variant="elevated"
                hover
                className="overflow-hidden group"
              >
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-to-br from-brand-primary to-blue-700 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="relative text-white text-center z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {getCategoryIcon(project.category)}
                    </div>
                    <p className="text-sm font-medium opacity-90">
                      {getCategoryLabel(project.category)}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Status and Client */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'in_progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {getStatusLabel(project.status)}
                    </span>
                    {project.client_name && (
                      <span className="text-sm text-brand-muted font-medium">
                        {project.client_name}
                      </span>
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted mb-6 text-sm line-clamp-3 leading-relaxed">
                    {project.short_description || project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link href={`/work/${project.slug}`} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full">
                        عرض التفاصيل
                      </Button>
                    </Link>
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button variant="outline" size="sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          الموقع
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* Stats Section */}
      <Section variant="gradient" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            إحصائيات المشاريع
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            أرقام تعكس جودة العمل والثقة من العملاء
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              50+
            </div>
            <div className="text-brand-muted">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              30+
            </div>
            <div className="text-brand-muted">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">5+</div>
            <div className="text-brand-muted">سنوات خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              100%
            </div>
            <div className="text-brand-muted">رضا العملاء</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
