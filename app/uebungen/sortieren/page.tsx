'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SortingGame } from '@/components/learning/SortingGame';
import { sortingExercises } from '@/lib/data/exercises';

const sortierungen = [
  { id: 'auge-lichtweg', icon: '👁️', title: 'Weg des Lichts', color: 'bg-blue-100' },
  { id: 'ohr-schallweg', icon: '👂', title: 'Weg des Schalls', color: 'bg-orange-100' },
  { id: 'haut-schichten', icon: '🖐️', title: 'Hautschichten', color: 'bg-purple-100' },
  { id: 'temperatur-sortieren', icon: '🌡️', title: 'Temperaturen', color: 'bg-red-100' },
  { id: 'masse-einheiten', icon: '⚖️', title: 'Masse-Einheiten', color: 'bg-yellow-100' },
  { id: 'volumen-einheiten', icon: '🥤', title: 'Volumen-Einheiten', color: 'bg-cyan-100' },
  { id: 'hoerbereich', icon: '🔊', title: 'Hörbereich', color: 'bg-green-100' },
];

export default function SortierenPage() {
  const [selected, setSelected] = useState<string | null>(null);
  
  const data = selected ? sortingExercises[selected as keyof typeof sortingExercises] : null;

  // Wenn Sortierung gewählt → Spiel anzeigen
  if (selected && data) {
    return (
      <div className="px-4 pt-6">
        <button 
          onClick={() => setSelected(null)} 
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Andere Übung wählen</span>
        </button>
        <SortingGame 
          title={data.title}
          instruction={data.instruction}
          items={data.items}
          correctOrder={data.correctOrder}
          xpReward={data.xpReward}
        />
      </div>
    );
  }

  // Übungs-Auswahl anzeigen
  return (
    <div className="px-4 pt-6">
      <Link href="/ueben">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">🔢 Sortieren</h1>
      <p className="text-gray-500 mb-6">Bringe alles in die richtige Reihenfolge:</p>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
        <p className="text-blue-800 font-medium">
          🎯 Sortier-Übungen helfen dir, Abläufe zu verstehen!
        </p>
      </div>

      <div className="space-y-3">
        {sortierungen.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`w-full ${s.color} rounded-2xl p-4 flex items-center gap-4 active:scale-[0.98] transition-transform`}
          >
            <span className="text-3xl">{s.icon}</span>
            <span className="font-semibold text-gray-900">{s.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
