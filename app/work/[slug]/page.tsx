import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getProjectBySlug } from '@/lib/projects';
import { projectStructuredData } from '@/lib/structured-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const projectResult = await getProjectBySlug(params.slug);

  if (!projectResult.success || !projectResult.data) {
    return {
      title: 'المشروع غير موجود',
    };
  }

  const project = projectResult.data;

  return {
    title: project.title,
    description: project.short_description || project.description,
    openGraph: {
      title: project.title,
      description: project.short_description || project.description,
      images: project.featured_image
        ? [
            {
              url: project.featured_image,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.short_description || project.description,
      images: project.featured_image ? [project.featured_image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectResult = await getProjectBySlug(params.slug);

  if (!projectResult.success || !projectResult.data) {
    notFound();
  }

  const project = projectResult.data;

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

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData(project)),
        }}
      />

      {/* Hero Section */}
      <Section variant="accent" padding="xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {getCategoryLabel(project.category)}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  زيارة الموقع
                </Button>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-primary"
                >
                  عرض الكود
                </Button>
              </a>
            )}
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  نظرة عامة على المشروع
                </h2>
                <div className="prose prose-lg max-w-none text-brand-muted">
                  <p>{project.description}</p>
                </div>
              </Card>

              {/* Case Study */}
              {project.case_study && (
                <div className="space-y-8">
                  {/* Problem */}
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xl">⚠️</span>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark">
                        المشكلة
                      </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-brand-muted">
                      <p>{project.case_study.problem}</p>
                    </div>
                  </Card>

                  {/* Approach */}
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xl">🔧</span>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark">
                        الحل
                      </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-brand-muted">
                      <p>{project.case_study.approach}</p>
                    </div>
                  </Card>

                  {/* Result */}
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xl">✅</span>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark">
                        النتائج
                      </h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-brand-muted">
                      <p>{project.case_study.result}</p>
                    </div>
                  </Card>

                  {/* Metrics */}
                  {project.case_study.metrics && (
                    <Card className="p-8">
                      <h2 className="text-2xl font-bold text-brand-dark mb-6">
                        المؤشرات الرئيسية
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(project.case_study.metrics).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="text-center p-4 bg-brand-primary/5 rounded-lg"
                            >
                              <div className="text-3xl font-bold text-brand-primary mb-2">
                                {value}
                              </div>
                              <div className="text-brand-muted capitalize">
                                {key.replace(/_/g, ' ')}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </Card>
                  )}

                  {/* Lessons Learned */}
                  {project.case_study.lessons_learned && (
                    <Card className="p-8">
                      <h2 className="text-2xl font-bold text-brand-dark mb-6">
                        الدروس المستفادة
                      </h2>
                      <div className="prose prose-lg max-w-none text-brand-muted">
                        <p>{project.case_study.lessons_learned}</p>
                      </div>
                    </Card>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  معلومات المشروع
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-brand-muted">
                      الحالة
                    </span>
                    <div className="mt-1">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'in_progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                  </div>

                  {project.client_name && (
                    <div>
                      <span className="text-sm font-medium text-brand-muted">
                        العميل
                      </span>
                      <p className="text-brand-dark font-medium">
                        {project.client_name}
                      </p>
                    </div>
                  )}

                  {project.start_date && (
                    <div>
                      <span className="text-sm font-medium text-brand-muted">
                        تاريخ البداية
                      </span>
                      <p className="text-brand-dark">
                        {new Date(project.start_date).toLocaleDateString(
                          'ar-SA'
                        )}
                      </p>
                    </div>
                  )}

                  {project.end_date && (
                    <div>
                      <span className="text-sm font-medium text-brand-muted">
                        تاريخ الانتهاء
                      </span>
                      <p className="text-brand-dark">
                        {new Date(project.end_date).toLocaleDateString('ar-SA')}
                      </p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Technologies */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  التقنيات المستخدمة
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Back to Work */}
              <Card className="p-6">
                <Link href="/work">
                  <Button variant="outline" className="w-full">
                    ← العودة إلى الأعمال
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
