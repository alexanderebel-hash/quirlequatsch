'use client';

import Link from 'next/link';
import { Target, ChevronRight } from 'lucide-react';

export default function MilanUebungenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Üben</h1>
          <p className="text-gray-500">Trainiere dein Wissen</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-3">In the Morning</h2>
      <div className="space-y-3">
        <Link href="/milan/englisch/morning/body">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🫀</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">The Body</p>
              <p className="text-sm text-gray-500">Körperteile lernen</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link href="/milan/englisch/morning/adjektive">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Adjektive</p>
              <p className="text-sm text-gray-500">Adjektive beschreiben</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link href="/milan/englisch/morning/spiele">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Spiele</p>
              <p className="text-sm text-gray-500">Spielerisch üben</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
}
