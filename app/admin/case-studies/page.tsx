'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import AdminLayout from '@/components/admin/AdminLayout';
import { createOrUpdateCaseStudy, deleteCaseStudy } from '@/lib/actions/admin';
import type { Project } from '@/lib/types';

interface CaseStudy {
  id: string;
  project_id: string;
  problem: string;
  approach: string;
  result: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: any;
  lessons_learned?: string;
  created_at: string;
  updated_at: string;
  project?: Project;
}

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(
    null
  );
  const [formData, setFormData] = useState({
    project_id: '',
    problem: '',
    approach: '',
    result: '',
    challenges: [] as string[],
    solutions: [] as string[],
    metrics: '',
    lessons_learned: '',
  });

  const supabase = createClient();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [caseStudiesResult, projectsResult] = await Promise.all([
        supabase
          .from('case_studies')
          .select(
            `
            *,
            project:projects(*)
          `
          )
          .order('created_at', { ascending: false }),
        supabase.from('projects').select('*').order('title'),
      ]);

      if (caseStudiesResult.error) throw caseStudiesResult.error;
      if (projectsResult.error) throw projectsResult.error;

      setCaseStudies(caseStudiesResult.data || []);
      setProjects(projectsResult.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await createOrUpdateCaseStudy({
      ...formData,
      id: editingCaseStudy?.id,
      metrics: formData.metrics ? JSON.parse(formData.metrics) : null,
    });

    if (result.success) {
      setShowForm(false);
      setEditingCaseStudy(null);
      setFormData({
        project_id: '',
        problem: '',
        approach: '',
        result: '',
        challenges: [],
        solutions: [],
        metrics: '',
        lessons_learned: '',
      });
      fetchData();
    } else {
      alert('حدث خطأ: ' + result.error);
    }
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCaseStudy(caseStudy);
    setFormData({
      project_id: caseStudy.project_id,
      problem: caseStudy.problem,
      approach: caseStudy.approach,
      result: caseStudy.result,
      challenges: caseStudy.challenges || [],
      solutions: caseStudy.solutions || [],
      metrics: caseStudy.metrics
        ? JSON.stringify(caseStudy.metrics, null, 2)
        : '',
      lessons_learned: caseStudy.lessons_learned || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف دراسة الحالة هذه؟')) {
      const result = await deleteCaseStudy(id);
      if (result.success) {
        fetchData();
      } else {
        alert('حدث خطأ: ' + result.error);
      }
    }
  };

  const addChallenge = () => {
    const challenge = prompt('أدخل التحدي:');
    if (challenge) {
      setFormData((prev) => ({
        ...prev,
        challenges: [...prev.challenges, challenge],
      }));
    }
  };

  const removeChallenge = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.filter((_, i) => i !== index),
    }));
  };

  const addSolution = () => {
    const solution = prompt('أدخل الحل:');
    if (solution) {
      setFormData((prev) => ({
        ...prev,
        solutions: [...prev.solutions, solution],
      }));
    }
  };

  const removeSolution = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      solutions: prev.solutions.filter((_, i) => i !== index),
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
              دراسات الحالة
            </h1>
            <p className="text-brand-muted mt-2">
              إدارة وعرض جميع دراسات الحالة
            </p>
          </div>
          <Button
            onClick={() => {
              setEditingCaseStudy(null);
              setShowForm(true);
            }}
            variant="primary"
          >
            إضافة دراسة حالة جديدة
          </Button>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} variant="elevated" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    {caseStudy.project?.title || 'مشروع غير محدد'}
                  </h3>
                  <p className="text-brand-muted">
                    {new Date(caseStudy.created_at).toLocaleDateString('ar-SA')}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleEdit(caseStudy)}
                    variant="outline"
                    size="sm"
                  >
                    تعديل
                  </Button>
                  <Button
                    onClick={() => handleDelete(caseStudy.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    حذف
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">المشكلة</h4>
                  <p className="text-brand-muted text-sm">
                    {caseStudy.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">النهج</h4>
                  <p className="text-brand-muted text-sm">
                    {caseStudy.approach}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-dark mb-2">النتيجة</h4>
                  <p className="text-brand-muted text-sm">{caseStudy.result}</p>
                </div>
              </div>

              {caseStudy.challenges && caseStudy.challenges.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-brand-dark mb-2">التحديات</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.challenges.map((challenge, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.solutions && caseStudy.solutions.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-brand-dark mb-2">الحلول</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.solutions.map((solution, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <Card variant="elevated" className="p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              لا توجد دراسات حالة
            </h3>
            <p className="text-brand-muted">ابدأ بإضافة دراسة حالة جديدة</p>
          </Card>
        )}

        {/* Add/Edit Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card
              variant="elevated"
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-brand-dark">
                    {editingCaseStudy
                      ? 'تعديل دراسة الحالة'
                      : 'إضافة دراسة حالة جديدة'}
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      المشروع
                    </label>
                    <select
                      value={formData.project_id}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          project_id: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      required
                    >
                      <option value="">اختر المشروع</option>
                      {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      المشكلة
                    </label>
                    <textarea
                      value={formData.problem}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          problem: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      النهج
                    </label>
                    <textarea
                      value={formData.approach}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          approach: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      النتيجة
                    </label>
                    <textarea
                      value={formData.result}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          result: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      التحديات
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.challenges.map((challenge, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center"
                        >
                          {challenge}
                          <button
                            type="button"
                            onClick={() => removeChallenge(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={addChallenge}
                      variant="outline"
                      size="sm"
                    >
                      إضافة تحدٍ
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      الحلول
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.solutions.map((solution, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center"
                        >
                          {solution}
                          <button
                            type="button"
                            onClick={() => removeSolution(index)}
                            className="ml-2 text-green-500 hover:text-green-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={addSolution}
                      variant="outline"
                      size="sm"
                    >
                      إضافة حل
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      المقاييس (JSON)
                    </label>
                    <textarea
                      value={formData.metrics}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          metrics: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent font-mono text-sm"
                      rows={4}
                      placeholder='{"conversion_rate": "25%", "page_views": "10,000"}'
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      الدروس المستفادة
                    </label>
                    <textarea
                      value={formData.lessons_learned}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          lessons_learned: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      rows={3}
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" variant="primary">
                      {editingCaseStudy
                        ? 'تحديث دراسة الحالة'
                        : 'إضافة دراسة الحالة'}
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
