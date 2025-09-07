# إعداد لوحة الإدارة

## 📋 المتطلبات

1. **Supabase Project**: مشروع Supabase نشط
2. **Environment Variables**: متغيرات البيئة مُعدة بشكل صحيح
3. **Database Schema**: قاعدة البيانات مُعدة مع الجداول والسياسات

## 🚀 خطوات الإعداد

### 1. إعداد قاعدة البيانات

```bash
# تشغيل schema في Supabase SQL Editor
cat supabase/schema.sql
```

### 2. إنشاء المشرف الأول

1. اذهب إلى **Supabase Dashboard** > **Authentication** > **Users**
2. أضف مستخدم جديد أو استخدم حسابك الحالي
3. انسخ **User ID** من جدول المستخدمين
4. اذهب إلى **SQL Editor** وشغل:

```sql
-- استبدل 'your-user-id' و 'your-email@example.com' بالقيم الصحيحة
INSERT INTO profiles (id, email, full_name, is_admin)
VALUES (
  'your-user-id',
  'your-email@example.com',
  'Admin User',
  true
)
ON CONFLICT (id) DO UPDATE SET
  is_admin = true,
  updated_at = NOW();
```

### 3. إعداد Storage Bucket

1. اذهب إلى **Supabase Dashboard** > **Storage**
2. تأكد من وجود bucket باسم `assets`
3. إذا لم يكن موجوداً، أنشئه مع الإعدادات:
   - **Name**: `assets`
   - **Public**: `true`

### 4. اختبار لوحة الإدارة

1. شغل التطبيق: `npm run dev`
2. اذهب إلى: `http://localhost:3000/admin/login`
3. أدخل بريدك الإلكتروني
4. تحقق من بريدك للحصول على رابط تسجيل الدخول
5. انقر على الرابط للوصول إلى لوحة الإدارة

## 🔐 الأمان

### سياسات RLS (Row Level Security)

- **المشاريع**: القراءة عامة، الكتابة للمشرفين فقط
- **دراسات الحالة**: القراءة عامة، الكتابة للمشرفين فقط
- **الاستفسارات**: الإدخال عام، القراءة للمشرفين فقط
- **الملفات**: المشاهدة عامة، الرفع للمشرفين فقط

### التحقق من الصلاحيات

```sql
-- تحقق من أن المستخدم مشرف
SELECT is_admin FROM profiles WHERE id = auth.uid();
```

## 📁 هيكل لوحة الإدارة

```
/admin/
├── login/              # تسجيل الدخول
├── dashboard/          # لوحة التحكم الرئيسية
├── projects/           # إدارة المشاريع
├── case-studies/       # إدارة دراسات الحالة
├── inquiries/          # عرض الاستفسارات
├── uploads/            # إدارة الملفات
└── auth/
    └── callback/       # معالجة تسجيل الدخول
```

## 🛠️ استكشاف الأخطاء

### مشكلة: "غير مصرح لك بالوصول"

**الحل**:
1. تأكد من أن المستخدم موجود في جدول `profiles`
2. تأكد من أن `is_admin = true`
3. تحقق من صحة `User ID`

### مشكلة: "خطأ في رفع الملفات"

**الحل**:
1. تأكد من وجود bucket `assets`
2. تحقق من سياسات Storage
3. تأكد من أن الملف أقل من 10MB

### مشكلة: "لا يمكن الوصول إلى الاستفسارات"

**الحل**:
1. تحقق من سياسات RLS للجدول `inquiries`
2. تأكد من أن المستخدم مشرف
3. تحقق من صحة الاتصال بقاعدة البيانات

## 📞 الدعم

إذا واجهت أي مشاكل:

1. تحقق من **Console** في المتصفح
2. راجع **Supabase Logs**
3. تأكد من صحة متغيرات البيئة
4. تحقق من سياسات RLS في قاعدة البيانات
