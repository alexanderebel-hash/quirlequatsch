'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, Sparkles, Flame, Trophy, Zap } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { xp, level, streak, updateStreak } = useUserStore();

  useEffect(() => {
    setMounted(true);
    updateStreak();
  }, [updateStreak]);

  const daysUntilTest = 2;

  return (
    <div className="px-4 pt-6 pb-4">
      {/* Header - Kompakt */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hey Capitano! 👋</h1>
          <p className="text-sm text-gray-500">
            Noch <span className="text-green-600 font-bold">{daysUntilTest} Tage</span> bis zur Arbeit
          </p>
        </div>
        <div className="flex items-center gap-2">
          {mounted && streak > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 rounded-full">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600">{streak}</span>
            </div>
          )}
          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-sm font-bold text-green-600">{mounted ? xp : 0}</span>
          </div>
        </div>
      </div>

      {/* HULK Motivation */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 mb-6 text-white">
        <div className="flex items-center gap-3">
          <span className="text-4xl">💚</span>
          <div>
            <p className="font-bold text-lg">HULK glaubt an dich!</p>
            <p className="text-green-100 text-sm">Zeig der Klassenarbeit, wer der Boss ist! 💪</p>
          </div>
        </div>
      </div>

      {/* 2 Große Buttons - Hauptaktionen */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link href="/test/schnell">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white active:scale-[0.98] transition-transform">
            <Zap className="w-8 h-8 mb-2" />
            <p className="font-bold text-lg">Schnell-Test</p>
            <p className="text-orange-100 text-xs">5 zufällige Fragen</p>
          </div>
        </Link>
        
        <Link href="/test/klassenarbeit">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-5 text-white active:scale-[0.98] transition-transform">
            <Trophy className="w-8 h-8 mb-2" />
            <p className="font-bold text-lg">Klassenarbeit</p>
            <p className="text-purple-100 text-xs">Alle Themen üben</p>
          </div>
        </Link>
      </div>

      {/* Fortschritt - Kompakte Karte */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-gray-900">Dein Fortschritt</p>
          <p className="text-2xl font-bold text-green-600">42%</p>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
            style={{ width: '42%' }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">3 von 8 Themen abgeschlossen</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <p className="text-2xl font-bold text-blue-600">{mounted ? level : 1}</p>
          <p className="text-xs text-gray-500">Level</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <p className="text-2xl font-bold text-purple-600">31</p>
          <p className="text-xs text-gray-500">Fragen</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
          <p className="text-2xl font-bold text-orange-600">8</p>
          <p className="text-xs text-gray-500">Paare</p>
        </div>
      </div>
    </div>
  );
}
