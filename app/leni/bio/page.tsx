'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Gamepad2, ListOrdered, Brain, FileText, Microscope } from 'lucide-react';

const activities = [
  {
    href: '/leni/bio/lernen',
    icon: BookOpen,
    emoji: '📚',
    title: 'Lernkarten',
    description: 'Alle Infos durchblättern',
    color: 'from-violet-500 to-purple-600',
  },
  {
    href: '/leni/bio/memory',
    icon: Gamepad2,
    emoji: '🎴',
    title: 'Memory',
    description: 'Organellen & Funktionen zuordnen',
    color: 'from-pink-500 to-rose-600',
  },
  {
    href: '/leni/bio/sortieren',
    icon: ListOrdered,
    emoji: '🔀',
    title: 'Sortieren',
    description: 'Pro- vs. Eukaryoten einordnen',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    href: '/leni/bio/quiz',
    icon: Brain,
    emoji: '❓',
    title: 'Quiz',
    description: '10 Fragen zum Üben',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    href: '/leni/bio/test',
    icon: FileText,
    emoji: '📝',
    title: 'Mini-Test',
    description: 'Wie im echten Test',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function LeniBioPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
          <Microscope className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🔬 Zellen-Trainer
        </h1>
        <p className="text-gray-500">Bio-Test am Donnerstag • Pro-/Eukaryoten & Organellen</p>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">Dein Fortschritt</span>
          <span className="text-emerald-100">3/5 Aktivitäten</span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-[60%]" />
        </div>
      </div>

      {/* Themen-Überblick */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-3">📋 Was kommt dran?</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Prokaryoten vs. Eukaryoten
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Tierische vs. Pflanzliche Zellen
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Zellorganellen & ihre Funktionen
          </li>
        </ul>
      </div>

      {/* Aktivitäten */}
      <h2 className="font-semibold text-gray-800 mb-4">🎯 Übungen</h2>
      <div className="space-y-3">
        {activities.map((act) => (
          <Link key={act.href} href={act.href}>
            <div className={`bg-gradient-to-r ${act.color} rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]`}>
              <span className="text-3xl">{act.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold text-lg">{act.title}</p>
                <p className="text-white/80 text-sm">{act.description}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <act.icon className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
