'use client';

import { Trophy, Zap, Target, Calendar } from 'lucide-react';

export default function MilanProfilPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-4xl">🦖</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Milan</h1>
        <p className="text-gray-500">5. Klasse • Capitano</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white">
          <Zap className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">2,547</p>
          <p className="text-green-100 text-sm">XP gesammelt</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 text-white">
          <Trophy className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">Level 8</p>
          <p className="text-amber-100 text-sm">Aktuelles Level</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-4 text-white">
          <Target className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">156</p>
          <p className="text-blue-100 text-sm">Aufgaben gelöst</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-4 text-white">
          <Calendar className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">7 Tage</p>
          <p className="text-red-100 text-sm">Streak</p>
        </div>
      </div>

      {/* Achievements */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Erfolge</h2>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-1">
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-xs text-gray-500">Starter</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-1">
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-xs text-gray-500">7-Tage</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-1">
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-xs text-gray-500">Bücherwurm</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-1">
              <span className="text-2xl">🏆</span>
            </div>
            <p className="text-xs text-gray-500">Champion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
