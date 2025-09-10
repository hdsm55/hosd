'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-8">
            مطور ومصمم ويب محترف
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            أهلاً بك في عالم
            <span className="block text-blue-600">الإبداع الرقمي</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            أطور حلول ويب مبتكرة ومتجاوبة تساعدك على تحقيق أهدافك الرقمية بأعلى
            معايير الجودة والأداء
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              ابدأ مشروعك
            </Link>

            <Link
              href="/work"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-md border border-gray-300 transition-colors"
            >
              شاهد أعمالي
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
              <div className="text-gray-600">تقييم نجوم</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختارني؟
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              خبرة واسعة في تطوير الحلول الرقمية مع التركيز على الجودة والأداء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                أداء عالي
              </h3>
              <p className="text-gray-600">
                مواقع سريعة ومحسنة للبحث مع أفضل ممارسات الأداء
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                تصميم متجاوب
              </h3>
              <p className="text-gray-600">
                تطبيقات تعمل بسلاسة على جميع الأجهزة والشاشات
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                جودة مضمونة
              </h3>
              <p className="text-gray-600">
                اختبار شامل وضمان الجودة في كل مرحلة من مراحل التطوير
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            مستعد لبدء مشروعك؟
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            دعنا نعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            تواصل معي الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
