'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function LeniLernenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Lernen</h1>
          <p className="text-gray-500">Wähle ein Fach</p>
        </div>
      </div>

      <div className="space-y-3">
        <Link href="/leni/bio">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔬</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Biologie</p>
              <p className="text-sm text-gray-500">Zellen-Trainer</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link href="/leni/physik/dichte">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚗️</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Physik</p>
              <p className="text-sm text-gray-500">Volumen, Masse & Dichte</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link href="/leni/franzoesisch">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🇫🇷</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Französisch</p>
              <p className="text-sm text-gray-500">84 Vokabeln - Unité 1</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link href="/leni/sozialkunde">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚖️</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Politische Bildung</p>
              <p className="text-sm text-gray-500">Sozialversicherung, Gerechtigkeit, Armut</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
}
