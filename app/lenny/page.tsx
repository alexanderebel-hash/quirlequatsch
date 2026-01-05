'use client';

import Link from 'next/link';
import { Zap, Flame, ChevronRight, Play, Star } from 'lucide-react';

const modules = [
  { id: 'grundlagen', name: 'Grundlagen', desc: 'Das allgemeine Dreieck', difficulty: 1, done: true, xp: 50 },
  { id: 'sinussatz', name: 'Sinussatz', desc: 'a/sin(α) = b/sin(β)', difficulty: 2, done: false, xp: 100, current: true },
  { id: 'kosinussatz', name: 'Kosinussatz', desc: 'c² = a² + b² - 2ab·cos(γ)', difficulty: 2, done: false, xp: 100 },
  { id: 'entscheidung', name: 'Wann welchen?', desc: 'SSS, SWS, WSW', difficulty: 3, done: false, xp: 150 },
  { id: 'textaufgaben', name: 'Textaufgaben', desc: 'Anwendung', difficulty: 3, done: false, xp: 200 },
  { id: 'simulation', name: 'Klassenarbeit', desc: '45 min Simulation', difficulty: 3, done: false, xp: 500 },
];

export default function LennyHomePage() {
  const currentModule = modules.find(m => m.current) || modules.find(m => !m.done);
  const completedCount = modules.filter(m => m.done).length;
  const progress = Math.round((completedCount / modules.length) * 100);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">Study Hub</h1>
          <p className="text-slate-500 text-sm">10. Klasse • Abi 2027</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-slate-800 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="font-bold text-white text-sm">1247</span>
          </div>
          <div className="bg-orange-100 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-orange-600 text-sm">12</span>
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-3 mb-4 text-white flex items-center gap-3">
        <Flame className="w-6 h-6 text-orange-400" />
        <div className="flex-1">
          <p className="font-medium text-sm">12-Tage-Streak! 🔥</p>
          <p className="text-slate-400 text-xs">Stark! Bleib dran.</p>
        </div>
      </div>

      {/* HAUPT-CTA */}
      {currentModule && (
        <Link href={`/lenny/mathe/sinuskosinus/${currentModule.id}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 mb-6 text-white shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98]">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-blue-200 text-xs font-medium mb-1">WEITER LERNEN</p>
                <p className="font-bold text-xl mb-1">📐 Mathe</p>
                <p className="text-blue-200 text-sm">
                  {currentModule.name} • +{currentModule.xp} XP
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="text-xs font-medium">{completedCount}/{modules.length}</span>
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
      )}

      {/* Module-Übersicht */}
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Sinus- & Kosinussatz
      </h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
        {modules.map((mod, i) => {
          const isLocked = !mod.done && !mod.current && i > 0 && !modules[i - 1].done;

          return mod.current ? (
            <Link key={mod.id} href={`/lenny/mathe/sinuskosinus/${mod.id}`}>
              <div className="p-3 flex items-center gap-3 bg-blue-50 hover:bg-blue-100">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-sm">{mod.name}</p>
                  <p className="text-xs text-blue-600 font-medium">Jetzt lernen!</p>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  {[...Array(mod.difficulty)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </div>
            </Link>
          ) : mod.done ? (
            <Link key={mod.id} href={`/lenny/mathe/sinuskosinus/${mod.id}`}>
              <div className="p-3 flex items-center gap-3 hover:bg-slate-50">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-sm">{mod.name}</p>
                  <p className="text-xs text-slate-500">{mod.desc}</p>
                </div>
                <span className="text-green-500 text-xs font-medium">+{mod.xp} XP</span>
              </div>
            </Link>
          ) : (
            <div key={mod.id} className={`p-3 flex items-center gap-3 ${isLocked ? 'opacity-50' : ''}`}>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-sm font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-600 text-sm">{mod.name}</p>
                <p className="text-xs text-slate-400">{mod.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                {[...Array(mod.difficulty)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current" />
                ))}
              </div>
              {isLocked && <span className="text-sm">🔒</span>}
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-4 gap-2">
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-200">
          <p className="text-lg font-bold text-slate-800">18</p>
          <p className="text-[10px] text-slate-500">Level</p>
        </div>
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-200">
          <p className="text-lg font-bold text-slate-800">89%</p>
          <p className="text-[10px] text-slate-500">Quote</p>
        </div>
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-200">
          <p className="text-lg font-bold text-slate-800">4.2h</p>
          <p className="text-[10px] text-slate-500">Woche</p>
        </div>
        <div className="bg-white rounded-xl p-2 text-center shadow-sm border border-slate-200">
          <p className="text-lg font-bold text-slate-800">156</p>
          <p className="text-[10px] text-slate-500">Fragen</p>
        </div>
      </div>
    </div>
  );
}
