'use client';

import Link from 'next/link';

const modules = [
  {
    id: 'body',
    title: 'The Body',
    subtitle: 'Körperteile lernen',
    icon: '🦶',
    color: 'from-orange-400 to-amber-400',
    href: '/milan/englisch/morning/body',
    xp: '+15 XP',
    status: 'ready'
  },
  {
    id: 'adjektive',
    title: 'Adjectives',
    subtitle: 'Personen beschreiben',
    icon: '👤',
    color: 'from-yellow-400 to-orange-400',
    href: '/milan/englisch/morning/adjektive',
    xp: '+15 XP',
    status: 'ready'
  },
  {
    id: 'have-got',
    title: 'Have Got',
    subtitle: 'Besitz ausdrücken',
    icon: '✋',
    color: 'from-green-400 to-emerald-400',
    href: '/milan/englisch/morning/have-got',
    xp: '+20 XP',
    status: 'ready'
  },
  {
    id: 'breakfast',
    title: 'Breakfast',
    subtitle: 'Frühstücksvokabeln',
    icon: '🍳',
    color: 'from-red-400 to-orange-400',
    href: '/milan/englisch/morning/breakfast',
    xp: '+15 XP',
    status: 'ready'
  },
  {
    id: 'questions',
    title: 'Yes/No Questions',
    subtitle: 'Fragen & Antworten',
    icon: '❓',
    color: 'from-blue-400 to-cyan-400',
    href: '/milan/englisch/morning/questions',
    xp: '+20 XP',
    status: 'ready'
  },
  {
    id: 'spiele',
    title: 'Spiele',
    subtitle: 'Memory, Quiz & mehr',
    icon: '🎮',
    color: 'from-purple-400 to-pink-400',
    href: '/milan/englisch/morning/spiele',
    xp: 'Bonus XP',
    status: 'ready'
  },
  {
    id: 'test',
    title: 'Klassenarbeit',
    subtitle: '30 Minuten Simulation',
    icon: '📝',
    color: 'from-gray-500 to-gray-600',
    href: '/milan/englisch/morning/test',
    xp: '+50 XP',
    status: 'locked'
  },
];

export default function MorningOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-6">
        <Link href="/milan" className="text-orange-200 text-sm">← Zurück</Link>
        <h1 className="text-2xl font-bold mt-2">☀️ In the Morning</h1>
        <p className="text-orange-100">Unit 2 – Körper, Frühstück & mehr</p>
      </div>

      {/* Capitano Intro */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100 flex items-start gap-3">
          <span className="text-3xl">🚀</span>
          <div>
            <p className="font-semibold text-gray-800">Capitano sagt:</p>
            <p className="text-gray-600 text-sm">
              "Heute lernst du, wie du dich und andere beschreiben kannst. Plus: 
              Das legendäre englische Frühstück! Let's go, Miner! 🎮"
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 mb-4">
        <div className="bg-orange-100 rounded-xl p-3 flex justify-between items-center">
          <span className="text-sm text-orange-800">Fortschritt</span>
          <span className="font-bold text-orange-600">0 / 6 Module</span>
        </div>
      </div>

      {/* Modules */}
      <div className="px-4 space-y-3">
        {modules.map((module, index) => (
          <Link 
            key={module.id} 
            href={module.status === 'locked' ? '#' : module.href}
            className={module.status === 'locked' ? 'pointer-events-none' : ''}
          >
            <div className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 ${
              module.status === 'locked' ? 'opacity-50' : 'active:scale-[0.98]'
            } transition-transform`}>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                {index + 1}
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-sm`}>
                {module.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800">{module.title}</h3>
                  {module.status === 'locked' && <span>🔒</span>}
                </div>
                <p className="text-sm text-gray-500">{module.subtitle}</p>
                <p className="text-xs text-orange-600 mt-0.5">{module.xp}</p>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Lernvideo Card */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎬</span>
            <div>
              <p className="font-semibold">Lernvideo</p>
              <p className="text-orange-100 text-sm">Alles erklärt in 15 Minuten</p>
            </div>
          </div>
          <button className="mt-3 w-full bg-white/20 py-2 rounded-xl text-sm font-medium">
            ▶️ Video ansehen
          </button>
        </div>
      </div>
    </div>
  );
}
