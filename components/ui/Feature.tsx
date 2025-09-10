import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: 'default' | 'centered' | 'horizontal';
}

export const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  className = '',
  variant = 'default',
}) => {
  const variants = {
    default: 'text-left',
    centered: 'text-center',
    horizontal: 'flex items-center space-x-4 text-left',
  };

  return (
    <div className={cn(variants[variant], className)}>
      <div
        className={cn(
          'flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-600/10 text-accent-600 mb-4',
          variant === 'horizontal' && 'mb-0 flex-shrink-0'
        )}
      >
        {icon}
      </div>
      <div className={variant === 'horizontal' ? 'flex-1' : ''}>
        <h3 className="text-lg font-semibold text-ink-900 mb-2">{title}</h3>
        <p className="text-muted-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
