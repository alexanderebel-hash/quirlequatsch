'use client';

import Link from 'next/link';
import { Target, ChevronRight } from 'lucide-react';

export default function LeniUebungenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Üben</h1>
          <p className="text-gray-500">Trainiere dein Wissen</p>
        </div>
      </div>

      {/* Biologie */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Biologie</h2>
      <div className="space-y-3 mb-6">
        <Link href="/leni/bio/memory">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Memory</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
        <Link href="/leni/bio/quiz">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">❓</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Quiz</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* Französisch */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Französisch</h2>
      <div className="space-y-3 mb-6">
        <Link href="/leni/franzoesisch/memory">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Memory</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
        <Link href="/leni/franzoesisch/quiz">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">❓</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Quiz</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
        <Link href="/leni/franzoesisch/tippen">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">⌨️</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Tippen</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* Physik */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Physik</h2>
      <div className="space-y-3 mb-6">
        <Link href="/leni/physik/dichte/spiele">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎮</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Spiele</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
        <Link href="/leni/physik/dichte/test">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📝</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Test</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* Sozialkunde */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Politische Bildung</h2>
      <div className="space-y-3">
        <Link href="/leni/sozialkunde/spiele">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎮</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Spiele</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
        <Link href="/leni/sozialkunde/test">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">📝</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Test</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
}
