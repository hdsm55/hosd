import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    { name: 'React & Next.js', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'UI/UX Design', level: 80, icon: '🎨' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'DevOps & Cloud', level: 70, icon: '☁️' },
  ];

  const experiences = [
    {
      year: '2023 - الحالي',
      title: 'مطور ويب مستقل',
      company: 'Freelance',
      description:
        'عملت على مشاريع متنوعة مع عملاء من مختلف البلدان، متخصص في تطوير مواقع احترافية وتطبيقات ويب متقدمة',
      achievements: ['50+ مشروع مكتمل', 'عملاء من 15+ دولة', 'تقييم 5 نجوم'],
    },
    {
      year: '2021 - 2023',
      title: 'مطور Frontend متقدم',
      company: 'شركة التقنية المتقدمة',
      description:
        'تطوير واجهات مستخدم حديثة ومتجاوبة باستخدام أحدث التقنيات، قيادة فريق من 5 مطورين',
      achievements: [
        'قيادة فريق تطوير',
        'تحسين الأداء بنسبة 40%',
        'تطبيق معايير الجودة',
      ],
    },
    {
      year: '2019 - 2021',
      title: 'مطور Full Stack',
      company: 'شركة ناشئة',
      description:
        'بناء APIs وقواعد بيانات للمشاريع، تطوير حلول متكاملة من البداية للنهاية',
      achievements: ['بناء 20+ API', 'قواعد بيانات محسنة', 'نظام إدارة متكامل'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    { name: 'Google UX Design Certificate', issuer: 'Google', year: '2022' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2021' },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <Section
        variant="gradient"
        padding="xl"
        className="relative overflow-hidden pt-24 min-h-[60vh] flex items-center"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-surface-50 to-accent-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-accent-600 font-medium shadow-lg border border-accent-100 mb-6">
              <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">
                مطور ومصمم ويب محترف
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.1] mb-6">
              <span className="block mb-2">أهلاً بك في</span>
              <span className="block bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                عالمي التقني
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-ink-600 max-w-3xl mx-auto leading-relaxed font-light">
              مطور ومصمم شغوف بالتكنولوجيا، أسعى دائماً لتقديم حلول مبتكرة
              ومشاريع مميزة تجمع بين الجمال والوظائف العملية
            </p>
          </div>
        </div>
      </Section>

      {/* About Me Section */}
      <Section padding="xl" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-8">
              نبذة عني
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-ink-600 leading-relaxed">
                أنا مطور ويب ومصمم UI/UX مع أكثر من{' '}
                <span className="font-semibold text-accent-600">5 سنوات</span>{' '}
                من الخبرة في مجال التطوير. أعمل على تقديم حلول تقنية مبتكرة
                تساعد الشركات والأفراد على تحقيق أهدافهم الرقمية.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                أؤمن بأهمية التعلم المستمر وأتابع أحدث التقنيات والاتجاهات في
                عالم التطوير. هدفي هو إنشاء تجارب رقمية مميزة تجمع بين الجمال
                والوظائف العملية.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600"
                  >
                    تواصل معي
                  </Button>
                </Link>
                <Link href="/work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-ink-200 text-ink-700 hover:bg-ink-50"
                  >
                    شاهد أعمالي
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink-900 mb-2">حسام</h3>
                <p className="text-accent-600 font-medium mb-4">
                  مطور ويب محترف
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ink-900">50+</div>
                    <div className="text-sm text-ink-600">مشروع مكتمل</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ink-900">5+</div>
                    <div className="text-sm text-ink-600">سنوات خبرة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section padding="xl" className="bg-surface-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            مهاراتي التقنية
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            خبرة واسعة في أحدث التقنيات والأدوات المستخدمة في تطوير الويب
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              variant="elevated"
              hover
              className="p-8 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink-900 mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-surface-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-accent-500 to-accent-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-accent-600 font-semibold">
                {skill.level}%
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section padding="xl" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            مسيرتي المهنية
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            رحلة من التعلم والتطوير إلى قيادة المشاريع التقنية
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} variant="elevated" hover className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-48 flex-shrink-0">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-xl font-semibold text-center">
                    {exp.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ink-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-accent-600 font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-ink-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section padding="xl" className="bg-surface-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            شهاداتي المهنية
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            شهادات معتمدة من كبرى الشركات التقنية العالمية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              variant="elevated"
              hover
              className="p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-ink-600 mb-2">{cert.issuer}</p>
              <p className="text-accent-600 font-semibold">{cert.year}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        padding="xl"
        className="bg-gradient-to-r from-accent-600 to-accent-500"
      >
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            مستعد لبدء مشروعك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            دعنا نناقش احتياجاتك ونطور لك الحل الأمثل
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-accent-600 hover:bg-surface-50 font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                تواصل معي الآن
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300"
              >
                شاهد أعمالي
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
