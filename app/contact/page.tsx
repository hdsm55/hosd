'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Toast } from '@/components/ui/Toast';
import { Section } from '@/components/ui/Section';
import {
  addLead,
  addInquiry,
  type LeadData,
  type InquiryData,
} from '@/lib/actions';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  // i18n content
  const content = {
    ar: {
      title: 'تواصل معي',
      subtitle:
        'هل لديك مشروع تريد مناقشته؟ أو تريد معرفة المزيد عن خدماتي؟ لا تتردد في التواصل',
      quickContact: 'أرسل رسالة سريعة',
      projectInquiry: 'استفسار عن مشروع',
      contactInfo: 'معلومات التواصل',
      workingHours: 'ساعات العمل',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف (اختياري)',
        company: 'الشركة (اختياري)',
        message: 'الرسالة',
        serviceType: 'نوع الخدمة',
        budgetRange: 'الميزانية المتوقعة',
        timeline: 'الجدول الزمني',
        projectDescription: 'وصف المشروع',
        additionalRequirements: 'متطلبات إضافية (اختياري)',
        submit: 'إرسال الرسالة',
        submitInquiry: 'إرسال الاستفسار',
        submitting: 'جاري الإرسال...',
        selectService: 'اختر نوع الخدمة',
        selectBudget: 'اختر الميزانية',
        selectTimeline: 'اختر الجدول الزمني',
        serviceOptions: {
          web_development: 'تطوير المواقع',
          mobile_app: 'تطبيقات الجوال',
          ui_ux_design: 'تصميم UI/UX',
          consultation: 'استشارة تقنية',
          other: 'أخرى',
        },
        budgetOptions: {
          under_1k: 'أقل من 1,000$',
          '1k_5k': '1,000$ - 5,000$',
          '5k_10k': '5,000$ - 10,000$',
          '10k_25k': '10,000$ - 25,000$',
          over_25k: 'أكثر من 25,000$',
        },
        timelineOptions: {
          asap: 'في أقرب وقت ممكن',
          '1_month': 'خلال شهر',
          '3_months': 'خلال 3 أشهر',
          '6_months': 'خلال 6 أشهر',
          flexible: 'مرن',
        },
        placeholders: {
          name: 'أدخل اسمك الكامل',
          email: 'example@email.com',
          phone: '+966 50 123 4567',
          company: 'اسم الشركة',
          message: 'اكتب رسالتك هنا...',
          projectDescription: 'اكتب وصفاً مفصلاً لمشروعك...',
          additionalRequirements: 'أي متطلبات أو ملاحظات إضافية...',
        },
        success: 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.',
        error: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        inquirySuccess: 'تم إرسال استفسارك بنجاح! سأتواصل معك قريباً.',
        inquiryError: 'حدث خطأ في إرسال الاستفسار. يرجى المحاولة مرة أخرى.',
      },
      info: {
        email: 'husam@example.com',
        phone: '+966 50 123 4567',
        location: 'الرياض، المملكة العربية السعودية',
        hours: {
          weekdays: 'الأحد - الخميس',
          friday: 'الجمعة',
          saturday: 'السبت',
          weekdaysTime: '9:00 ص - 6:00 م',
          fridayTime: 'مغلق',
          saturdayTime: '10:00 ص - 4:00 م',
        },
      },
    },
    en: {
      title: 'Contact Me',
      subtitle:
        'Do you have a project you want to discuss? Or want to know more about my services? Feel free to get in touch',
      quickContact: 'Send Quick Message',
      projectInquiry: 'Project Inquiry',
      contactInfo: 'Contact Information',
      workingHours: 'Working Hours',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number (Optional)',
        company: 'Company (Optional)',
        message: 'Message',
        serviceType: 'Service Type',
        budgetRange: 'Expected Budget',
        timeline: 'Timeline',
        projectDescription: 'Project Description',
        additionalRequirements: 'Additional Requirements (Optional)',
        submit: 'Send Message',
        submitInquiry: 'Send Inquiry',
        submitting: 'Sending...',
        selectService: 'Select Service Type',
        selectBudget: 'Select Budget',
        selectTimeline: 'Select Timeline',
        serviceOptions: {
          web_development: 'Web Development',
          mobile_app: 'Mobile Apps',
          ui_ux_design: 'UI/UX Design',
          consultation: 'Technical Consultation',
          other: 'Other',
        },
        budgetOptions: {
          under_1k: 'Under $1,000',
          '1k_5k': '$1,000 - $5,000',
          '5k_10k': '$5,000 - $10,000',
          '10k_25k': '$10,000 - $25,000',
          over_25k: 'Over $25,000',
        },
        timelineOptions: {
          asap: 'As soon as possible',
          '1_month': 'Within 1 month',
          '3_months': 'Within 3 months',
          '6_months': 'Within 6 months',
          flexible: 'Flexible',
        },
        placeholders: {
          name: 'Enter your full name',
          email: 'example@email.com',
          phone: '+966 50 123 4567',
          company: 'Company name',
          message: 'Write your message here...',
          projectDescription: 'Write a detailed description of your project...',
          additionalRequirements: 'Any additional requirements or notes...',
        },
        success:
          'Your message has been sent successfully! I will contact you soon.',
        error: 'An error occurred while sending the message. Please try again.',
        inquirySuccess:
          'Your inquiry has been sent successfully! I will contact you soon.',
        inquiryError:
          'An error occurred while sending the inquiry. Please try again.',
      },
      info: {
        email: 'husam@example.com',
        phone: '+966 50 123 4567',
        location: 'Riyadh, Saudi Arabia',
        hours: {
          weekdays: 'Sunday - Thursday',
          friday: 'Friday',
          saturday: 'Saturday',
          weekdaysTime: '9:00 AM - 6:00 PM',
          fridayTime: 'Closed',
          saturdayTime: '10:00 AM - 4:00 PM',
        },
      },
    },
    tr: {
      title: 'Benimle İletişime Geçin',
      subtitle:
        'Tartışmak istediğiniz bir projeniz var mı? Yoksa hizmetlerim hakkında daha fazla bilgi mi almak istiyorsunuz? İletişime geçmekten çekinmeyin',
      quickContact: 'Hızlı Mesaj Gönder',
      projectInquiry: 'Proje Sorgusu',
      contactInfo: 'İletişim Bilgileri',
      workingHours: 'Çalışma Saatleri',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta Adresi',
        phone: 'Telefon Numarası (İsteğe Bağlı)',
        company: 'Şirket (İsteğe Bağlı)',
        message: 'Mesaj',
        serviceType: 'Hizmet Türü',
        budgetRange: 'Beklenen Bütçe',
        timeline: 'Zaman Çizelgesi',
        projectDescription: 'Proje Açıklaması',
        additionalRequirements: 'Ek Gereksinimler (İsteğe Bağlı)',
        submit: 'Mesaj Gönder',
        submitInquiry: 'Sorgu Gönder',
        submitting: 'Gönderiliyor...',
        selectService: 'Hizmet Türünü Seçin',
        selectBudget: 'Bütçe Seçin',
        selectTimeline: 'Zaman Çizelgesi Seçin',
        serviceOptions: {
          web_development: 'Web Geliştirme',
          mobile_app: 'Mobil Uygulamalar',
          ui_ux_design: 'UI/UX Tasarım',
          consultation: 'Teknik Danışmanlık',
          other: 'Diğer',
        },
        budgetOptions: {
          under_1k: "$1,000'ın Altında",
          '1k_5k': '$1,000 - $5,000',
          '5k_10k': '$5,000 - $10,000',
          '10k_25k': '$10,000 - $25,000',
          over_25k: "$25,000'ın Üzerinde",
        },
        timelineOptions: {
          asap: 'En kısa sürede',
          '1_month': '1 ay içinde',
          '3_months': '3 ay içinde',
          '6_months': '6 ay içinde',
          flexible: 'Esnek',
        },
        placeholders: {
          name: 'Adınızı ve soyadınızı girin',
          email: 'example@email.com',
          phone: '+966 50 123 4567',
          company: 'Şirket adı',
          message: 'Mesajınızı buraya yazın...',
          projectDescription: 'Projenizin detaylı açıklamasını yazın...',
          additionalRequirements: 'Herhangi bir ek gereksinim veya not...',
        },
        success:
          'Mesajınız başarıyla gönderildi! Yakında sizinle iletişime geçeceğim.',
        error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
        inquirySuccess:
          'Sorgunuz başarıyla gönderildi! Yakında sizinle iletişime geçeceğim.',
        inquiryError:
          'Sorgu gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      },
      info: {
        email: 'husam@example.com',
        phone: '+966 50 123 4567',
        location: 'Riyad, Suudi Arabistan',
        hours: {
          weekdays: 'Pazar - Perşembe',
          friday: 'Cuma',
          saturday: 'Cumartesi',
          weekdaysTime: '09:00 - 18:00',
          fridayTime: 'Kapalı',
          saturdayTime: '10:00 - 16:00',
        },
      },
    },
  };

  // Default to Arabic for now
  const t = content.ar;

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const leadData: LeadData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      source: 'contact_form',
    };

    const result = await addLead(leadData);

    if (result.success) {
      showToast(t.form.success, 'success');
      (e.target as HTMLFormElement).reset();
    } else {
      showToast(t.form.error, 'error');
    }

    setIsSubmitting(false);
  };

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const inquiryData: InquiryData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service_type: formData.get('service_type') as InquiryData['service_type'],
      budget_range: formData.get('budget_range') as InquiryData['budget_range'],
      timeline: formData.get('timeline') as InquiryData['timeline'],
      project_description: formData.get('project_description') as string,
      additional_requirements: formData.get(
        'additional_requirements'
      ) as string,
    };

    const result = await addInquiry(inquiryData);

    if (result.success) {
      showToast(t.form.inquirySuccess, 'success');
      (e.target as HTMLFormElement).reset();
    } else {
      showToast(t.form.inquiryError, 'error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Hero Section */}
      <Section variant="gradient" padding="xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">{t.title}</h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </Section>

      {/* Forms Section */}
      <Section padding="xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Contact Form */}
          <Card variant="elevated" padding="lg">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">
              {t.quickContact}
            </h2>
            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <Input
                label={t.form.name}
                name="name"
                type="text"
                required
                placeholder={t.form.placeholders.name}
                icon={
                  <svg
                    className="w-5 h-5"
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
                }
              />

              <Input
                label={t.form.email}
                name="email"
                type="email"
                required
                placeholder={t.form.placeholders.email}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />

              <Input
                label={t.form.phone}
                name="phone"
                type="tel"
                placeholder={t.form.placeholders.phone}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              />

              <Input
                label={t.form.company}
                name="company"
                type="text"
                placeholder={t.form.placeholders.company}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                }
              />

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200 placeholder:text-brand-muted"
                  placeholder={t.form.placeholders.message}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? t.form.submitting : t.form.submit}
              </Button>
            </form>
          </Card>

          {/* Project Inquiry Form */}
          <Card variant="elevated" padding="lg">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">
              {t.projectInquiry}
            </h2>
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <Input
                label={t.form.name}
                name="name"
                type="text"
                required
                placeholder={t.form.placeholders.name}
              />

              <Input
                label={t.form.email}
                name="email"
                type="email"
                required
                placeholder={t.form.placeholders.email}
              />

              <Input
                label={t.form.phone}
                name="phone"
                type="tel"
                placeholder={t.form.placeholders.phone}
              />

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.serviceType}
                </label>
                <select
                  name="service_type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                  required
                >
                  <option value="">{t.form.selectService}</option>
                  {Object.entries(t.form.serviceOptions).map(
                    ([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.budgetRange}
                </label>
                <select
                  name="budget_range"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">{t.form.selectBudget}</option>
                  {Object.entries(t.form.budgetOptions).map(
                    ([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.timeline}
                </label>
                <select
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">{t.form.selectTimeline}</option>
                  {Object.entries(t.form.timelineOptions).map(
                    ([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.projectDescription}
                </label>
                <textarea
                  name="project_description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200 placeholder:text-brand-muted"
                  placeholder={t.form.placeholders.projectDescription}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  {t.form.additionalRequirements}
                </label>
                <textarea
                  name="additional_requirements"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200 placeholder:text-brand-muted"
                  placeholder={t.form.placeholders.additionalRequirements}
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? t.form.submitting : t.form.submitInquiry}
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Contact Information */}
      <Section variant="gradient" padding="xl">
        <div className="grid md:grid-cols-2 gap-12">
          <Card variant="elevated" padding="lg">
            <h2 className="text-2xl font-bold mb-6">{t.contactInfo}</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">
                    البريد الإلكتروني
                  </p>
                  <p className="text-brand-muted">{t.info.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">الهاتف</p>
                  <p className="text-brand-muted">{t.info.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">الموقع</p>
                  <p className="text-brand-muted">{t.info.location}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="elevated" padding="lg">
            <h2 className="text-2xl font-bold mb-6">{t.workingHours}</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-brand-dark">
                  {t.info.hours.weekdays}
                </span>
                <span className="text-brand-muted">
                  {t.info.hours.weekdaysTime}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-brand-dark">
                  {t.info.hours.friday}
                </span>
                <span className="text-brand-muted">
                  {t.info.hours.fridayTime}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-brand-dark">
                  {t.info.hours.saturday}
                </span>
                <span className="text-brand-muted">
                  {t.info.hours.saturdayTime}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
