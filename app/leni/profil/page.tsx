'use client';

import { Trophy, Zap, Target, Calendar } from 'lucide-react';

export default function LeniProfilPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-4xl">🦋</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Leni</h1>
        <p className="text-gray-500">7. Klasse • Lillebi</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-4 text-white">
          <Zap className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">847</p>
          <p className="text-purple-100 text-sm">XP gesammelt</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4 text-white">
          <Trophy className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">Level 12</p>
          <p className="text-indigo-100 text-sm">Aktuelles Level</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-4 text-white">
          <Target className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">86%</p>
          <p className="text-pink-100 text-sm">Genauigkeit</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 text-white">
          <Calendar className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">5 Tage</p>
          <p className="text-amber-100 text-sm">Streak</p>
        </div>
      </div>

      {/* Fächer Progress */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Fächer-Fortschritt</h2>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">🔬 Biologie</span>
            <span className="text-sm text-emerald-600">60%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full bg-emerald-500 rounded-full w-[60%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">🇫🇷 Französisch</span>
            <span className="text-sm text-blue-600">45%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full bg-blue-500 rounded-full w-[45%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">⚗️ Physik</span>
            <span className="text-sm text-teal-600">30%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full bg-teal-500 rounded-full w-[30%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">⚖️ Politische Bildung</span>
            <span className="text-sm text-orange-600">25%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full bg-orange-500 rounded-full w-[25%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
