'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface CTABannerProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  };
  secondaryAction?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  };
  variant?: 'default' | 'gradient' | 'dark';
  className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-white border border-surface-200',
    gradient: 'bg-gradient-to-r from-accent-600 to-accent-700 text-white',
    dark: 'bg-ink-900 text-white',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-8 md:p-12 text-center',
        variants[variant],
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 text-muted-500 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant={primaryAction.variant || 'primary'} size="lg" asChild>
          <a href={primaryAction.href}>{primaryAction.label}</a>
        </Button>

        {secondaryAction && (
          <Button
            variant={secondaryAction.variant || 'outline'}
            size="lg"
            asChild
          >
            <a href={secondaryAction.href}>{secondaryAction.label}</a>
          </Button>
        )}
      </div>
    </div>
  );
};
