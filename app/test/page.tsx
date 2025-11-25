'use client';

import Link from 'next/link';
import { Zap, Trophy, Clock, Target } from 'lucide-react';

export default function TestPage() {
  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Test 📝</h1>
        <p className="text-sm text-gray-500">Prüfe dein Wissen!</p>
      </div>

      {/* Zwei große Optionen */}
      <div className="space-y-4">
        {/* Schnell-Test */}
        <Link href="/test/schnell">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white active:scale-[0.98] transition-transform">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl mb-1">Schnell-Test ⚡</p>
                <p className="text-white/80 text-sm mb-3">5 zufällige Fragen aus allen Themen</p>
                <div className="flex gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> ~3 Min
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" /> 5 Fragen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Klassenarbeit */}
        <Link href="/test/klassenarbeit">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white active:scale-[0.98] transition-transform">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl mb-1">Klassenarbeit 🏆</p>
                <p className="text-white/80 text-sm mb-3">20 Fragen wie in der echten Arbeit</p>
                <div className="flex gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> ~15 Min
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" /> 20 Fragen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Letzte Ergebnisse */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Letzte Ergebnisse</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Schnell-Test</span>
            <span className="font-bold text-green-600">4/5 ✓</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Auge Quiz</span>
            <span className="font-bold text-green-600">5/5 ⭐</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Klassenarbeit</span>
            <span className="font-bold text-orange-600">16/20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
