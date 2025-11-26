'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface TabBarProps {
  basePath: string;
  childName: string;
  color: 'green' | 'purple' | 'pink' | 'blue';
  emoji?: string;
}

const colorMap = {
  green: {
    gradient: 'from-green-600 via-green-500 to-emerald-500',
    active: 'bg-white text-green-600',
    border: 'border-green-400/30',
  },
  purple: {
    gradient: 'from-purple-600 via-violet-500 to-indigo-600',
    active: 'bg-white text-purple-600',
    border: 'border-purple-400/30',
  },
  pink: {
    gradient: 'from-pink-500 via-rose-500 to-pink-600',
    active: 'bg-white text-pink-600',
    border: 'border-pink-400/30',
  },
  blue: {
    gradient: 'from-slate-700 via-slate-600 to-blue-700',
    active: 'bg-white text-slate-700',
    border: 'border-slate-500/30',
  },
};

const tabs = [
  { path: '', label: 'Home', emoji: '🏠' },
  { path: '/lernen', label: 'Lernen', emoji: '📚' },
  { path: '/uebungen', label: 'Üben', emoji: '🎮' },
  { path: '/test', label: 'Test', emoji: '📝' },
  { path: '/profil', label: 'Profil', emoji: '⭐' },
];

export function TabBar({ basePath, childName, color, emoji }: TabBarProps) {
  const pathname = usePathname();
  const colors = colorMap[color];

  const isActive = (tabPath: string) => {
    const fullPath = `${basePath}${tabPath}`;
    if (tabPath === '') return pathname === basePath || pathname === `${basePath}/`;
    return pathname.startsWith(fullPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-gradient-to-r ${colors.gradient} shadow-lg`}>
        {/* Header */}
        <div className={`flex items-center justify-between py-2 md:py-3 px-4 border-b ${colors.border}`}>
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Zurück</span>
          </Link>
          <h1 className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
            {emoji && <span>{emoji}</span>}
            <span>{childName}'s Lernwelt</span>
          </h1>
          <div className="w-16" />
        </div>
        
        {/* Tabs */}
        <div className="flex justify-around items-center py-2 md:py-3 px-2 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const active = isActive(tab.path);
            
            return (
              <Link
                key={tab.path}
                href={`${basePath}${tab.path}`}
                className={`
                  flex flex-col items-center justify-center
                  px-3 md:px-5 lg:px-6
                  py-2 md:py-2.5
                  rounded-xl md:rounded-2xl
                  min-w-[56px] md:min-w-[72px] lg:min-w-[88px]
                  transition-all duration-200
                  ${active 
                    ? `${colors.active} shadow-md scale-105` 
                    : 'text-white/90 hover:bg-white/20'
                  }
                `}
              >
                <span className="text-xl md:text-2xl lg:text-3xl">{tab.emoji}</span>
                <span className={`text-[10px] md:text-xs lg:text-sm mt-0.5 ${active ? 'font-bold' : 'font-medium'}`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
