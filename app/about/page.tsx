import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'DevOps', level: 65 },
  ];

  const experiences = [
    {
      year: '2023 - الحالي',
      title: 'مطور ويب مستقل',
      company: 'Freelance',
      description: 'عملت على مشاريع متنوعة مع عملاء من مختلف البلدان',
    },
    {
      year: '2021 - 2023',
      title: 'مطور Frontend',
      company: 'شركة تقنية',
      description: 'تطوير واجهات مستخدم حديثة ومتجاوبة',
    },
    {
      year: '2019 - 2021',
      title: 'مطور Backend',
      company: 'شركة ناشئة',
      description: 'بناء APIs وقواعد بيانات للمشاريع',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">من أنا</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          مطور ومصمم شغوف بالتكنولوجيا، أسعى دائماً لتقديم حلول مبتكرة ومشاريع
          مميزة
        </p>
      </div>

      {/* About Me Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">نبذة عني</h2>
          <p className="text-gray-600 mb-4">
            أنا مطور ويب ومصمم UI/UX مع أكثر من 5 سنوات من الخبرة في مجال
            التطوير. أعمل على تقديم حلول تقنية مبتكرة تساعد الشركات والأفراد على
            تحقيق أهدافهم.
          </p>
          <p className="text-gray-600 mb-4">
            أؤمن بأهمية التعلم المستمر وأتابع أحدث التقنيات والاتجاهات في عالم
            التطوير. هدفي هو إنشاء تجارب رقمية مميزة تجمع بين الجمال والوظائف
            العملية.
          </p>
        </div>
        <div className="h-80 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">مهاراتي التقنية</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">خبراتي</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-32">
                  <span className="text-primary-600 font-medium">
                    {exp.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

