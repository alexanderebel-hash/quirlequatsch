'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const themen = [
  { id: 'auge', icon: '👁️', title: 'Auge', color: 'bg-blue-100' },
  { id: 'ohr', icon: '👂', title: 'Ohr', color: 'bg-orange-100' },
  { id: 'tiere', icon: '🐘', title: 'Tiere', color: 'bg-green-100' },
  { id: 'haut', icon: '🖐️', title: 'Haut', color: 'bg-purple-100' },
  { id: 'hilfsmittel', icon: '♿', title: 'Hilfsmittel', color: 'bg-teal-100' },
  { id: 'masse-volumen', icon: '⚖️', title: 'Masse', color: 'bg-yellow-100' },
  { id: 'temperatur', icon: '🌡️', title: 'Temperatur', color: 'bg-red-100' },
  { id: 'diagramme', icon: '📊', title: 'Diagramme', color: 'bg-indigo-100' },
];

export default function QuizPage() {
  return (
    <div className="px-4 pt-6">
      <Link href="/ueben">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">❓ Quiz</h1>
      <p className="text-gray-500 mb-6">Wähle ein Thema:</p>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
        <p className="text-purple-800 font-medium">
          💡 Tipp: Quiz hilft dir beim Lernen!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {themen.map((t) => (
          <Link key={t.id} href={`/themen/${t.id}`}>
            <div className={`${t.color} rounded-2xl p-5 text-center active:scale-95 transition-transform`}>
              <span className="text-4xl block mb-2">{t.icon}</span>
              <p className="font-semibold text-gray-900">{t.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
