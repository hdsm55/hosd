'use server';

import { createClient } from '@/utils/supabase/server';
import { requireAdmin } from './auth';
import { revalidatePath } from 'next/cache';

// Upload Asset
export async function uploadAsset(formData: FormData) {
  await requireAdmin();

  const supabase = createClient();
  const file = formData.get('file') as File;

  if (!file) {
    return { success: false, error: 'لم يتم تحديد ملف' };
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `assets/${fileName}`;

  const { error } = await supabase.storage
    .from('assets')
    .upload(filePath, file);

  if (error) {
    return { success: false, error: error.message };
  }

  const { data } = supabase.storage
    .from('assets')
    .getPublicUrl(filePath);

  revalidatePath('/admin/uploads');
  return { success: true, url: data.publicUrl, path: filePath };
}

// Project CRUD
export async function createOrUpdateProject(data: {
  id?: string;
  slug: string;
  title: string;
  description: string;
  short_description?: string;
  category: string;
  technologies: string[];
  client_name?: string;
  project_url?: string;
  github_url?: string;
  featured_image?: string;
  gallery_images?: string[];
  status: string;
  start_date?: string;
  end_date?: string;
}) {
  await requireAdmin();

  const supabase = createClient();

  if (data.id) {
    // Update existing project
    const { error } = await supabase
      .from('projects')
      .update(data)
      .eq('id', data.id);

    if (error) {
      return { success: false, error: error.message };
    }
  } else {
    // Create new project
    const { error } = await supabase
      .from('projects')
      .insert(data);

    if (error) {
      return { success: false, error: error.message };
    }
  }

  revalidatePath('/admin/projects');
  revalidatePath('/work');
  return { success: true };
}

export async function deleteProject(id: string) {
  await requireAdmin();

  const supabase = createClient();

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/work');
  return { success: true };
}

// Case Study CRUD
export async function createOrUpdateCaseStudy(data: {
  id?: string;
  project_id: string;
  problem: string;
  approach: string;
  result: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: any;
  lessons_learned?: string;
}) {
  await requireAdmin();

  const supabase = createClient();

  if (data.id) {
    // Update existing case study
    const { error } = await supabase
      .from('case_studies')
      .update(data)
      .eq('id', data.id);

    if (error) {
      return { success: false, error: error.message };
    }
  } else {
    // Create new case study
    const { error } = await supabase
      .from('case_studies')
      .insert(data);

    if (error) {
      return { success: false, error: error.message };
    }
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/work');
  return { success: true };
}

export async function deleteCaseStudy(id: string) {
  await requireAdmin();

  const supabase = createClient();

  const { error } = await supabase
    .from('case_studies')
    .delete()
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/case-studies');
  revalidatePath('/work');
  return { success: true };
}

// Export Inquiries CSV
export async function exportInquiriesCSV() {
  await requireAdmin();

  const supabase = createClient();

  const { data: inquiries, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  // Convert to CSV
  const headers = [
    'ID',
    'الاسم',
    'البريد الإلكتروني',
    'الهاتف',
    'نوع الخدمة',
    'الميزانية',
    'الجدول الزمني',
    'وصف المشروع',
    'المتطلبات الإضافية',
    'الحالة',
    'تاريخ الإنشاء'
  ];

  const csvRows = [
    headers.join(','),
    ...inquiries.map(inquiry => [
      inquiry.id,
      `"${inquiry.name}"`,
      `"${inquiry.email}"`,
      `"${inquiry.phone || ''}"`,
      `"${inquiry.service_type}"`,
      `"${inquiry.budget_range || ''}"`,
      `"${inquiry.timeline || ''}"`,
      `"${inquiry.project_description.replace(/"/g, '""')}"`,
      `"${(inquiry.additional_requirements || '').replace(/"/g, '""')}"`,
      `"${inquiry.status}"`,
      `"${new Date(inquiry.created_at).toLocaleDateString('ar-SA')}"`
    ].join(','))
  ];

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  return { success: true, csv: csvContent };
}

// Get Dashboard Stats
export async function getDashboardStats() {
  await requireAdmin();

  const supabase = createClient();

  const [leadsResult, inquiriesResult, projectsResult, caseStudiesResult] = await Promise.all([
    supabase.from('leads').select('id', { count: 'exact' }),
    supabase.from('inquiries').select('id', { count: 'exact' }),
    supabase.from('projects').select('id', { count: 'exact' }),
    supabase.from('case_studies').select('id', { count: 'exact' })
  ]);

  return {
    success: true,
    stats: {
      totalLeads: leadsResult.count || 0,
      totalInquiries: inquiriesResult.count || 0,
      totalProjects: projectsResult.count || 0,
      totalCaseStudies: caseStudiesResult.count || 0,
    }
  };
}
