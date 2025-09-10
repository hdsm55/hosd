import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  container?: boolean;
  containerSize?: 'sm' | 'lg' | 'full';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'lg',
  container = true,
  containerSize = 'lg',
}) => {
  const variants = {
    default: 'bg-white',
    dark: 'bg-ink-900 text-white',
    accent: 'bg-gradient-to-br from-accent-600 to-accent-700 text-white',
    gradient: 'bg-gradient-section',
  };

  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-16 md:py-24',
    xl: 'py-16 md:py-24',
    '2xl': 'py-16 md:py-24',
  };

  const containerSizes = {
    sm: 'container-sm',
    lg: 'container',
    full: 'container-full',
  };

  return (
    <section className={cn(variants[variant], paddings[padding], className)}>
      {container ? (
        <div className={containerSizes[containerSize]}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};
