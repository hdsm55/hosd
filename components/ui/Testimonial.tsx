import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  rating = 5,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-8 shadow-sm border border-surface-200',
        className
      )}
    >
      {/* Rating */}
      {rating > 0 && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'text-amber-400' : 'text-muted-300'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-ink-900 text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent-600/10 flex items-center justify-center mr-4">
            <span className="text-accent-600 font-semibold text-lg">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold text-ink-900">{author.name}</div>
          <div className="text-muted-500 text-sm">
            {author.role}
            {author.company && ` at ${author.company}`}
          </div>
        </div>
      </div>
    </div>
  );
};
