'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function LennyLernenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-slate-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Lernen</h1>
          <p className="text-slate-500">Wähle ein Thema</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-slate-700 mb-3">Mathematik</h2>
      <div className="space-y-3">
        <Link href="/lenny/mathe/sinuskosinus">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📐</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800">Sinus- & Kosinussatz</p>
              <p className="text-sm text-slate-500">6 Module • Video & Podcast</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </Link>

        {/* Locked topics */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200 flex items-center gap-4 opacity-60">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-600">Quadratische Funktionen</p>
            <p className="text-sm text-slate-400">Kommt bald</p>
          </div>
          <span className="text-xl">🔒</span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200 flex items-center gap-4 opacity-60">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🎲</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-600">Stochastik</p>
            <p className="text-sm text-slate-400">Kommt bald</p>
          </div>
          <span className="text-xl">🔒</span>
        </div>
      </div>
    </div>
  );
}
