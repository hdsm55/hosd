import { getDashboardStats } from '@/lib/actions/admin';
import { Card } from '@/components/ui/Card';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default async function AdminDashboard() {
  const statsResult = await getDashboardStats();
  const stats = statsResult.success
    ? statsResult.stats
    : {
        totalLeads: 0,
        totalInquiries: 0,
        totalProjects: 0,
        totalCaseStudies: 0,
      };

  const statCards = [
    {
      title: 'إجمالي العملاء المحتملين',
      value: stats.totalLeads,
      icon: '👥',
      color: 'bg-blue-500',
      href: '/admin/inquiries',
    },
    {
      title: 'إجمالي الاستفسارات',
      value: stats.totalInquiries,
      icon: '📧',
      color: 'bg-green-500',
      href: '/admin/inquiries',
    },
    {
      title: 'إجمالي المشاريع',
      value: stats.totalProjects,
      icon: '💼',
      color: 'bg-purple-500',
      href: '/admin/projects',
    },
    {
      title: 'إجمالي دراسات الحالة',
      value: stats.totalCaseStudies,
      icon: '📋',
      color: 'bg-orange-500',
      href: '/admin/case-studies',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">لوحة التحكم</h1>
          <p className="text-brand-muted mt-2">
            مرحباً بك في لوحة إدارة الموقع
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <Link key={index} href={stat.href}>
              <Card variant="elevated" hover className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-brand-muted">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-brand-dark mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card variant="elevated" className="p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-4">
            إجراءات سريعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/projects">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-medium text-brand-dark">
                      إدارة المشاريع
                    </p>
                    <p className="text-sm text-brand-muted">
                      إضافة أو تعديل المشاريع
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/case-studies">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-medium text-brand-dark">دراسات الحالة</p>
                    <p className="text-sm text-brand-muted">
                      إدارة دراسات الحالة
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/uploads">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📁</span>
                  <div>
                    <p className="font-medium text-brand-dark">إدارة الملفات</p>
                    <p className="text-sm text-brand-muted">
                      رفع وإدارة الملفات
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/inquiries">
              <div className="p-4 border border-gray-200 rounded-xl hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-brand-dark">الاستفسارات</p>
                    <p className="text-sm text-brand-muted">
                      عرض وتصدير الاستفسارات
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
