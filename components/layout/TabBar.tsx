'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, User } from 'lucide-react';

interface TabBarProps {
  basePath: string;
  childName: string;
  color: 'green' | 'purple' | 'pink' | 'blue';
  emoji?: string;
}

const colorMap = {
  green: {
    active: 'text-green-600',
    activeBg: 'bg-green-50',
    inactive: 'text-gray-400',
  },
  purple: {
    active: 'text-purple-600',
    activeBg: 'bg-purple-50',
    inactive: 'text-gray-400',
  },
  pink: {
    active: 'text-pink-600',
    activeBg: 'bg-pink-50',
    inactive: 'text-gray-400',
  },
  blue: {
    active: 'text-blue-600',
    activeBg: 'bg-blue-50',
    inactive: 'text-gray-400',
  },
};

// Vereinfacht auf 3 Tabs: Home, Fächer, Profil
const tabs = [
  { path: '', label: 'Home', icon: Home },
  { path: '/lernen', label: 'Fächer', icon: BookOpen },
  { path: '/profil', label: 'Profil', icon: User },
];

export function TabBar({ basePath, color }: TabBarProps) {
  const pathname = usePathname();
  const colors = colorMap[color];

  const isActive = (tabPath: string) => {
    const fullPath = `${basePath}${tabPath}`;
    if (tabPath === '') return pathname === basePath || pathname === `${basePath}/`;
    // "Fächer" tab ist auch aktiv bei /uebungen oder Fach-Unterseiten
    if (tabPath === '/lernen') {
      return pathname.startsWith(`${basePath}/lernen`) ||
             pathname.startsWith(`${basePath}/uebungen`) ||
             pathname.startsWith(`${basePath}/bio`) ||
             pathname.startsWith(`${basePath}/physik`) ||
             pathname.startsWith(`${basePath}/franzoesisch`) ||
             pathname.startsWith(`${basePath}/sozialkunde`) ||
             pathname.startsWith(`${basePath}/englisch`) ||
             pathname.startsWith(`${basePath}/mathe`);
    }
    return pathname.startsWith(fullPath);
  };

  return (
    <nav
      role="navigation"
      aria-label="Hauptnavigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        height: 'calc(56px + env(safe-area-inset-bottom))'
      }}
    >
      <div className="flex justify-around items-center h-[56px] max-w-md mx-auto px-4">
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
                px-4 py-1.5
                min-w-[72px]
                rounded-xl
                transition-all duration-200
                ${active ? `${colors.active} ${colors.activeBg}` : colors.inactive}
              `}
            >
              <Icon className={`w-6 h-6 ${active ? 'scale-110' : ''} transition-transform`} strokeWidth={active ? 2.5 : 2} aria-hidden="true" />
              <span className={`text-[11px] mt-0.5 ${active ? 'font-semibold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
