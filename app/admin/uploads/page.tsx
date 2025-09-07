'use client';

import { useState, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadAsset } from '@/lib/actions/admin';

export default function AdminUploadsPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<{ url: string; path: string; name: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);

        const result = await uploadAsset(formData);

        if (result.success) {
          setUploadedFiles((prev) => [
            ...prev,
            {
              url: result.url,
              path: result.path,
              name: file.name,
            },
          ]);
        } else {
          alert(`خطأ في رفع الملف ${file.name}: ${result.error}`);
        }
      }
    } catch (error) {
      alert('حدث خطأ في رفع الملفات');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ الرابط إلى الحافظة');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">إدارة الملفات</h1>
          <p className="text-brand-muted mt-2">رفع وإدارة الملفات والصور</p>
        </div>

        {/* Upload Section */}
        <Card variant="elevated" className="p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-4">
            رفع ملفات جديدة
          </h2>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-lg font-medium text-brand-dark mb-2">
              اسحب الملفات هنا أو انقر للاختيار
            </h3>
            <p className="text-brand-muted mb-4">
              يدعم الصور والملفات (JPG, PNG, GIF, PDF, DOC, etc.)
            </p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*,.pdf,.doc,.docx,.txt"
            />

            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="primary"
              loading={uploading}
              disabled={uploading}
            >
              {uploading ? 'جاري الرفع...' : 'اختيار الملفات'}
            </Button>
          </div>
        </Card>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <Card variant="elevated" className="p-6">
            <h2 className="text-xl font-bold text-brand-dark mb-4">
              الملفات المرفوعة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-brand-dark truncate">
                      {file.name}
                    </h4>
                    <button
                      onClick={() => copyToClipboard(file.url)}
                      className="text-brand-primary hover:text-brand-primary/80 text-sm"
                    >
                      نسخ الرابط
                    </button>
                  </div>

                  {file.url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                  ) : (
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-4xl">📄</span>
                    </div>
                  )}

                  <div className="text-xs text-brand-muted break-all">
                    {file.url}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Usage Instructions */}
        <Card variant="elevated" className="p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-4">
            تعليمات الاستخدام
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-brand-dark mb-2">
                أنواع الملفات المدعومة:
              </h3>
              <ul className="text-brand-muted space-y-1">
                <li>• الصور: JPG, PNG, GIF, WebP</li>
                <li>• المستندات: PDF, DOC, DOCX, TXT</li>
                <li>• الحد الأقصى: 10MB لكل ملف</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-brand-dark mb-2">
                كيفية الاستخدام:
              </h3>
              <ul className="text-brand-muted space-y-1">
                <li>• انقر على "اختيار الملفات" لرفع ملفات جديدة</li>
                <li>• يمكنك رفع عدة ملفات في نفس الوقت</li>
                <li>• انقر على "نسخ الرابط" لنسخ رابط الملف</li>
                <li>• استخدم الرابط في المشاريع أو دراسات الحالة</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
