'use client';

import { useUserStore } from '@/lib/store/userStore';
import { Flame, Sparkles, Trophy } from 'lucide-react';

export function Header() {
  const { xp, level, streak } = useUserStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between
                       bg-white/80 backdrop-blur-xl border-b border-black/5
                       supports-[backdrop-filter]:bg-white/60">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">🎮</span>
        <div>
          <h1 className="text-headline text-black">Capitano's Lernwelt</h1>
          <p className="text-caption">Bereit für die Klassenarbeit!</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-callout font-medium text-orange-600">{streak}</span>
        </div>
        
        {/* Level */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50">
          <Trophy className="w-4 h-4 text-purple-500" />
          <span className="text-callout font-medium text-purple-600">Lvl {level}</span>
        </div>
        
        {/* XP */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50">
          <Sparkles className="w-4 h-4 text-green-500" />
          <span className="text-callout font-medium text-green-600">{xp} XP</span>
        </div>
      </div>
    </header>
  );
}
