'use client';

import Link from 'next/link';
import { Target, Brain, BarChart3, ChevronRight } from 'lucide-react';

export default function LennyHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Clean Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Study Hub
          </h1>
          <p className="text-slate-500 text-sm">10. Klasse • Abi 2027</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 text-white rounded-lg px-3 py-1.5 text-sm font-medium">
            Level 18
          </div>
          <div className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-sm font-medium">
            1,247 XP
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-xl font-bold text-slate-800">12</p>
          <p className="text-xs text-slate-500">Streak</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-xl font-bold text-slate-800">89%</p>
          <p className="text-xs text-slate-500">Quote</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-xl font-bold text-slate-800">4.2h</p>
          <p className="text-xs text-slate-500">Woche</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-xl font-bold text-slate-800">156</p>
          <p className="text-xs text-slate-500">Fragen</p>
        </div>
      </div>

      {/* Focus Session */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-300 text-sm">Empfohlen</p>
            <p className="font-semibold text-lg">Mathe-Session starten</p>
            <p className="text-slate-400 text-sm">Sinus- & Kosinussatz • 45 min</p>
          </div>
          <Link href="/lenny/mathe/sinuskosinus">
            <div className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 transition-colors">
              <Target className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>

      {/* Fächer - Compact List */}
      <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 mb-6">
        <Link href="/lenny/mathe/sinuskosinus" className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📊</span>
            </div>
            <div>
              <p className="font-medium text-slate-800">Mathematik</p>
              <p className="text-xs text-slate-500">Sinus- & Kosinussatz</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-blue-600 font-medium">0%</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/lenny/mathe/sinuskosinus/grundlagen">
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-sm transition-all">
            <Brain className="w-6 h-6 mx-auto mb-1 text-slate-600" />
            <p className="text-sm font-medium text-slate-700">Grundlagen</p>
          </div>
        </Link>
        <Link href="/lenny/mathe/sinuskosinus/simulation">
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-sm transition-all">
            <BarChart3 className="w-6 h-6 mx-auto mb-1 text-slate-600" />
            <p className="text-sm font-medium text-slate-700">Simulation</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
