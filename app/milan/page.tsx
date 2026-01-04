'use client';

import Link from 'next/link';
import { Zap, Trophy, Target, TrendingUp } from 'lucide-react';

export default function MilanHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-6xl md:text-7xl lg:text-8xl block mb-2">🦖</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1">
          Bereit, Capitano?
        </h1>
        <p className="text-green-500 text-lg">
          Los geht's!
        </p>
      </div>

      {/* XP & Level Display */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl px-5 py-3 flex items-center gap-2 shadow-lg">
          <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
          <div className="text-white">
            <p className="text-xs font-medium">XP</p>
            <p className="text-xl font-bold">2,547</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl px-5 py-3 flex items-center gap-2 shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
          <div className="text-white">
            <p className="text-xs font-medium">Level</p>
            <p className="text-xl font-bold">8</p>
          </div>
        </div>
      </div>

      {/* Achievement Streak */}
      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 rounded-3xl p-5 md:p-6 mb-6 text-center border-2 border-green-300 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl">🔥</span>
          <p className="text-2xl font-bold text-green-700">7 Tage in Folge</p>
        </div>
        <p className="text-green-600 font-medium">Super, weiter so!</p>
      </div>

      {/* Mission Buttons */}
      <div className="space-y-4">
        <Link href="/milan/englisch/morning/spiele">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 md:p-8 text-white shadow-xl active:scale-[0.98] transition-transform border-2 border-green-400">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl md:text-5xl">💪</span>
                  <div>
                    <p className="font-bold text-xl md:text-2xl">Übung starten</p>
                    <p className="text-green-100 text-sm md:text-base">Sammle Punkte</p>
                  </div>
                </div>
              </div>
              <Target className="w-8 h-8 text-green-200" />
            </div>
          </div>
        </Link>

        <Link href="/milan/englisch/morning">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-6 md:p-8 text-white shadow-xl active:scale-[0.98] transition-transform border-2 border-blue-400">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl md:text-5xl">🧠</span>
                  <div>
                    <p className="font-bold text-xl md:text-2xl">Neues Thema lernen</p>
                    <p className="text-blue-100 text-sm md:text-base">In the Morning</p>
                  </div>
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-200" />
            </div>
          </div>
        </Link>

        <Link href="/milan/englisch/morning/test">
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl p-6 md:p-8 text-white shadow-xl active:scale-[0.98] transition-transform border-2 border-purple-400">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl md:text-5xl">🏆</span>
                  <div>
                    <p className="font-bold text-xl md:text-2xl">Test starten</p>
                    <p className="text-purple-100 text-sm md:text-base">Klassenarbeit üben</p>
                  </div>
                </div>
              </div>
              <Trophy className="w-8 h-8 text-purple-200" />
            </div>
          </div>
        </Link>
      </div>

      {/* Subject Cards */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-700 mb-3">Deine Fächer</h2>
        <Link href="/milan/englisch">
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-blue-200 active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                🇬🇧
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">English</h3>
                <p className="text-sm text-gray-500">5. Klasse • 1 Unit verfügbar</p>
              </div>
              <span className="text-blue-500 text-2xl">›</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Progress Stats */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border-2 border-green-200">
          <p className="text-2xl font-bold text-green-600">156</p>
          <p className="text-xs text-gray-500">Aufgaben</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border-2 border-amber-200">
          <p className="text-2xl font-bold text-amber-600">24</p>
          <p className="text-xs text-gray-500">Badges</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border-2 border-blue-200">
          <p className="text-2xl font-bold text-blue-600">89%</p>
          <p className="text-xs text-gray-500">Erfolg</p>
        </div>
      </div>

      {/* Level Progress */}
      <div className="mt-6 bg-white rounded-3xl p-5 shadow-sm border-2 border-green-200">
        <div className="flex items-center justify-between mb-3">
          <p className="font-bold text-gray-700 text-lg">Level 8 → Level 9</p>
          <p className="text-sm text-green-600 font-bold">547 / 1000 XP</p>
        </div>
        <div className="h-5 bg-green-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full w-[54.7%]" />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">Noch 453 XP bis Level 9! 🚀</p>
      </div>
    </div>
  );
}
