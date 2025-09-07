'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import AdminLayout from '@/components/admin/AdminLayout';
import { createOrUpdateProject, deleteProject } from '@/lib/actions/admin';
import type { Project } from '@/lib/types';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    short_description: '',
    category: 'web_development',
    technologies: [] as string[],
    client_name: '',
    project_url: '',
    github_url: '',
    featured_image: '',
    gallery_images: [] as string[],
    status: 'completed',
    start_date: '',
    end_date: '',
  });

  const supabase = createClient();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await createOrUpdateProject({
      ...formData,
      id: editingProject?.id,
    });

    if (result.success) {
      setShowForm(false);
      setEditingProject(null);
      setFormData({
        slug: '',
        title: '',
        description: '',
        short_description: '',
        category: 'web_development',
        technologies: [],
        client_name: '',
        project_url: '',
        github_url: '',
        featured_image: '',
        gallery_images: [],
        status: 'completed',
        start_date: '',
        end_date: '',
      });
      fetchProjects();
    } else {
      alert('حدث خطأ: ' + result.error);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      slug: project.slug,
      title: project.title,
      description: project.description,
      short_description: project.short_description || '',
      category: project.category,
      technologies: project.technologies || [],
      client_name: project.client_name || '',
      project_url: project.project_url || '',
      github_url: project.github_url || '',
      featured_image: project.featured_image || '',
      gallery_images: project.gallery_images || [],
      status: project.status,
      start_date: project.start_date || '',
      end_date: project.end_date || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      const result = await deleteProject(id);
      if (result.success) {
        fetchProjects();
      } else {
        alert('حدث خطأ: ' + result.error);
      }
    }
  };

  const addTechnology = () => {
    const tech = prompt('أدخل اسم التقنية:');
    if (tech) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, tech],
      }));
    }
  };

  const removeTechnology = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
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
            <h1 className="text-3xl font-bold text-brand-dark">
              إدارة المشاريع
            </h1>
            <p className="text-brand-muted mt-2">إدارة وعرض جميع المشاريع</p>
          </div>
          <Button
            onClick={() => {
              setEditingProject(null);
              setShowForm(true);
            }}
            variant="primary"
          >
            إضافة مشروع جديد
          </Button>
        </div>

        {/* Projects List */}
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} variant="elevated" className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted mb-4">
                    {project.short_description || project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-brand-muted">
                    <span>الحالة: {project.status}</span>
                    <span>التصنيف: {project.category}</span>
                    {project.client_name && (
                      <span>العميل: {project.client_name}</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleEdit(project)}
                    variant="outline"
                    size="sm"
                  >
                    تعديل
                  </Button>
                  <Button
                    onClick={() => handleDelete(project.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    حذف
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add/Edit Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card
              variant="elevated"
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-brand-dark">
                    {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="الرابط المختصر (Slug)"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          slug: e.target.value,
                        }))
                      }
                      required
                    />
                    <Input
                      label="العنوان"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      الوصف المختصر
                    </label>
                    <textarea
                      value={formData.short_description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          short_description: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      الوصف الكامل
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">
                        التصنيف
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      >
                        <option value="web_development">تطوير المواقع</option>
                        <option value="mobile_app">تطبيقات الجوال</option>
                        <option value="ui_ux_design">تصميم UI/UX</option>
                        <option value="consultation">استشارة تقنية</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">
                        الحالة
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            status: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      >
                        <option value="completed">مكتمل</option>
                        <option value="in_progress">قيد التطوير</option>
                        <option value="on_hold">معلق</option>
                        <option value="cancelled">ملغي</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      التقنيات المستخدمة
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm flex items-center"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechnology(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={addTechnology}
                      variant="outline"
                      size="sm"
                    >
                      إضافة تقنية
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="اسم العميل"
                      value={formData.client_name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          client_name: e.target.value,
                        }))
                      }
                    />
                    <Input
                      label="رابط المشروع"
                      value={formData.project_url}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          project_url: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" variant="primary">
                      {editingProject ? 'تحديث المشروع' : 'إضافة المشروع'}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                    >
                      إلغاء
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
