'use client';

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface XPDisplayProps {
  xp: number;
  showGain?: number; // Wenn gesetzt, wird "+X" animiert angezeigt
  color?: 'purple' | 'green' | 'blue' | 'pink';
  size?: 'sm' | 'md' | 'lg';
}

const colorMap = {
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    icon: 'text-purple-600',
    gain: 'text-purple-500',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    icon: 'text-green-600',
    gain: 'text-green-500',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    icon: 'text-blue-600',
    gain: 'text-blue-500',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-700',
    icon: 'text-pink-600',
    gain: 'text-pink-500',
  },
};

const sizeMap = {
  sm: {
    container: 'px-2.5 py-1',
    icon: 'w-3.5 h-3.5',
    text: 'text-sm',
    gain: 'text-xs -top-3',
  },
  md: {
    container: 'px-3 py-1.5',
    icon: 'w-4 h-4',
    text: 'text-base',
    gain: 'text-sm -top-4',
  },
  lg: {
    container: 'px-4 py-2',
    icon: 'w-5 h-5',
    text: 'text-lg',
    gain: 'text-base -top-5',
  },
};

export function XPDisplay({ xp, showGain, color = 'purple', size = 'md' }: XPDisplayProps) {
  const [displayXP, setDisplayXP] = useState(xp);
  const [animatingGain, setAnimatingGain] = useState<number | null>(null);
  const [scale, setScale] = useState(false);

  const colors = colorMap[color];
  const sizes = sizeMap[size];

  // Animate XP counter
  useEffect(() => {
    if (displayXP !== xp) {
      const diff = xp - displayXP;
      const step = Math.ceil(Math.abs(diff) / 10);
      const timer = setInterval(() => {
        setDisplayXP(prev => {
          if (prev < xp) {
            return Math.min(prev + step, xp);
          } else if (prev > xp) {
            return Math.max(prev - step, xp);
          }
          return prev;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [xp, displayXP]);

  // Show gain animation
  useEffect(() => {
    if (showGain && showGain > 0) {
      setAnimatingGain(showGain);
      setScale(true);

      const scaleTimer = setTimeout(() => setScale(false), 200);
      const gainTimer = setTimeout(() => setAnimatingGain(null), 1000);

      return () => {
        clearTimeout(scaleTimer);
        clearTimeout(gainTimer);
      };
    }
  }, [showGain, xp]); // Trigger on xp change too

  return (
    <div className="relative inline-flex">
      <div
        className={`
          ${colors.bg} rounded-full ${sizes.container}
          flex items-center gap-1.5
          transition-transform duration-200
          ${scale ? 'scale-110' : 'scale-100'}
        `}
      >
        <Zap className={`${sizes.icon} ${colors.icon}`} />
        <span className={`font-bold ${colors.text} ${sizes.text} tabular-nums`}>
          {displayXP}
        </span>
      </div>

      {/* Gain animation */}
      {animatingGain !== null && (
        <span
          className={`
            absolute right-0 ${sizes.gain}
            font-bold ${colors.gain}
            animate-bounce
          `}
          style={{
            animation: 'floatUp 1s ease-out forwards',
          }}
        >
          +{animatingGain}
        </span>
      )}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

// Kompakte Version für Header
interface XPHeaderProps {
  xp: number;
  lastGain?: number;
  color?: 'purple' | 'green' | 'blue' | 'pink';
  label?: string;
}

export function XPHeader({ xp, lastGain, color = 'purple', label }: XPHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm text-gray-500">{label}</span>}
      <XPDisplay xp={xp} showGain={lastGain} color={color} size="md" />
    </div>
  );
}
