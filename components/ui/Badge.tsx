'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'hulk' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full';

  const variantClasses = {
    default: 'bg-[var(--color-primary)] text-white',
    success: 'bg-[var(--color-success)] text-white',
    warning: 'bg-[var(--color-warning)] text-white',
    hulk: 'bg-hulk text-white',
    danger: 'bg-[var(--color-danger)] text-white',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] min-h-[18px]',
    md: 'px-2.5 py-1 text-[13px] min-h-[22px]',
  };

  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
};

export default Badge;
