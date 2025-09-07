# قائمة التحقق بعد التحديث

## ✅ التحقق من الملفات المحدثة

### 0. إعداد التطوير المحلي

- [ ] إنشاء ملف `.env.local` في جذر المشروع
- [ ] إضافة المتغيرات المطلوبة للتطوير المحلي:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xhlbpxpwqttjbfrfnhte.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobGJweHB3cXR0amJmcmZuaHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzU0MjAsImV4cCI6MjA3MjY1MTQyMH0.EaHZib4DCV7-TCyqEhhEJoG5JdDzQUIf8wfvRvNHi_M
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

- [ ] التأكد من عمل التطوير بدون أخطاء

### 1. .env.example

- [ ] يحتوي على `NEXT_PUBLIC_SUPABASE_URL` بالقيمة الصحيحة
- [ ] يحتوي على `NEXT_PUBLIC_SUPABASE_ANON_KEY` بالقيمة الصحيحة
- [ ] يحتوي على `NEXT_PUBLIC_APP_URL` مع رابط Render
- [ ] لا توجد قيم حساسة أو fallbacks

### 2. README.md

- [ ] قسم النشر محدث لـ Render
- [ ] خطوات الربط واضحة
- [ ] متغيرات البيئة مدرجة
- [ ] health check path محدد
- [ ] build/start commands صحيحة

### 3. app/layout.tsx

- [ ] `metadataBase` يستخدم `process.env.NEXT_PUBLIC_APP_URL` مع fallback للتطوير
- [ ] `openGraph.url` يستخدم `process.env.NEXT_PUBLIC_APP_URL` مع fallback للتطوير
- [ ] يعمل في التطوير المحلي بدون أخطاء

### 4. utils/supabase/

- [ ] `client.ts` يستخدم `process.env.NEXT_PUBLIC_SUPABASE_URL!`
- [ ] `client.ts` يستخدم `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!`
- [ ] `server.ts` يستخدم نفس المتغيرات بدون fallbacks

## 🚀 اختبار النشر على Render

### 1. إعداد المستودع

- [ ] رفع الكود إلى GitHub
- [ ] التأكد من أن جميع الملفات محدثة
- [ ] التأكد من عدم وجود ملفات حساسة

### 2. إنشاء خدمة في Render

- [ ] إنشاء Web Service جديد
- [ ] ربط المستودع
- [ ] إعداد الاسم: `husam-personal-site`
- [ ] اختيار Environment: Node
- [ ] تعيين Branch: main

### 3. إعداد Commands

- [ ] Build Command: `npm ci && npm run build`
- [ ] Start Command: `npm run start`
- [ ] Health Check Path: `/`

### 4. متغيرات البيئة

- [ ] `NEXT_PUBLIC_SUPABASE_URL=https://xhlbpxpwqttjbfrfnhte.supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- [ ] `NEXT_PUBLIC_APP_URL=https://husam-personal-site.onrender.com`
- [ ] `NODE_VERSION=20.12.2`

### 5. النشر

- [ ] تشغيل النشر الأول
- [ ] انتظار انتهاء البناء (5-10 دقائق)
- [ ] التحقق من عدم وجود أخطاء في logs
- [ ] الحصول على رابط الموقع

## 🔍 اختبار الموقع المنشور

### 1. الصفحات الأساسية

- [ ] الصفحة الرئيسية (`/`) تحمل بنجاح
- [ ] صفحة الأعمال (`/work`) تعمل
- [ ] صفحة تفاصيل المشروع (`/work/[slug]`) تعمل
- [ ] صفحة الخدمات (`/services`) تعمل
- [ ] صفحة من أنا (`/about`) تعمل
- [ ] صفحة تواصل (`/contact`) تعمل
- [ ] صفحة الآن (`/now`) تعمل

### 2. الوظائف التفاعلية

- [ ] النماذج تعمل (رسالة سريعة + استفسار)
- [ ] التنقل يعمل
- [ ] تبديل اللغة يعمل
- [ ] التصميم متجاوب

### 3. قاعدة البيانات

- [ ] عرض المشاريع من Supabase
- [ ] عرض Case Studies
- [ ] إرسال النماذج يعمل
- [ ] حفظ البيانات في قاعدة البيانات

### 4. SEO وMeta Tags

- [ ] Open Graph يعمل (اختبار في Facebook Debugger)
- [ ] Twitter Cards تعمل
- [ ] Structured Data صحيح
- [ ] Sitemap يعمل (`/sitemap.xml`)
- [ ] Robots.txt يعمل (`/robots.txt`)

### 5. الأداء

- [ ] Lighthouse Score ≥ 90
- [ ] TTFB < 800ms
- [ ] لا توجد أخطاء JavaScript
- [ ] الصور تحمل بسرعة

## 🚨 استكشاف الأخطاء

### مشاكل البناء

- [ ] فحص Render logs للأخطاء
- [ ] التأكد من صحة متغيرات البيئة
- [ ] فحص package.json scripts

### مشاكل قاعدة البيانات

- [ ] فحص اتصال Supabase
- [ ] التأكد من صحة RLS policies
- [ ] فحص البيانات التجريبية

### مشاكل SEO

- [ ] فحص metadataBase في HTML source
- [ ] اختبار Open Graph في Facebook Debugger
- [ ] فحص Structured Data في Google Rich Results Test

## ✅ النجاح

إذا تمت جميع الاختبارات بنجاح:

- [ ] الموقع يعمل على Render
- [ ] جميع الوظائف تعمل
- [ ] SEO محسن
- [ ] الأداء جيد
- [ ] لا توجد أخطاء

**الموقع جاهز للاستخدام! 🎉**
