'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/lernen', label: 'Lernen', emoji: '📚' },
  { href: '/ueben', label: 'Üben', emoji: '🎮' },
  { href: '/test', label: 'Test', emoji: '📝' },
  { href: '/profil', label: 'Profil', emoji: '⭐' },
];

export function TabBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* HULK GRÜN Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 shadow-lg">
        {/* Title */}
        <div className="text-center py-2 md:py-3 border-b border-green-400/30">
          <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">💚 Capitano's Lernwelt</h1>
        </div>
        
        {/* Tabs - GRÖSSER auf Tablet */}
        <div className="flex justify-around items-center py-2 md:py-3 px-2 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  flex flex-col items-center justify-center
                  px-3 md:px-6 lg:px-8
                  py-2 md:py-3
                  rounded-xl md:rounded-2xl
                  min-w-[60px] md:min-w-[80px] lg:min-w-[100px]
                  transition-all duration-200
                  ${active 
                    ? 'bg-white text-green-600 shadow-md scale-105' 
                    : 'text-white/90 hover:bg-white/20'
                  }
                `}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl">{tab.emoji}</span>
                <span className={`text-xs md:text-sm lg:text-base mt-0.5 ${active ? 'font-bold' : 'font-medium'}`}>
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
