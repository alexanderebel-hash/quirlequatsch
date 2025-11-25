'use client';

import Link from 'next/link';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const themen = [
  { id: 'auge', icon: '👁️', title: 'Das Auge', color: 'blue', done: true },
  { id: 'ohr', icon: '👂', title: 'Das Ohr', color: 'orange', done: true },
  { id: 'tiere', icon: '🐘', title: 'Tier-Sinne', color: 'green', done: false },
  { id: 'haut', icon: '🖐️', title: 'Die Haut', color: 'purple', done: false },
  { id: 'hilfsmittel', icon: '♿', title: 'Hilfsmittel', color: 'teal', done: false },
  { id: 'masse-volumen', icon: '⚖️', title: 'Masse & Volumen', color: 'yellow', done: true },
  { id: 'temperatur', icon: '🌡️', title: 'Temperatur', color: 'red', done: false },
  { id: 'diagramme', icon: '📊', title: 'Diagramme', color: 'indigo', done: false },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100',
  orange: 'bg-orange-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  teal: 'bg-teal-100',
  yellow: 'bg-yellow-100',
  red: 'bg-red-100',
  indigo: 'bg-indigo-100',
};

export default function LernenPage() {
  const doneCount = themen.filter(t => t.done).length;

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Lernen 📚</h1>
        <p className="text-sm text-gray-500">{doneCount} von 8 Themen abgeschlossen</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
            style={{ width: `${(doneCount / 8) * 100}%` }}
          />
        </div>
      </div>

      {/* Themen Liste */}
      <div className="space-y-3">
        {themen.map((thema) => (
          <Link key={thema.id} href={`/themen/${thema.id}`}>
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${colorMap[thema.color]} flex items-center justify-center text-2xl`}>
                {thema.icon}
              </div>
              
              {/* Title */}
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{thema.title}</p>
                <p className="text-xs text-gray-500">
                  {thema.done ? '✓ Abgeschlossen' : 'Noch zu lernen'}
                </p>
              </div>

              {/* Status */}
              {thema.done ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <ChevronRight className="w-6 h-6 text-gray-300" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
