'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function MilanLernenPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Lernen</h1>
          <p className="text-gray-500">Wähle ein Thema</p>
        </div>
      </div>

      <div className="space-y-3">
        <Link href="/milan/englisch/morning">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌅</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">In the Morning</p>
              <p className="text-sm text-gray-500">Unit 2 - Vokabeln & Grammatik</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        {/* Locked units */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-dashed border-gray-200 flex items-center gap-4 opacity-60">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🏫</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-600">At School</p>
            <p className="text-sm text-gray-400">Unit 3 - Kommt bald</p>
          </div>
          <span className="text-xl">🔒</span>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border border-dashed border-gray-200 flex items-center gap-4 opacity-60">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">⚽</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-600">Hobbies</p>
            <p className="text-sm text-gray-400">Unit 4 - Kommt bald</p>
          </div>
          <span className="text-xl">🔒</span>
        </div>
      </div>
    </div>
  );
}
