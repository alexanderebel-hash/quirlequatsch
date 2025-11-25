'use client';

import { useEffect, useState } from 'react';
import { Trophy, Flame, Star, Target, Sparkles } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';

export default function ProfilPage() {
  const [mounted, setMounted] = useState(false);
  const { xp, level, streak } = useUserStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const xpForNextLevel = level * 100;
  const xpProgress = mounted ? (xp % 100) : 0;

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
          <span className="text-4xl">💚</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Capitano</h1>
        <p className="text-gray-500">Level {mounted ? level : 1} Lern-Held</p>
      </div>

      {/* XP Progress */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">XP bis Level {(mounted ? level : 1) + 1}</span>
          <span className="font-bold text-green-600">{mounted ? xp : 0} XP</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
            style={{ width: `${xpProgress}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{mounted ? streak : 0}</p>
          <p className="text-xs text-gray-500">Tage Streak</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">3</p>
          <p className="text-xs text-gray-500">Tests bestanden</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">42</p>
          <p className="text-xs text-gray-500">Fragen richtig</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
          <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">8</p>
          <p className="text-xs text-gray-500">Memory Paare</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-bold text-gray-900 mb-3">🏆 Achievements</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 bg-green-50 rounded-xl">
            <span className="text-2xl">🌟</span>
            <div>
              <p className="font-medium text-sm">Erster Schnell-Test</p>
              <p className="text-xs text-gray-500">+50 XP</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-green-50 rounded-xl">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="font-medium text-sm">3-Tage Streak</p>
              <p className="text-xs text-gray-500">+30 XP</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl opacity-50">
            <span className="text-2xl">💎</span>
            <div>
              <p className="font-medium text-sm">100% Klassenarbeit</p>
              <p className="text-xs text-gray-500">Noch nicht freigeschaltet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
