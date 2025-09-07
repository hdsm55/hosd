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
          'flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary mb-4',
          variant === 'horizontal' && 'mb-0 flex-shrink-0'
        )}
      >
        {icon}
      </div>
      <div className={variant === 'horizontal' ? 'flex-1' : ''}>
        <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
