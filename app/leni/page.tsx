'use client';

import Link from 'next/link';
import { Zap, Flame, ChevronRight, Play } from 'lucide-react';

// Fächer mit Fortschritt und nächster Aktivität
const subjects = [
  {
    id: 'bio',
    name: 'Biologie',
    emoji: '🔬',
    color: 'emerald',
    progress: 60,
    nextActivity: 'Quiz',
    nextPath: '/leni/bio/quiz',
    totalSteps: 5,
    completedSteps: 3,
  },
  {
    id: 'physik',
    name: 'Physik',
    emoji: '⚗️',
    color: 'teal',
    progress: 0,
    nextActivity: 'Video schauen',
    nextPath: '/leni/physik/dichte',
    totalSteps: 8,
    completedSteps: 0,
  },
  {
    id: 'franzoesisch',
    name: 'Französisch',
    emoji: '🇫🇷',
    color: 'blue',
    progress: 25,
    nextActivity: 'Vokabeln lernen',
    nextPath: '/leni/franzoesisch/lernen',
    totalSteps: 6,
    completedSteps: 1,
  },
  {
    id: 'sozialkunde',
    name: 'Politische Bildung',
    emoji: '⚖️',
    color: 'orange',
    progress: 0,
    nextActivity: 'Einführung',
    nextPath: '/leni/sozialkunde',
    totalSteps: 5,
    completedSteps: 0,
  },
];

// Das Fach mit dem höchsten Fortschritt (aber nicht 100%) empfehlen
const recommendedSubject = subjects
  .filter(s => s.progress < 100)
  .sort((a, b) => b.progress - a.progress)[0];

export default function LeniHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Header mit XP */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hey Leni 👋</h1>
          <p className="text-gray-500 text-sm">Bereit für heute?</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="font-bold text-purple-700 text-sm">847</span>
          </div>
          <div className="bg-orange-100 rounded-full px-3 py-1.5 flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-orange-600 text-sm">5</span>
          </div>
        </div>
      </div>

      {/* Streak-Warnung */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3 mb-4 text-white flex items-center gap-3">
        <Flame className="w-6 h-6" />
        <div className="flex-1">
          <p className="font-medium text-sm">5-Tage-Streak! 🔥</p>
          <p className="text-orange-100 text-xs">Mach heute weiter um ihn zu halten!</p>
        </div>
      </div>

      {/* HAUPT-CTA: Weiter lernen */}
      <Link href={recommendedSubject.nextPath}>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 mb-6 text-white shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98]">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-purple-200 text-xs font-medium mb-1">WEITER LERNEN</p>
              <p className="font-bold text-xl mb-1">
                {recommendedSubject.emoji} {recommendedSubject.name}
              </p>
              <p className="text-purple-200 text-sm">
                Nächster Schritt: {recommendedSubject.nextActivity}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${recommendedSubject.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium">{recommendedSubject.progress}%</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-7 h-7 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Alle Fächer */}
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Alle Fächer
      </h2>
      <div className="space-y-2">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/leni/${subject.id === 'physik' ? 'physik/dichte' : subject.id}`}>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow active:scale-[0.99]">
              <div className={`w-10 h-10 bg-${subject.color}-100 rounded-lg flex items-center justify-center`}>
                <span className="text-xl">{subject.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800 text-sm">{subject.name}</p>
                  <span className={`text-xs font-medium text-${subject.color}-600`}>
                    {subject.completedSteps}/{subject.totalSteps}
                  </span>
                </div>
                <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${subject.color}-500 rounded-full`}
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Level-Fortschritt */}
      <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Level 12</span>
          <span className="text-xs text-purple-600 font-medium">847 / 1000 XP</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[84.7%]" />
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">Noch 153 XP bis Level 13! 🚀</p>
      </div>
    </div>
  );
}
