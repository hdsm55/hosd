import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  container?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'lg',
  container = true,
  maxWidth = '7xl',
}) => {
  const variants = {
    default: 'bg-white',
    dark: 'bg-brand-dark text-white',
    accent: 'bg-gradient-to-br from-brand-primary to-blue-700 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
  };

  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
    '2xl': 'py-24',
  };

  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <section className={cn(variants[variant], paddings[padding], className)}>
      {container ? (
        <div className={cn('mx-auto px-4', maxWidths[maxWidth])}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
