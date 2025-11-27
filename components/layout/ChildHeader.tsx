'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface ChildHeaderProps {
  basePath: string;
  childName: string;
  color: 'green' | 'purple' | 'pink' | 'blue';
  emoji?: string;
}

const colorMap = {
  green: 'text-green-600',
  purple: 'text-purple-600',
  pink: 'text-pink-600',
  blue: 'text-blue-600',
};

export function ChildHeader({ childName, color, emoji }: ChildHeaderProps) {
  const textColor = colorMap[color];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200"
      style={{ 
        paddingTop: 'env(safe-area-inset-top)',
        height: 'calc(44px + env(safe-area-inset-top))'
      }}
    >
      <div className="flex items-center justify-between h-[44px] px-4">
        {/* Back Button */}
        <Link 
          href="/" 
          className={`flex items-center gap-1 ${textColor} hover:opacity-70 transition-opacity`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium hidden md:inline">LernBoost</span>
        </Link>

        {/* Title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 font-semibold text-gray-900 text-base flex items-center gap-1.5">
          {emoji && <span className="text-lg">{emoji}</span>}
          <span>{childName}'s Lernwelt</span>
        </h1>

        {/* Spacer for symmetry */}
        <div className="w-16"></div>
      </div>
    </header>
  );
}
