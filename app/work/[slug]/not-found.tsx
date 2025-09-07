import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Card className="p-12 max-w-md mx-auto">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-2xl font-bold text-brand-dark mb-4">
            المشروع غير موجود
          </h1>
          <p className="text-brand-muted mb-8">
            عذراً، لم نتمكن من العثور على المشروع الذي تبحث عنه.
          </p>
          <div className="space-y-4">
            <Link href="/work">
              <Button variant="primary" className="w-full">
                عرض جميع المشاريع
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

