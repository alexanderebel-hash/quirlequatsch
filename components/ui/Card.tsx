'use client';

import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  variant?: 'default' | 'grouped';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, variant = 'default', padding = 'md', className = '', ...props }, ref) => {
    const baseClasses = 'card';
    const hoverClasses = hover ? 'card-hover cursor-pointer' : '';
    
    const variantClasses = {
      default: 'bg-card',
      grouped: 'bg-grouped',
    };
    
    const paddingClasses = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };
    
    const classes = [
      baseClasses,
      hoverClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className,
    ].filter(Boolean).join(' ');

    if (hover) {
      const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any;
      return (
        <motion.div
          ref={ref}
          className={classes}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          {...restProps}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
