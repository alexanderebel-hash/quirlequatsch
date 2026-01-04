'use client';

import { Trophy, Zap, Target, Calendar } from 'lucide-react';

export default function LennyProfilPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-4xl">🚀</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Lenny</h1>
        <p className="text-slate-500">10. Klasse • Abi 2027</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-4 text-white">
          <Zap className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">1,247</p>
          <p className="text-slate-300 text-sm">XP gesammelt</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 text-white">
          <Trophy className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">Level 18</p>
          <p className="text-blue-200 text-sm">Aktuelles Level</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-4 text-white">
          <Target className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">89%</p>
          <p className="text-emerald-200 text-sm">Erfolgsquote</p>
        </div>
        <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-4 text-white">
          <Calendar className="w-6 h-6 mb-2" />
          <p className="text-2xl font-bold">12 Tage</p>
          <p className="text-amber-200 text-sm">Streak</p>
        </div>
      </div>

      {/* Current Focus */}
      <h2 className="text-lg font-semibold text-slate-700 mb-3">Aktueller Fokus</h2>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
          <div>
            <p className="font-medium text-slate-800">Mathematik</p>
            <p className="text-xs text-slate-500">Sinus- & Kosinussatz</p>
          </div>
        </div>
        <div className="h-2 bg-slate-100 rounded-full">
          <div className="h-full bg-blue-600 rounded-full w-[35%]" />
        </div>
        <p className="text-xs text-slate-500 mt-2">35% abgeschlossen • 715 XP noch verfügbar</p>
      </div>

      {/* Study Stats */}
      <h2 className="text-lg font-semibold text-slate-700 mb-3">Diese Woche</h2>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-slate-800">4.2h</p>
            <p className="text-xs text-slate-500">Lernzeit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">156</p>
            <p className="text-xs text-slate-500">Aufgaben</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">+23%</p>
            <p className="text-xs text-slate-500">vs. letzte Woche</p>
          </div>
        </div>
      </div>
    </div>
  );
}
