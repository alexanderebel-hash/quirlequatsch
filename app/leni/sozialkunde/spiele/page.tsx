'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SpielePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni/sozialkunde" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-4">
          <span className="text-3xl">🎮</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Interaktive Spiele
        </h1>
        <p className="text-gray-500">Spiele kommen bald!</p>
      </div>

      {/* Lillebi Info */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Lillebi sagt:</p>
            <p className="text-white/90 text-sm">
              Die interaktiven Spiele werden bald hinzugefügt! Bis dahin nutze die Quizze in den einzelnen Modulen.
            </p>
          </div>
        </div>
      </div>

      {/* Geplante Spiele */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">🎯 Geplante Spiele</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Säulen-Zuordnung (Drag & Drop)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Gerechtigkeit-Memory
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Armut-Sortierung
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Karikatur-Analyse (Interaktiv)
          </li>
        </ul>
      </div>

      {/* Alternative */}
      <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
        <p className="text-blue-800 text-sm">
          💡 <strong>Tipp:</strong> Nutze in der Zwischenzeit die Quizze in den drei Modulen, um dein Wissen zu testen!
        </p>
      </div>
    </div>
  );
}
