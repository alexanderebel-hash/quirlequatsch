'use client';

import Link from 'next/link';
import { ArrowLeft, Calculator, TrendingUp, Target } from 'lucide-react';

export default function LennyMathePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/lenny" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5856D6] bg-opacity-10 rounded-2xl mb-4">
          <span className="text-4xl">📊</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Mathematik
        </h1>
        <p className="text-slate-500">10. Klasse • Abi 2027</p>
      </div>

      {/* Themen */}
      <div className="space-y-3">
        <Link href="/lenny/mathe/sinuskosinus">
          <div className="bg-gradient-to-r from-[#5856D6] to-[#AF52DE] rounded-2xl p-5 text-white hover:shadow-lg transition-shadow active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">Sinus- & Kosinussatz</p>
                <p className="text-white/80 text-sm">Trigonometrie im allgemeinen Dreieck</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/60">6 Module</p>
                <p className="text-sm font-medium">0% Complete</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Weitere Themen (noch nicht verfügbar) */}
        <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-400">Quadratische Funktionen</p>
              <p className="text-slate-400 text-sm">Coming soon...</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-400">Stochastik</p>
              <p className="text-slate-400 text-sm">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
