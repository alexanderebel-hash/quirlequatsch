'use client';

import Link from 'next/link';

const exercises = [
  {
    id: 'memory',
    icon: '🎴',
    title: 'Memory',
    description: 'Finde die passenden Paare',
    color: 'from-green-500 to-emerald-600',
    xp: '+15 XP pro Paar',
  },
  {
    id: 'quiz',
    icon: '❓',
    title: 'Quiz',
    description: 'Multiple Choice Fragen',
    color: 'from-purple-500 to-indigo-600',
    xp: '+10 XP pro Frage',
  },
  {
    id: 'sortieren',
    icon: '🔢',
    title: 'Sortieren',
    description: 'Bringe alles in Reihenfolge',
    color: 'from-blue-500 to-cyan-600',
    xp: '+20 XP pro Übung',
  },
];

const themenListe = [
  { id: 'auge', icon: '👁️' },
  { id: 'ohr', icon: '👂' },
  { id: 'tiere', icon: '🐘' },
  { id: 'haut', icon: '🖐️' },
  { id: 'hilfsmittel', icon: '♿' },
  { id: 'masse-volumen', icon: '⚖️' },
  { id: 'temperatur', icon: '🌡️' },
  { id: 'diagramme', icon: '📊' },
];

export default function UebenPage() {
  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Üben 🎮</h1>
        <p className="text-sm text-gray-500">Wähle eine Übungsart</p>
      </div>

      {/* HULK Tipp */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
        <p className="text-green-800 font-medium">
          💚 HULK sagt: Memory ist super für's Gehirn!
        </p>
      </div>

      {/* Übungsarten */}
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <Link key={exercise.id} href={`/themen/${exercise.id === 'memory' ? 'auge' : exercise.id === 'quiz' ? 'auge' : 'auge'}`}>
            <div className={`bg-gradient-to-r ${exercise.color} rounded-2xl p-5 text-white active:scale-[0.98] transition-transform`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{exercise.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-xl">{exercise.title}</p>
                  <p className="text-white/80 text-sm">{exercise.description}</p>
                  <p className="text-white/60 text-xs mt-1">{exercise.xp}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Themen-Auswahl darunter */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Oder wähle ein Thema:</h2>
        <div className="grid grid-cols-4 gap-3">
          {themenListe.map((thema) => (
            <Link key={thema.id} href={`/themen/${thema.id}`}>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm active:scale-95 transition-transform">
                <span className="text-2xl">{thema.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
