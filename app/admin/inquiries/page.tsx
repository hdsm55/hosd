'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import { exportInquiriesCSV } from '@/lib/actions/admin';
import type { InquiryData } from '@/lib/types';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const result = await exportInquiriesCSV();
      if (result.success) {
        // Create and download CSV file
        const blob = new Blob([result.csv], {
          type: 'text/csv;charset=utf-8;',
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute(
          'download',
          `inquiries-${new Date().toISOString().split('T')[0]}.csv`
        );
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('حدث خطأ في التصدير: ' + result.error);
      }
    } catch (error) {
      alert('حدث خطأ في التصدير');
    } finally {
      setExporting(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      reviewed: 'bg-yellow-100 text-yellow-800',
      quoted: 'bg-purple-100 text-purple-800',
      in_progress: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getServiceTypeLabel = (type: string) => {
    const labels = {
      web_development: 'تطوير المواقع',
      mobile_app: 'تطبيقات الجوال',
      ui_ux_design: 'تصميم UI/UX',
      consultation: 'استشارة تقنية',
      other: 'أخرى',
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getBudgetLabel = (budget: string) => {
    const labels = {
      under_1k: 'أقل من 1,000$',
      '1k_5k': '1,000$ - 5,000$',
      '5k_10k': '5,000$ - 10,000$',
      '10k_25k': '10,000$ - 25,000$',
      over_25k: 'أكثر من 25,000$',
    };
    return labels[budget as keyof typeof labels] || budget;
  };

  const getTimelineLabel = (timeline: string) => {
    const labels = {
      asap: 'في أقرب وقت ممكن',
      '1_month': 'خلال شهر',
      '3_months': 'خلال 3 أشهر',
      '6_months': 'خلال 6 أشهر',
      flexible: 'مرن',
    };
    return labels[timeline as keyof typeof labels] || timeline;
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-brand-muted">جاري التحميل...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-brand-dark">الاستفسارات</h1>
            <p className="text-brand-muted mt-2">عرض وإدارة جميع الاستفسارات</p>
          </div>
          <Button
            onClick={handleExportCSV}
            variant="primary"
            loading={exporting}
            disabled={exporting}
          >
            {exporting ? 'جاري التصدير...' : 'تصدير CSV'}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card variant="elevated" className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-primary">
                {inquiries.length}
              </p>
              <p className="text-sm text-brand-muted">إجمالي الاستفسارات</p>
            </div>
          </Card>
          <Card variant="elevated" className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {inquiries.filter((i) => i.status === 'new').length}
              </p>
              <p className="text-sm text-brand-muted">جديدة</p>
            </div>
          </Card>
          <Card variant="elevated" className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {inquiries.filter((i) => i.status === 'in_progress').length}
              </p>
              <p className="text-sm text-brand-muted">قيد المتابعة</p>
            </div>
          </Card>
          <Card variant="elevated" className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {inquiries.filter((i) => i.status === 'completed').length}
              </p>
              <p className="text-sm text-brand-muted">مكتملة</p>
            </div>
          </Card>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id} variant="elevated" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">
                    {inquiry.name}
                  </h3>
                  <p className="text-brand-muted">{inquiry.email}</p>
                  {inquiry.phone && (
                    <p className="text-brand-muted">{inquiry.phone}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      inquiry.status
                    )}`}
                  >
                    {inquiry.status}
                  </span>
                  <span className="text-sm text-brand-muted">
                    {new Date(inquiry.created_at).toLocaleDateString('ar-SA')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-brand-dark">
                    نوع الخدمة
                  </p>
                  <p className="text-brand-muted">
                    {getServiceTypeLabel(inquiry.service_type)}
                  </p>
                </div>
                {inquiry.budget_range && (
                  <div>
                    <p className="text-sm font-medium text-brand-dark">
                      الميزانية
                    </p>
                    <p className="text-brand-muted">
                      {getBudgetLabel(inquiry.budget_range)}
                    </p>
                  </div>
                )}
                {inquiry.timeline && (
                  <div>
                    <p className="text-sm font-medium text-brand-dark">
                      الجدول الزمني
                    </p>
                    <p className="text-brand-muted">
                      {getTimelineLabel(inquiry.timeline)}
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-brand-dark mb-2">
                  وصف المشروع
                </p>
                <p className="text-brand-muted bg-gray-50 p-3 rounded-lg">
                  {inquiry.project_description}
                </p>
              </div>

              {inquiry.additional_requirements && (
                <div>
                  <p className="text-sm font-medium text-brand-dark mb-2">
                    المتطلبات الإضافية
                  </p>
                  <p className="text-brand-muted bg-gray-50 p-3 rounded-lg">
                    {inquiry.additional_requirements}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {inquiries.length === 0 && (
          <Card variant="elevated" className="p-12 text-center">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              لا توجد استفسارات
            </h3>
            <p className="text-brand-muted">لم يتم إرسال أي استفسارات بعد</p>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
