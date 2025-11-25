'use client';

import { motion } from 'framer-motion';

interface ProgressProps {
  value: number; // 0-100
  max?: number;
  variant?: 'default' | 'success' | 'hulk';
  size?: 'subtle' | 'prominent';
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const Progress = ({
  value,
  max = 100,
  variant = 'default',
  size = 'subtle',
  showLabel = false,
  label,
  className = '',
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variantClasses = {
    default: 'progress-fill',
    success: 'progress-fill-success',
    hulk: 'progress-fill-hulk',
  };

  const sizeClasses = {
    subtle: 'h-1',
    prominent: 'h-2',
  };

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-footnote text-secondary">{label}</span>}
          {showLabel && (
            <span className="text-footnote text-secondary font-semibold">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`progress-bar ${sizeClasses[size]} bg-[var(--color-secondary-background)]`}>
        <motion.div
          className={`${variantClasses[variant]} ${sizeClasses[size]}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default Progress;
