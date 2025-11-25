'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Gamepad2, ClipboardCheck, User } from 'lucide-react';

const tabs = [
  { href: '/', icon: Home, label: 'Home', color: 'green' },
  { href: '/lernen', icon: BookOpen, label: 'Lernen', color: 'blue' },
  { href: '/ueben', icon: Gamepad2, label: 'Üben', color: 'purple' },
  { href: '/test', icon: ClipboardCheck, label: 'Test', color: 'orange' },
  { href: '/profil', icon: User, label: 'Profil', color: 'gray' },
];

export function TabBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;
          
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                flex flex-col items-center justify-center
                w-16 h-14 rounded-xl
                transition-all duration-200
                ${active 
                  ? 'text-green-600 scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
                }
              `}
            >
              <Icon 
                className={`w-6 h-6 mb-0.5 ${active ? 'stroke-[2.5px]' : ''}`} 
              />
              <span className={`text-[10px] font-medium ${active ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
              {active && (
                <div className="absolute -bottom-0 w-6 h-1 bg-green-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
