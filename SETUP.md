# إعداد المشروع

## خطوات الإعداد السريع:

### 1. إنشاء ملف `.env.local` في جذر المشروع:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xhlbpxpwqttjbfrfnhte.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobGJweHB3cXR0amJmcmZuaHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzU0MjAsImV4cCI6MjA3MjY1MTQyMH0.EaHZib4DCV7-TCyqEhhEJoG5JdDzQUIf8wfvRvNHi_M

```

### 2. إعداد قاعدة البيانات:

1. افتح [Supabase Dashboard](https://supabase.com/dashboard)
2. اختر مشروعك: `xhlbpxpwqttjbfrfnhte`
3. اذهب إلى **SQL Editor**
4. انسخ محتوى ملف `supabase/schema.sql` والصقه
5. اضغط **Run** لتنفيذ الجداول والسياسات

### 3. إعداد قاعدة البيانات:

- فتح SQL Editor في Supabase Dashboard
- نسخ محتوى ملف `supabase/schema.sql` وتنفيذه
- نسخ محتوى ملف `supabase/seed.sql` وتنفيذه (للبيانات التجريبية)

### 4. تشغيل المشروع:

```bash
npm install
npm run dev
```

### 5. اختبار النماذج:

- افتح `http://localhost:3000/contact`
- جرب إرسال رسالة سريعة
- جرب إرسال استفسار عن مشروع
- تحقق من ظهور الإشعارات
- تحقق من حفظ البيانات في Supabase

### 6. اختبار صفحة الأعمال:

- افتح `http://localhost:3000/work`
- تحقق من عرض المشاريع
- جرب النقر على "عرض التفاصيل"
- تحقق من صفحة تفاصيل المشروع
- تحقق من عرض Case Study

## التحقق من البيانات:

1. في Supabase Dashboard
2. اذهب إلى **Table Editor**
3. ستجد جدولين: `leads` و `inquiries`
4. تحقق من البيانات المحفوظة

## ملاحظات الأمان:

- ✅ RLS مفعل على جميع الجداول
- ✅ أي شخص يمكنه إرسال leads/inquiries
- ✅ فقط المستخدمين المسجلين يمكنهم قراءة البيانات
- ✅ Validation على مستوى قاعدة البيانات
