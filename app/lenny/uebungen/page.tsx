'use client';

import Link from 'next/link';
import { Target, ChevronRight } from 'lucide-react';

export default function LennyUebungenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-slate-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Üben</h1>
          <p className="text-slate-500">Trainiere für's Abi</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-slate-700 mb-3">Sinus- & Kosinussatz</h2>
      <div className="space-y-3">
        <Link href="/lenny/mathe/sinuskosinus/grundlagen">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Grundlagen</p>
              <p className="text-xs text-slate-500">Das allgemeine Dreieck</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        <Link href="/lenny/mathe/sinuskosinus/sinussatz">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📐</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Sinussatz</p>
              <p className="text-xs text-slate-500">a/sin(α) = b/sin(β)</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        <Link href="/lenny/mathe/sinuskosinus/kosinussatz">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📏</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Kosinussatz</p>
              <p className="text-xs text-slate-500">c² = a² + b² - 2ab·cos(γ)</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        <Link href="/lenny/mathe/sinuskosinus/entscheidung">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🤔</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Wann welchen Satz?</p>
              <p className="text-xs text-slate-500">SSS, SWS, WSW Entscheidung</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        <Link href="/lenny/mathe/sinuskosinus/textaufgaben">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📝</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Textaufgaben</p>
              <p className="text-xs text-slate-500">Anwendung in der Praxis</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        <Link href="/lenny/mathe/sinuskosinus/simulation">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">Klassenarbeit-Simulation</p>
              <p className="text-xs text-slate-500">45 Minuten • 500 XP</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>
      </div>
    </div>
  );
}
