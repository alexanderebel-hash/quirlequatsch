'use client';

import Link from 'next/link';
import { useState } from 'react';

const materials = [
  { name: 'Styropor', density: 0.03, emoji: '📦', floats: true },
  { name: 'Luft', density: 0.0013, emoji: '💨', floats: true },
  { name: 'Holz', density: 0.6, emoji: '🪵', floats: true },
  { name: 'Benzin', density: 0.74, emoji: '⛽', floats: true },
  { name: 'Spiritus', density: 0.8, emoji: '🧪', floats: true },
  { name: 'Öl', density: 0.9, emoji: '🛢️', floats: true },
  { name: 'Wasser', density: 1.0, emoji: '💧', floats: null },
  { name: 'Aluminium', density: 2.7, emoji: '🥫', floats: false },
  { name: 'Eisen', density: 7.9, emoji: '🔩', floats: false },
  { name: 'Silber', density: 10.5, emoji: '🥈', floats: false },
  { name: 'Blei', density: 11.3, emoji: '⚫', floats: false },
  { name: 'Quecksilber', density: 13.6, emoji: '🌡️', floats: false },
  { name: 'Gold', density: 19.3, emoji: '🥇', floats: false },
];

type Filter = 'all' | 'floats' | 'sinks';

export default function StofftabellePage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [sortAsc, setSortAsc] = useState(true);

  const filteredMaterials = materials
    .filter(m => {
      if (filter === 'floats') return m.floats === true;
      if (filter === 'sinks') return m.floats === false;
      return true;
    })
    .sort((a, b) => sortAsc ? a.density - b.density : b.density - a.density);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-yellow-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="text-xl font-bold mt-2">📊 Stoffdichten</h1>
        <p className="text-yellow-100 text-sm">Wichtige Werte zum Merken</p>
      </div>

      {/* Water Reference */}
      <div className="px-4 py-4">
        <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 text-center">
          <span className="text-3xl">💧</span>
          <p className="font-bold text-blue-800 mt-1">Wasser = 1 g/cm³</p>
          <p className="text-blue-600 text-sm">Der Referenzwert! 1 Liter = 1 kg</p>
        </div>
      </div>

      {/* Filter & Sort */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 mb-3">
          {[
            { value: 'all', label: 'Alle' },
            { value: 'floats', label: '🏊 Schwimmt' },
            { value: 'sinks', label: '⬇️ Sinkt' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value as Filter)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === value ? 'bg-amber-500 text-white' : 'bg-white text-gray-600 border'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="w-full py-2 bg-white border rounded-lg text-sm text-gray-600"
        >
          Sortierung: {sortAsc ? 'Leicht → Schwer ↑' : 'Schwer → Leicht ↓'}
        </button>
      </div>

      {/* Materials List */}
      <div className="px-4 space-y-2">
        {filteredMaterials.map((material) => (
          <div 
            key={material.name} 
            className={`bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border ${
              material.density === 1.0 ? 'border-2 border-blue-300 bg-blue-50' : ''
            }`}
          >
            <span className="text-3xl">{material.emoji}</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{material.name}</p>
              <p className="text-sm text-gray-500">
                {material.floats === true && '🏊 Schwimmt'}
                {material.floats === false && '⬇️ Sinkt'}
                {material.floats === null && '— Referenz'}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-amber-600">{material.density}</p>
              <p className="text-xs text-gray-500">g/cm³</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Values to Remember */}
      <div className="px-4 mt-6">
        <div className="bg-purple-100 rounded-xl p-4">
          <p className="font-medium text-purple-800 mb-2">🦋 Diese Werte solltest du kennen:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-purple-700">💧 Wasser: 1,0</p>
            <p className="text-purple-700">🥇 Gold: 19,3</p>
            <p className="text-purple-700">🔩 Eisen: 7,9</p>
            <p className="text-purple-700">🪵 Holz: ~0,6</p>
          </div>
        </div>
      </div>
    </div>
  );
}
