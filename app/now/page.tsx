import { Card } from '@/components/ui/Card';

export default function NowPage() {
  const currentActivities = [
    {
      category: 'التطوير',
      items: [
        'عمل على مشروع موقع تجاري إلكتروني',
        'تعلم تقنيات جديدة في React 18',
        'تحسين أداء التطبيقات الحالية',
      ],
    },
    {
      category: 'التصميم',
      items: [
        'تصميم واجهات مستخدم لتطبيق جوال',
        'عمل على نظام تصميم متكامل',
        'دراسة أحدث اتجاهات UI/UX',
      ],
    },
    {
      category: 'التعلم',
      items: [
        'دورة في Next.js 14',
        'قراءة كتب في مجال التطوير',
        'متابعة مؤتمرات تقنية',
      ],
    },
  ];

  const upcomingPlans = [
    'إطلاق موقع شخصي جديد',
    'بدء مشروع تطبيق إدارة المهام',
    'كتابة مقالات تقنية',
    'المشاركة في مشاريع مفتوحة المصدر',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ماذا أعمل الآن؟
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          هذه الصفحة تعرض ما أعمل عليه حالياً وما أخطط له في المستقبل القريب
        </p>
        <p className="text-sm text-gray-500 mt-4">
          آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
        </p>
      </div>

      {/* Current Activities */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">أنشطتي الحالية</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {currentActivities.map((activity) => (
            <Card key={activity.category} className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">
                {activity.category}
              </h3>
              <ul className="space-y-2">
                {activity.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Plans */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">خططي القادمة</h2>
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingPlans.map((plan, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-gray-700">{plan}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Current Status */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">حالتي الحالية</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">متاح للعمل</h3>
            <p className="text-gray-600 mb-4">
              حالياً متاح لاستقبال مشاريع جديدة ومقترحات العمل
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">متاح</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">وقت الاستجابة</h3>
            <p className="text-gray-600 mb-4">
              أستجيب للرسائل خلال 24 ساعة في أيام العمل
            </p>
            <div className="text-sm text-gray-500">
              الأحد - الخميس: 9:00 ص - 6:00 م
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
