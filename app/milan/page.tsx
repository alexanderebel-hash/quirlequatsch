'use client';

import Link from 'next/link';
import { Zap, Flame, ChevronRight, Play, Trophy } from 'lucide-react';

export default function MilanHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🦖</span>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Hey Capitano!</h1>
            <p className="text-gray-500 text-sm">Los geht's!</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-100 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Zap className="w-4 h-4 text-green-600" />
            <span className="font-bold text-green-700 text-sm">2547</span>
          </div>
          <div className="bg-orange-100 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-orange-600 text-sm">7</span>
          </div>
        </div>
      </div>

      {/* Streak-Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 mb-4 text-white flex items-center gap-3">
        <Flame className="w-6 h-6" />
        <div className="flex-1">
          <p className="font-medium text-sm">7 Tage in Folge! 🔥</p>
          <p className="text-orange-100 text-xs">Super, weiter so!</p>
        </div>
      </div>

      {/* HAUPT-CTA: Weiter lernen */}
      <Link href="/milan/englisch/morning">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 mb-6 text-white shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98]">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-green-200 text-xs font-medium mb-1">WEITER LERNEN</p>
              <p className="font-bold text-xl mb-1">🇬🇧 English</p>
              <p className="text-green-200 text-sm">Unit 2: In the Morning</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-[50%]" />
                </div>
                <span className="text-xs font-medium">3/6</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-7 h-7 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Lernpfad */}
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Dein Lernpfad
      </h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        <Link href="/milan/englisch/morning/body">
          <div className="p-3 flex items-center gap-3 hover:bg-gray-50">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">The Body</p>
              <p className="text-xs text-gray-500">Körperteile</p>
            </div>
            <span className="text-green-500 text-xs font-medium">Fertig!</span>
          </div>
        </Link>
        <Link href="/milan/englisch/morning/adjektive">
          <div className="p-3 flex items-center gap-3 hover:bg-gray-50">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">Adjectives</p>
              <p className="text-xs text-gray-500">Beschreibungen</p>
            </div>
            <span className="text-green-500 text-xs font-medium">Fertig!</span>
          </div>
        </Link>
        <Link href="/milan/englisch/morning/have-got">
          <div className="p-3 flex items-center gap-3 hover:bg-gray-50">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">Have Got</p>
              <p className="text-xs text-gray-500">Besitz ausdrücken</p>
            </div>
            <span className="text-green-500 text-xs font-medium">Fertig!</span>
          </div>
        </Link>
        <Link href="/milan/englisch/morning/breakfast">
          <div className="p-3 flex items-center gap-3 hover:bg-gray-50 bg-green-50">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800 text-sm">Breakfast</p>
              <p className="text-xs text-green-600 font-medium">Jetzt lernen!</p>
            </div>
            <ChevronRight className="w-5 h-5 text-green-600" />
          </div>
        </Link>
        <div className="p-3 flex items-center gap-3 opacity-50">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
          <div className="flex-1">
            <p className="font-medium text-gray-500 text-sm">Questions</p>
            <p className="text-xs text-gray-400">Noch gesperrt</p>
          </div>
          <span className="text-lg">🔒</span>
        </div>
        <div className="p-3 flex items-center gap-3 opacity-50">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">6</div>
          <div className="flex-1">
            <p className="font-medium text-gray-500 text-sm">Spiele & Test</p>
            <p className="text-xs text-gray-400">Nach allen Modulen</p>
          </div>
          <span className="text-lg">🔒</span>
        </div>
      </div>

      {/* Level & Stats */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <Trophy className="w-5 h-5 text-amber-500 mx-auto mb-1" />
          <p className="text-lg font-bold text-gray-800">8</p>
          <p className="text-[10px] text-gray-500">Level</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <span className="text-lg">🎯</span>
          <p className="text-lg font-bold text-gray-800">89%</p>
          <p className="text-[10px] text-gray-500">Erfolg</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <span className="text-lg">⭐</span>
          <p className="text-lg font-bold text-gray-800">24</p>
          <p className="text-[10px] text-gray-500">Badges</p>
        </div>
      </div>
    </div>
  );
}
