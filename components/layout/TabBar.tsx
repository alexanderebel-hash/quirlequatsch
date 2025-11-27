'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Target, FileText, User } from 'lucide-react';

interface TabBarProps {
  basePath: string;
  childName: string;
  color: 'green' | 'purple' | 'pink' | 'blue';
  emoji?: string;
}

const colorMap = {
  green: {
    active: 'text-green-600',
    inactive: 'text-gray-400',
  },
  purple: {
    active: 'text-purple-600',
    inactive: 'text-gray-400',
  },
  pink: {
    active: 'text-pink-600',
    inactive: 'text-gray-400',
  },
  blue: {
    active: 'text-blue-600',
    inactive: 'text-gray-400',
  },
};

const tabs = [
  { path: '', label: 'Home', icon: Home },
  { path: '/lernen', label: 'Lernen', icon: BookOpen },
  { path: '/uebungen', label: 'Üben', icon: Target },
  { path: '/profil', label: 'Profil', icon: User },
];

export function TabBar({ basePath, color }: TabBarProps) {
  const pathname = usePathname();
  const colors = colorMap[color];

  const isActive = (tabPath: string) => {
    const fullPath = `${basePath}${tabPath}`;
    if (tabPath === '') return pathname === basePath || pathname === `${basePath}/`;
    return pathname.startsWith(fullPath);
  };

  return (
    <nav 
      role="navigation"
      aria-label="Hauptnavigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200"
      style={{ 
        paddingBottom: 'env(safe-area-inset-bottom)',
        height: 'calc(49px + env(safe-area-inset-bottom))'
      }}
    >
      <div className="flex justify-around items-center h-[49px] max-w-2xl mx-auto px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          const Icon = tab.icon;
          
          return (
            <Link
              key={tab.path}
              href={`${basePath}${tab.path}`}
              aria-current={active ? 'page' : undefined}
              aria-label={`${tab.label}${active ? ' (aktuelle Seite)' : ''}`}
              className={`
                flex flex-col items-center justify-center
                px-3 py-1
                min-w-[60px]
                transition-colors duration-200
                ${active ? colors.active : colors.inactive}
              `}
            >
              <Icon className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              <span className="text-[10px] mt-0.5 font-medium">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
